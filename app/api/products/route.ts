import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {

    const formData = await req.formData();

    const name =
      formData.get("name") as string;

    const description =
      formData.get("description") as string;

    const price =
      Number(formData.get("price"));

    const category =
      formData.get("category") as string;

    const image =
      formData.get("image") as File;

    let imageUrl =
      "/products/default.jpg";

    if (
      image &&
      image.size > 0
    ) {

      const bytes =
        await image.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      const uploadDir =
        path.join(
          process.cwd(),
          "public",
          "products"
        );

      if (
        !fs.existsSync(
          uploadDir
        )
      ) {
        fs.mkdirSync(
          uploadDir,
          {recursive:true}
        );
      }

      const fileName =
        `${Date.now()}-${image.name}`;

      fs.writeFileSync(
        path.join(
          uploadDir,
          fileName
        ),
        buffer
      );

      imageUrl =
        `/products/${fileName}`;
    }

    const product =
      await prisma.product.create({
        data:{
          name,
          description,
          price,
          category,
          imageUrl
        }
      });

    return Response.json(
      product
    );

  } catch(error){

    console.log(error);

    return Response.json(
      {
        error:
        "Upload failed"
      },
      {status:500}
    );
  }
}
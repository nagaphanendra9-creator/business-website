import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const product =
      await prisma.product.create({
        data:{
          name: body.name,
          description: body.description,
          price: Number(body.price),
          category: body.category || "",
          imageUrl: body.imageUrl || ""
        }
      });

    return Response.json(product);

  } catch(error){

    console.log(error);

    return Response.json(
      {error:"Failed to add product"},
      {status:500}
    );
  }
}
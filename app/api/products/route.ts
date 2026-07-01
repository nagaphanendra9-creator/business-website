import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: Number(body.price),
        category: body.category || "",
        imageUrl: body.imageUrl || ""
      }
    });

    return Response.json(product);

  } catch (error) {
    console.error("PRODUCT ERROR:", error);

    return Response.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
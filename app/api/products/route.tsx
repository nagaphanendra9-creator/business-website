import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      imageUrl: body.imageUrl,
      category: body.category
    }
  });

  return Response.json(product);
}
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id:string }> }
) {
  const { id } = await params;

  const body = await request.json();

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      price: body.price
    }
  });

  return Response.json(product);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id:string }> }
) {
  const { id } = await params;

  await prisma.product.delete({
    where:{ id }
  });

  return Response.json({success:true});
}
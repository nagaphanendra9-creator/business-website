import { prisma } from "@/lib/prisma";
import ProductList from "@/components/ProductList";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div style={{padding:"40px"}}>
      <h1>All Products</h1>

      <ProductList
        products={products}
        whatsappNumber="919999999999"
      />
    </div>
  );
}
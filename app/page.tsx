import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany();

  const settings = {
    companyName: "My Business",
    tagline: "Professional products and services",
    whatsappNumber: "919999999999"
  };

  return (
    <>
      <Hero
        companyName={settings.companyName}
        tagline={settings.tagline}
      />

      <Stats totalProducts={products.length} />

      <FeaturedProducts
        products={products}
        whatsappNumber={settings.whatsappNumber}
      />
    </>
  );
}
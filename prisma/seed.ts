import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash("Admin@12345", 10);

  await prisma.adminUser.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      passwordHash,
      name: "Owner Admin"
    }
  });

  await prisma.siteSettings.upsert({
    where: { id: "main" },
    update: {},
    create: {
      id: "main",
      companyName: "Premium Business Co.",
      tagline: "Professional solutions for modern businesses",
      whatsappNumber: "917075629604",
      contactEmail: "info@premiumbusiness.com",
      contactPhone: "+91 70756 29604",
      address: "Your business address here",
      googleMapsEmbed:
        "[google.com](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0)",
      facebookUrl: "[facebook.com](https://facebook.com)",
      instagramUrl: "[instagram.com](https://instagram.com)",
      linkedinUrl: "[linkedin.com](https://linkedin.com)"
    }
  });

  const products = [
    {
      name: "Premium Product One",
      slug: "premium-product-one",
      description: "High-quality product designed for modern business needs.",
      price: 4999,
      discountPrice: 4499,
      imageUrl: "[images.unsplash.com](https://images.unsplash.com/photo-1523275335684-37898b6baf30)",
      category: "Featured",
      featured: true
    },
    {
      name: "Business Product Two",
      slug: "business-product-two",
      description: "Professional-grade solution with strong value and reliability.",
      price: 7999,
      discountPrice: null,
      imageUrl: "[images.unsplash.com](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9)",
      category: "Electronics",
      featured: true
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        isActive: true
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

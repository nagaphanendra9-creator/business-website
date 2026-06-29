import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

async function main() {

  const passwordHash = await hash(
    "Admin@12345",
    10
  );

  await prisma.adminUser.upsert({
    where:{
      email:"admin@example.com"
    },
    update:{},
    create:{
      email:"admin@example.com",
      passwordHash,
      name:"Admin"
    }
  });

  console.log("Admin created");
}

main()
.catch(console.error)
.finally(async()=>{
 await prisma.$disconnect();
});
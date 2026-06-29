import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

async function main() {

  await prisma.adminUser.deleteMany();

  const passwordHash = await hash(
    "123456",
    10
  );

  await prisma.adminUser.create({
    data:{
      email:"admin@gmail.com",
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
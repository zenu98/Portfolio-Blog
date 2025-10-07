import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";
import tech from "./techs";
import projectData from "./project-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.tech.deleteMany();
  await prisma.project.deleteMany();

  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.tech.createMany({ data: tech.techs });
  await prisma.project.createMany({ data: projectData.projects });
  await prisma.user.createMany({ data: projectData.users });

  console.log("DB Seeds Successfully");
}

main();

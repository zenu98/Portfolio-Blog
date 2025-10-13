"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertPlainObject } from "../utils";
import { TechType } from "../generated/prisma";
export async function getTechs() {
  const data = await prisma.tech.findMany({
    orderBy: [{ type: "asc" }, { order: "asc" }],
  });
  return convertPlainObject(data);
}
export async function getTechsByType() {
  const types = Object.values(TechType);

  const result: Record<string, any> = {};

  for (const type of types) {
    const techs = await prisma.tech.findMany({
      where: { type },
      orderBy: { order: "asc" },
    });
    result[type] = techs;
  }

  return convertPlainObject(result);
}

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertPlainObject(data);
}
export async function getAllProjects() {
  const data = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return convertPlainObject(data);
}

export async function getMainProjects() {
  return await prisma.project.findMany({
    where: { type: "main" },
    orderBy: { createdAt: "desc" },
  });
}

export async function getSideProjects() {
  return await prisma.project.findMany({
    where: { type: "side" },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
export async function getProjectBySlug(slug: string) {
  return await prisma.project.findFirst({
    where: { slug: slug },
  });
}

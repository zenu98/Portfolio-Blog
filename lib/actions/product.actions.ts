"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertPlainObject } from "../utils";

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

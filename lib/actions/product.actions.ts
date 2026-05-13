"use server";
import { LATEST_PRODUCTS_LIMIT, PAGE_SIZE } from "../constants";
import { prisma } from "@/db/prisma";
import { convertPlainObject } from "../utils";
import { TechType } from "../generated/prisma";
import { revalidatePath } from "next/cache";
import { insertProjectSchema, updateProjectSchema } from "../validators";
import z, { formatError } from "zod";
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

export async function getSpiralImages() {
  return await prisma.spiralImage.findMany();
}

export async function getMainProjects() {
  const projects = await prisma.project.findMany({
    where: { type: "main" },
    orderBy: { createdAt: "desc" },
  });

  // 여행대로를 맨 앞으로
  return [
    ...projects.filter((p) => p.title.includes("여행대로")),
    ...projects.filter((p) => !p.title.includes("여행대로")),
  ];
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
export async function getProjectById(projectId: string) {
  const data = await prisma.project.findFirst({
    where: { id: projectId },
  });
  return convertPlainObject(data);
}
export async function getAllProjectAtAdmin({
  query,
  limit = PAGE_SIZE,
  page,
  category,
}: {
  query: string;
  limit?: number;
  page: number;
  category?: string;
}) {
  const data = await prisma.project.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });
  const dataCount = await prisma.project.count();

  return {
    data,
    totalPages: Math.ceil(dataCount / limit),
  };
}

//Delete

export async function deleteProject(id: string) {
  try {
    const projectExists = await prisma.project.findFirst({
      where: { id },
    });
    if (!projectExists) throw new Error("프로젝트가 존재하지 않습니다.");

    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/projects");

    return {
      success: true,
      message: "성공적으로 삭제되었습니다.",
    };
  } catch (error) {
    return { success: false, message: error };
  }
}

export async function createProject(data: z.infer<typeof insertProjectSchema>) {
  try {
    const project = insertProjectSchema.parse(data);
    await prisma.project.create({ data: project });

    revalidatePath("/admin/projects");
    return {
      success: true,
      message: "프로젝트가 성공적으로 생성되었습니다.",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update Product
export async function updateProject(data: z.infer<typeof updateProjectSchema>) {
  try {
    const project = updateProjectSchema.parse(data);
    const projectExists = await prisma.project.findFirst({
      where: { id: project.id },
    });
    if (!projectExists) throw new Error("프로젝트가 존재하지 않습니다.");
    await prisma.project.update({
      where: { id: project.id },
      data: project,
    });

    revalidatePath("/admin/projects");
    return {
      success: true,
      message: "프로젝트가 성공적으로 수정되었습니다.",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

//  update ongoing
export async function toggleOngoing(id: string) {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });
    if (!project) throw new Error("프로젝트가 존재하지 않습니다.");
    await prisma.project.update({
      where: { id: id },
      data: { isOngoing: !project.isOngoing },
    });

    revalidatePath("/admin/projects");

    return {
      success: true,
      message: "프로젝트가 성공적으로 수정되었습니다.",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

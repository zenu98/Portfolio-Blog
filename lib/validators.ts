import { z } from "zod";
import { formatNumWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumWithDecimal(Number(value))),
    "올바른 가격이 아닙니다."
  );
export const insertProductSchema = z.object({
  name: z.string().min(3, "이름은 최소 3글자"),
  slug: z.string().min(3, "슬러그는 최소 3글자"),
  category: z.string().min(3, "카테고리는 최소 3글자"),
  brand: z.string().min(3, "브랜드는 최소 3글자"),
  description: z.string().min(3, "설명은 최소 3글자"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "최소 한장"),
  isFeatured: z.boolean(),
  banner: z.string().nullable,
  price: currency,
});
export const insertProjectSchema = z.object({
  title: z.string().min(3, "제목은 최소 3글자"),
  slug: z.string().min(3, "슬러그는 최소 3글자"),
  images: z.array(z.string()).min(1, "최소 한장의 이미지"),
  period: z.string().min(1, "기간을 입력하세요"),
  personnel: z.string().min(1, "인원을 입력하세요"),
  skills: z.array(z.string()).min(1, "최소 하나의 스킬"),
  type: z.string().min(1, "타입을 선택하세요"),
  description: z.string().nullable(),
  additionalInfo: z.any().nullable(),
});

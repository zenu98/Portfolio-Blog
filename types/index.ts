import { z } from "zod";
import { insertProductSchema, insertProjectSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
export type Project = z.infer<typeof insertProjectSchema> & {
  id: string;
  createdAt: Date;
};

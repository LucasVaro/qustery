import { z } from "zod";

export const ProductTagSchema = z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  isActive: z.boolean(),
});

export type IProductTag = z.infer<typeof ProductTagSchema>;

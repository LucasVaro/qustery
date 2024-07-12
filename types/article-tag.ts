import { z } from "zod";

export const ArticleTagSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  slug: z.string(),
});

export type IArticleTag = z.infer<typeof ArticleTagSchema>;

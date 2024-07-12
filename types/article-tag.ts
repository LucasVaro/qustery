import { z } from "zod";

export const ArticleTagSchema = z.object({
  name: z.string(),
  image: z.string(),
  slug: z.string(),
});

export type IArticleTag = z.infer<typeof ArticleTagSchema>;

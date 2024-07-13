import { z } from "zod";
import { UserSchema } from ".";

export const ArticleCommentsSchema = z.object({
  id: z.string(),
  note: z.number(),
  user: UserSchema,
  comment: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IArticleComments = z.infer<typeof ArticleCommentsSchema>;

export const ArticleSchema = z.object({
  _id: z.string().optional(),
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  description: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  published: z.boolean(),
  comments: z.array(ArticleCommentsSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IArticle = z.infer<typeof ArticleSchema>;

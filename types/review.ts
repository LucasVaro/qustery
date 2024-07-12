import { z } from 'zod';

export const ReviewSchema = z.object({
  userId: z.string().optional(),
  name: z.string(),
  rating: z.number(),
  comment: z.string(),
});

export type IReview = z.infer<typeof ReviewSchema>;

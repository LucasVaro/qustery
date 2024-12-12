import { z } from "zod";

export const CartAnalyticsSchema = z.object({
  cartId: z.string(),
});

export type ICartAnalytics = z.infer<typeof CartAnalyticsSchema>;

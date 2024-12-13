import { z } from "zod";

export const AnalyticsCartSchema = z.object({
  cartId: z.string(),
});

export type IAnalyticsCart = z.infer<typeof AnalyticsCartSchema>;

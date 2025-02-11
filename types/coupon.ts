import { z } from "zod";

export const CouponSchema = z.object({
  _id: z.string(),
  name: z.string(),
  reduction: z.number(),
  ordersActive: z.boolean(),
  subscriptionsActive: z.boolean(),
  stockTracker: z.boolean(),
  stock: z.number(),
  used: z.number(),
  revenue: z.number(),
  active: z.boolean(),
  dateLimit: z.boolean(),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
});

export type ICoupon = z.infer<typeof CouponSchema>;

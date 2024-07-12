import { z } from "zod";

export const PriceMinSchema = z.object({
  htPrice: z.number(),
  tax: z.number(),
  ttcPrice: z.number(),
  coupon: z.number(),
  shippingPrice: z.number(),
  totalPrice: z.number(),
});

export type IPriceMin = z.infer<typeof PriceMinSchema>;

export const PriceSchema = z.object({
  htPrice: z.number(),
  buyPrice: z.number().optional(),
  marge: z.number().optional(),
  couponRate: z.number().optional(),
  couponAmount: z.number().optional(),
  taxRate: z.number().optional(),
  taxPrice: z.number().optional(),
  comparePrice: z.number().optional(),
  shippingPrice: z.number().optional(),
  ttcPrice: z.number(),
});

export type IPrice = z.infer<typeof PriceSchema>;

import { z } from "zod";

export const ShippingMinSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  timeShipping: z.number().optional(),
  weight: z.number().optional(),
});

export type IShippingMin = z.infer<typeof ShippingMinSchema>;

export const ShippingSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
  timeShipping: z.number(),
  trackingUrl: z.string(),
  zone: z.array(z.string()),
  price: z.number(),
  condType: z.string(),
  condMin: z.number(),
  condMax: z.number(),
});

export type IShipping = z.infer<typeof ShippingSchema>;

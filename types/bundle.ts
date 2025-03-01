import { z } from "zod";
import { PriceSchema } from ".";

export const BundleSchema = z.object({
  _id: z.string(),
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: PriceSchema,
  products: z.array(z.string()),
  ruban: z.string(),
  sell: z.number(),
  images: z.array(z.string()),
  isActive: z.boolean(),
  launchDate: z.date(),
});

export type IBundle = z.infer<typeof BundleSchema>;

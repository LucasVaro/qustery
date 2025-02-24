import { z } from "zod";
import { PriceSchema, ReviewSchema } from ".";

export const ProductMinSchema = z.object({
  _id: z.string(),
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: PriceSchema,
  products: z.array(z.string()),
  ruban: z.string(),
  images: z.array(z.string()),
  isActive: z.boolean(),
  launchDate: z.date(),
});

export type IProductMin = z.infer<typeof ProductMinSchema>;

import { z } from "zod";
import { UserMinSchema, ProductMinSchema, PriceMinSchema } from "..";

export const CartSchema = z.object({
  _id: z.string().optional(),
  user: UserMinSchema,
  localToken: z.string().optional(),
  products: z.array(ProductMinSchema),
  price: PriceMinSchema,
});

export type ICart = z.infer<typeof CartSchema>;

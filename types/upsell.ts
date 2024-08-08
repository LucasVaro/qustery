import { z } from "zod";
import { ProductMinSchema } from "./product";

export const UpsellSchema = z.object({
  priority: z.number(),
  triggerId: z.array(z.string()),
  trigger: z.array(ProductMinSchema),
  recommended: z.array(ProductMinSchema),
});

export type IUpsell = z.infer<typeof UpsellSchema>;

import { z } from "zod";

export const UpsellSchema = z.object({
  priority: z.number(),
  trigger: z.array(z.string()),
  recommended: z.array(z.string()),
});

export type IUpsell = z.infer<typeof UpsellSchema>;

import { z } from "zod";
import { PriceSchema, PriceMinSchema } from ".";

export const SubscriptionSessionSchema = z.object({
  subscriptionId: z.string(),
  subscriptionTag: z.array(z.string()),
  subscriptionPlan: z.string(),
  subscriptionPlanPrice: PriceSchema,
  subscriptionIntervalPayment: z.string(),
  price: PriceMinSchema,
});

export type ISubscriptionSession = z.infer<typeof SubscriptionSessionSchema>;

import { z } from "zod";
import { PriceSchema } from ".";

export const SubscriptionPlanSchema = z.object({
  _id: z.string().optional(),
  subscriptionPlanId: z.string(),
  sku: z.string(),
  name: z.string(),
  ruban: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  price: PriceSchema,
  trialDays: z.number(),
  intervalPayment: z.string(),
  tags: z.array(z.string()),
  stockTracker: z.boolean(),
  stock: z.number(),
  sell: z.number(),
  sendMail: z.boolean(),
  mailObject: z.string(),
  mailText: z.string(),
  invoiceAttachment: z.boolean(),
  isActive: z.boolean(),
});

export type ISubscriptionPlan = z.infer<typeof SubscriptionPlanSchema>;

import { z } from "zod";
import {
  PriceMinSchema,
  PriceSchema,
  AddressSchema,
  UserMinSchema,
  AffiliationSchema,
} from "..";

export const SubscriptionSchema = z.object({
  user: UserMinSchema,
  affiliation: AffiliationSchema,
  invoiceId: z.string(),
  subscriptionId: z.string(),
  subscriptionStripeId: z.string(),
  subscriptionSessionId: z.string(),
  subscriptionTag: z.array(z.string()),
  subscriptionPlan: z.string(),
  subscriptionPlanPrice: PriceSchema,
  price: PriceMinSchema,
  subscriptionIntervalPayment: z.string(),
  invoiceAddress: AddressSchema,
  subscriptionDate: z.date(),
  mailConfirmationSended: z.boolean(),
  isActive: z.boolean(),
  coupon: z.string(),
  source: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ISubscription = z.infer<typeof SubscriptionSchema>;

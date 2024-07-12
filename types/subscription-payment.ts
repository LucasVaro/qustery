import { z } from "zod";
import {
  PriceSchema,
  PriceMinSchema,
  UserMinSchema,
  AffiliationSchema,
} from "..";

export const SubscriptionPaymentSchema = z.object({
  _id: z.string().optional(),
  user: UserMinSchema,
  subscriptionId: z.string(),
  subscriptionName: z.string(),
  subscriptionStripeId: z.string(),
  invoiceId: z.string(),
  stripeInvoiceId: z.string(),
  invoiceStatus: z.string(),
  subscriptionPlanPrice: PriceSchema,
  price: PriceMinSchema,
  coupon: z.string(),
  affiliation: AffiliationSchema,
  source: z.string(),
  createdAt: z.date(),
});

export type ISubscriptionPayment = z.infer<typeof SubscriptionPaymentSchema>;

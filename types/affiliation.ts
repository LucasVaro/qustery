import { z } from "zod";
import { UserSchema } from ".";

export const AffiliationPaymentSchema = z.object({
  id: z.string(),
  price: z.number(),
  commission: z.number(),
  date: z.date(),
});

export type IAffiliationPayment = z.infer<typeof AffiliationPaymentSchema>;

export const AffiliationConditionsSchema = z.object({
  orders: z.boolean(),
  subscriptions: z.boolean(),
  subscriptionsLimitation: z.boolean(),
  subscriptionsLimit: z.number(),
});

export type IAffiliationConditions = z.infer<
  typeof AffiliationConditionsSchema
>;

export const AffiliationSchema = z.object({
  _id: z.string(),
  user: UserSchema,
  tag: z.string(),
  commissionRate: z.number(),
  conditions: AffiliationConditionsSchema,
  revenue: z.number(),
  paid: z.number(),
  balance: z.number(),
  orders: z.array(AffiliationPaymentSchema),
  subscriptionPayments: z.array(AffiliationPaymentSchema),
});

export type IAffiliation = z.infer<typeof AffiliationSchema>;

import { z } from "zod";
import {
  AddressSchema,
  UserMinSchema,
  ProductMinSchema,
  PriceMinSchema,
  ShippingMinSchema,
  AffiliationSchema,
} from ".";

export const OrdersSchema = z.object({
  _id: z.string().optional(),
  user: UserMinSchema,
  products: z.array(ProductMinSchema),
  price: PriceMinSchema,
  isPaid: z.boolean(),
  paidAt: z.date(),
  shippingAddress: AddressSchema,
  invoiceAddress: AddressSchema,
  invoiceId: z.string(),
  status: z.string(),
  deliveredAt: z.date(),
  deliveredPrevisionAt: z.date(),
  invoiceInformations: z.string(),
  estimateInformations: z.string(),
  additionnalInformations: z.string(),
  shippingInformations: z.string(),
  trackingNumber: z.string(),
  trackingUrl: z.string(),
  stripePaymentId: z.string(),
  stripePaymentClientSecret: z.string(),
  shipping: ShippingMinSchema,
  createdAt: z.date(),
  orderType: z.string(),
  coupon: z.string(),
  affiliation: AffiliationSchema,
  source: z.string(),
  productsDeducted: z.boolean(),
  // PROVISOIRE
  parcelShop: z.any(),
});

export type IOrder = z.infer<typeof OrdersSchema>;

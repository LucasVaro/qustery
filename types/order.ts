import { z } from "zod";
import {
  AddressSchema,
  UserMinSchema,
  ProductMinSchema,
  PriceMinSchema,
  ShippingMinSchema,
} from "..";

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
  affiliation: z.object({ _id: z.string() }), // Exemple, assurez-vous d'importer correctement l'interface IAffiliation
  source: z.string(),
  productsDeducted: z.boolean(),
});

export type IOrder = z.infer<typeof OrdersSchema>;

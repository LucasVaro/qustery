import { z } from "zod";
import { AddressSchema } from "./address";

const OrderUserSchema = z.object({
  id: z.string(),
  date: z.date(),
  totalPrice: z.number(),
});

export const UserSchema = z.object({
  _id: z.string().optional(),
  id: z.string().optional(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  pseudo: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  password: z.string().nullable(),
  codeResetPassword: z.string().nullable(),
  shippingAddress: AddressSchema.nullable(),
  invoiceAddress: AddressSchema.nullable(),
  stripeId: z.string().nullable(),
  lastStripeId: z.array(z.string()).nullable(),
  tags: z.array(z.string()).nullable(),
  type: z.string().nullable(),
  emailCode: z.number().nullable(),
  emailIsChecked: z.boolean().nullable(),
  orders: z.array(OrderUserSchema).nullable(),
  totalSpent: z.number().nullable(),
  lastEmail: z.array(z.string()).nullable(),
  subsriptionDate: z.date().nullable(),
  lastVisit: z.date().nullable(),
  lastOrderDate: z.date().nullable(),
  telegramToken: z.string().nullable(),
  telegramChatId: z.string().nullable(),
  source: z.string().nullable(),
  sponsor: z.string().nullable(),
  launchDate: z.date().nullable(),
});

export type IUser = z.infer<typeof UserSchema>;

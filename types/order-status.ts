import { z } from "zod";

const SizesSchema = z.object({
  width: z.number(),
  height: z.number(),
});

export type ISize = z.infer<typeof SizesSchema>;

export const OrderStatusSchema = z.object({
  name: z.string(),
  isDefault: z.boolean(),
  isDefaultPaid: z.boolean(),
  sendMail: z.boolean(),
  mailObject: z.string(),
  mailText: z.string(),
  mailImageSize: z.array(SizesSchema),
  variablesInMail: z.array(z.string()),
  attachment: z.array(z.string()),
  invoiceAttachment: z.boolean(),
  estimateAttachment: z.boolean(),
});

export type IOrderStatus = z.infer<typeof OrderStatusSchema>;

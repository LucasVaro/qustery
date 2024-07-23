import { z } from "zod";

export const AddressSchema = z.object({
  country: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  complement: z.string().optional(),
  phone: z.string().optional(),
});

export type IAddress = z.infer<typeof AddressSchema>;

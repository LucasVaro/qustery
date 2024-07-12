import { z } from "zod";

export const AddressSchema = z.object({
  country: z.string().nullable(),
  city: z.string().nullable(),
  zipCode: z.string().nullable(),
  address: z.string().nullable(),
  complement: z.string().nullable(),
  phone: z.string().nullable(),
});

export type IAddress = z.infer<typeof AddressSchema>;

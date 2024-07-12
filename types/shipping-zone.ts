import { z } from "zod";

export const ShippingZoneSchema = z.object({
  name: z.string(),
});

export type IShippingZone = z.infer<typeof ShippingZoneSchema>;

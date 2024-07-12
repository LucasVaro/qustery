import { z } from "zod";

export const ShippingZoneSchema = z.object({
  name: z.string(),
});

export type ShippingZone = z.infer<typeof ShippingZoneSchema>;

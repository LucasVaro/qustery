import { z } from "zod";
import { Utm, AnalyticsLocationSchema, DeviceSchema } from ".";

export const AnalyticsCartSchema = z.object({
  cartId: z.string(),
  ip: z.string(),
  location: AnalyticsLocationSchema,
  userId: z.string(),
  sessionId: z.string(),
  device: DeviceSchema,
  affiliation: z.string(),
  source: z.string(),
  referer: z.string(),
  utm: Utm,
});

export type IAnalyticsCart = z.infer<typeof AnalyticsCartSchema>;

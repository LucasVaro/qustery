import { z } from "zod";
import { Utm, AnalyticsLocationSchema, DeviceSchema } from ".";

export const AnalyticsTimeSchema = z.object({
  time: z.number(),
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

export type IAnalyticsTime = z.infer<typeof AnalyticsTimeSchema>;

import { z } from "zod";

export const AnalyticsLocationSchema = z.object({
  country: z.string(),
  countryCode: z.string(),
  region: z.string(),
  city: z.string(),
  zip: z.string(),
  lat: z.string(),
  lon: z.string(),
});

export type IAnalyticsLocation = z.infer<typeof AnalyticsLocationSchema>;

export const DeviceSchema = z.object({
  type: z.string(),
  platform: z.string(),
});

export type IDevice = z.infer<typeof DeviceSchema>;

export const AnalyticsSchema = z.object({
  ip: z.string(),
  location: AnalyticsLocationSchema,
  page: z.string(),
  userId: z.string(),
  sessionId: z.string(),
  device: DeviceSchema,
  affiliation: z.string(),
  source: z.string(),
  referer: z.string(),
});

export type IAnalytics = z.infer<typeof AnalyticsSchema>;

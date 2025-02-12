import { record, z } from "zod";

export const Utm = z.object({
  utm_source: z.string(),
  utm_medium: z.string(),
  utm_campaign: z.string(),
  utm_term: z.string(),
  utm_content: z.string(),
});

export type IUtm = z.infer<typeof Utm>;

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
  page: z.string(),
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

export type IAnalytics = z.infer<typeof AnalyticsSchema>;

export const RecordSchema = z.object({
  _id: z.string().optional(),
  page: z.string(),
  ip: z.string(),
  location: AnalyticsLocationSchema,
  userId: z.string(),
  sessionId: z.string(),
  device: DeviceSchema,
  affiliation: z.string(),
  source: z.string(),
  referer: z.string(),
  utm: Utm,
  events: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IRecord = z.infer<typeof RecordSchema>;

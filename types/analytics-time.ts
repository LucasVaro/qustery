import { z } from "zod";

export const AnalyticsSchema = z.object({
  sessionId: z.string(),
  time: z.number(),
});

export type IAnalytics = z.infer<typeof AnalyticsSchema>;

import { z } from "zod";

export const AnalyticsTimeSchema = z.object({
  sessionId: z.string(),
  time: z.number(),
});

export type IAnalyticsTime = z.infer<typeof AnalyticsTimeSchema>;

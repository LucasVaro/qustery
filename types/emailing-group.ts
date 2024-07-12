import { z } from "zod";

export const EmailingGroupSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type IEmailingGroup = z.infer<typeof EmailingGroupSchema>;

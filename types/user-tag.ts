import { z } from "zod";

export const UserTagSchema = z.object({
  name: z.string(),
});

export type IUserTag = z.infer<typeof UserTagSchema>;

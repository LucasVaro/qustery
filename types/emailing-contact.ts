import { z } from "zod";

export const EmailingContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  group: z.string(),
  source: z.string(),
  affiliation: z.string(),
  status: z.string(),
});

export type IEmailingContact = z.infer<typeof EmailingContactSchema>;

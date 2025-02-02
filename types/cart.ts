import { z } from "zod";
import {
  UserMinSchema,
  ProductMinSchema,
  PriceMinSchema,
  Utm,
  AnalyticsLocationSchema,
  DeviceSchema,
} from ".";
import {} from "./analytics";

export const CartSchema = z.object({
  _id: z.string().optional(),
  user: UserMinSchema,
  localToken: z.string().optional(),
  products: z.array(ProductMinSchema),
  price: PriceMinSchema,

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

export type ICart = z.infer<typeof CartSchema>;

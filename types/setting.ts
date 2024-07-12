import { z } from "zod";
import { AddressSchema } from "..";

export const SmtpSchema = z.object({
  host: z.string(),
  port: z.number(),
  secure: z.boolean(),
  username: z.string(),
  password: z.string(),
});

export type ISmtp = z.infer<typeof SmtpSchema>;

export const NotificationsSchema = z.object({
  orders: z.boolean(),
  users: z.boolean(),
  subscriptions: z.boolean(),
});

export type INotifications = z.infer<typeof NotificationsSchema>;

export const IntegrationsSchema = z.object({
  googleAnalytics: z.string(),
  googleTagManager: z.string(),
  hotjar: z.string(),
  facebookPixel: z.string(),
  twitterPixel: z.string(),
  linkedinPixel: z.string(),
  snapchatPixel: z.string(),
  tiktokPixel: z.string(),
  pinterestPixel: z.string(),
  googleAdsPixel: z.string(),
});

export type IIntegrations = z.infer<typeof IntegrationsSchema>;

export const MaintenanceSchema = z.object({
  isActivated: z.boolean(),
  message: z.string(),
});

export type IMaintenance = z.infer<typeof MaintenanceSchema>;

const AlignmentEnum = z.enum(["left", "center", "right"]);

export const AnnouncementSchema = z.object({
  message: z.string(),
  isActivated: z.boolean(),
  colors: z.object({
    background: z.string(),
    text: z.string(),
  }),
  alignment: AlignmentEnum,
});

export type IAnnouncement = z.infer<typeof AnnouncementSchema>;

export const ColorsSchema = z.object({
  isActivated: z.boolean(),
  list: z.object({
    primary: z.string().optional(),
    "primary-foreground": z.string().optional(),
    secondary: z.string().optional(),
    "secondary-foreground": z.string().optional(),
    star: z.string().optional(),
  }),
});

export type IColors = z.infer<typeof ColorsSchema>;

export const SettingsSchema = z.object({
  name: z.string(),
  metatitle: z.string(),
  description: z.string(),
  phone: z.string(),
  email: z.string(),
  logo: z.string(),
  favicon: z.string(),
  address: AddressSchema,
  siret: z.string(),
  tva: z.string(),
  cee: z.string(),
  smtp: SmtpSchema,
  stripeAccountId: z.string(),
  stripeWebhookSecret: z.string(),
  refundPolicy: z.string(),
  confidentialityPolicy: z.string(),
  termsOfUse: z.string(),
  generalConditionsOfSales: z.string(),
  legalNotice: z.string(),
  shippingInformations: z.string(),
  returnInformations: z.string(),
  securityPaiementInformations: z.string(),
  faqInformations: z.string(),
  aboutInformations: z.string(),
  googleAnalyticsId: z.string(),
  setup1: z.boolean(),
  setup2: z.boolean(),
  notifications: NotificationsSchema,
  integrations: IntegrationsSchema,
  maintenance: MaintenanceSchema,
  announcement: AnnouncementSchema,
  colors: ColorsSchema,
});

export type ISettings = z.infer<typeof SettingsSchema>;

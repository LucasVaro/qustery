import { z } from "zod";
import { PriceSchema, ReviewSchema } from ".";

export const VariablesSchema = z.object({
  name: z.string(),
  solutions: z.array(z.string()),
});

export type IVariables = z.infer<typeof VariablesSchema>;

export const VariantSchema = z.object({
  id: z.string(),
  sku: z.string(),
  name: z.string(),
  variables: z.array(VariablesSchema),
  price: PriceSchema,
  reduction: z.number().optional(),
  image: z.string(),
  stock: z.number(),
  stockTracker: z.boolean(),
  sell: z.number(),
  weight: z.number(),
});

export type IVariant = z.infer<typeof VariantSchema>;

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export type IFaq = z.infer<typeof FaqSchema>;

export const SimilarProductSchema = z.object({
  _id: z.string().optional(),
  productId: z.string(),
  name: z.string(),
  image: z.string(),
});

export type ISimilarProduct = z.infer<typeof SimilarProductSchema>;

export const RecommendedProductsSchema = z.object({
  type: z.string(),
  category: z.string().optional(),
  similarProducts: z.array(SimilarProductSchema),
});

export const ProductMinSchema = z.object({
  _id: z.string(),
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  sku: z.string().optional(),
  weight: z.number(),
  price: PriceSchema,
  quantity: z.number(),
  variant: z.string().optional(),
  customFields: z.array(z.object({ name: z.string(), value: z.string() })),
});

export type IProductMin = z.infer<typeof ProductMinSchema>;

export const ProductSchema = z.object({
  _id: z.string().optional(),
  id: z.string().optional(),
  productId: z.string(),
  sku: z.string(),
  slug: z.string(),
  name: z.string(),
  ruban: z.string(),
  rating: z.number(),
  faq: z.array(FaqSchema),
  reviews: z.array(ReviewSchema),
  description: z.string(),
  pageDescription: z.string(),
  images: z.array(z.string()),
  price: PriceSchema,
  weight: z.number(),
  tags: z.array(z.string()),
  variables: z.array(VariablesSchema),
  variants: z.array(VariantSchema),
  customFields: z.array(z.string()),
  stockTracker: z.boolean(),
  stock: z.number(),
  sell: z.number(),
  isActive: z.boolean(),
  recommendedProducts: z.array(RecommendedProductsSchema),
  launchDate: z.date().nullable(),
  createdAt: z.date(),
});

export type IProduct = z.infer<typeof ProductSchema>;

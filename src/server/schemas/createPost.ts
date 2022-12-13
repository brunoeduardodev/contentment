import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  keywords: z.string().array(),
  categoriesSlugs: z.string().array(),
  shortDescription: z.string(),
  content: z.string(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

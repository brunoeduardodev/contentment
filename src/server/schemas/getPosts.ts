import { z } from "zod";

export const getPostsSchema = z.object({
  authorId: z.string().optional(),

  limit: z.number().default(20),
  cursor: z.string().nullish(),
});

export type GetPostsInput = z.infer<typeof getPostsSchema>;

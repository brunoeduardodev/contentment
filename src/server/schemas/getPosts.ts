import { z } from "zod";

export const getPostsSchema = z.object({
  authorId: z.string().optional(),

  take: z.number().default(20),
  skip: z.number().default(0),
});

export type GetPostsInput = z.infer<typeof getPostsSchema>;

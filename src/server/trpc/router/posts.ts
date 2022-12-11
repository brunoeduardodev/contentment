import { TRPCError } from "@trpc/server";
import { getPostsSchema } from "../../schemas/getPosts";
import { protectedProcedure, router } from "../trpc";

export const postsRouter = router({
  get: protectedProcedure
    .input(getPostsSchema)
    .query(
      async ({ input: { authorId, skip, take }, ctx: { prisma, session } }) => {
        if (
          session.user.role !== "User" &&
          (!authorId || authorId !== session.user.id)
        ) {
          throw new TRPCError({
            code: "FORBIDDEN",
          });
        }

        return prisma.post.findMany({
          select: {
            _count: true,
            author: { select: { name: true, image: true } },
            title: true,
            categories: { select: { name: true } },
            shortDescription: true,
            createdAt: true,
            updatedAt: true,
            slug: true,
            id: true,
          },
          skip,
          take,
          where: { authorId },
        });
      }
    ),
});

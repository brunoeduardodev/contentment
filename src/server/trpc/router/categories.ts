import { publicProcedure, router } from "../trpc";

export const categoriesRouter = router({
  index: publicProcedure.query(({ ctx: { prisma } }) => {
    return prisma.postCategory.findMany({
      take: 50,
    });
  }),
});

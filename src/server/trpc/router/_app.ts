import { router } from "../trpc";
import { authRouter } from "./auth";
import { categoriesRouter } from "./categories";
import { postsRouter } from "./posts";

export const appRouter = router({
  auth: authRouter,
  posts: postsRouter,
  categories: categoriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

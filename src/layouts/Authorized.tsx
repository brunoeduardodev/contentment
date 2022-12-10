import { signIn, useSession } from "next-auth/react";
import type { PropsWithChildren } from "react";

export const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  const { data: sessionData } = useSession();

  if (!sessionData) {
    return (
      <main className="flex h-full w-full flex-col items-center justify-center">
        <p className="text-2xl font-bold">Heey, you need to be signed in!</p>

        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </main>
    );
  }

  return <>{children}</>;
};

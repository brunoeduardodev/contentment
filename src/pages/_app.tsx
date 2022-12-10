import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

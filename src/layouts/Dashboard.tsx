import type { PropsWithChildren } from "react";
import { Sidebar } from "../components/Sidebar";
import { AuthorizedLayout } from "./Authorized";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <AuthorizedLayout>
      <div className="flex h-full min-h-screen w-full">
        <Sidebar />

        <main className="flex flex-1 flex-col gap-4 bg-black/10 p-4 md:gap-6 md:p-6 xl:p-8">
          {children}
        </main>
      </div>
    </AuthorizedLayout>
  );
};

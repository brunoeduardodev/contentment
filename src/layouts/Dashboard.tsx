import type { PropsWithChildren } from "react";
import { Sidebar } from "../components/Sidebar";
import { AuthorizedLayout } from "./Authorized";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <AuthorizedLayout>
      <div className="flex h-full min-h-screen w-full">
        <Sidebar />

        <main className="flex-1 bg-black/10 p-4">{children}</main>
      </div>
    </AuthorizedLayout>
  );
};

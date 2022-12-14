import type { PageWithLayout } from "../layouts";
import Head from "next/head";
import { DashboardLayout } from "../layouts/Dashboard";

const Home: PageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contentment</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        Hey
      </main>
    </>
  );
};

Home.Layout = DashboardLayout;

export default Home;

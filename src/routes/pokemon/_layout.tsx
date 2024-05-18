import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import Navigation from "@/components/common/Navigation.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>ポケモン図鑑</title>
      </Head>
      <div className="bg-gray-100 h-screen">
        <Navigation />
        <main>
          <Component />
        </main>
      </div>
    </>
  );
}

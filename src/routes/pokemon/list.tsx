import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { getCustomPokemonList } from "@/api/resolver/pokemon.ts"

import { PokemonListItemCustom } from "@/types/custom.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const page = ctx.url.searchParams.get("page") || 1;
    const limit = Number(ctx.url.searchParams.get("limit")) || 20;
    const offset = (Number(page) - 1) * Number(limit);

    const data = await getCustomPokemonList({ limit, offset });

    console.log("data", data);

    const resp = await ctx.render(data);

    return resp;
  },
};

export default function PokemonList(props: PageProps) {
  const page = Number(props.url.searchParams.get("page")) || 1;

  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          ポケモン図鑑
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props?.data?.map((pokemon: PokemonListItemCustom, index: number) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="text-center">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{pokemon.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center mt-4">
            <a
              href={`${props.url.pathname}?page=${Number(page) - 1}`}
              style={{ visibility: page === 1 ? "hidden" : "visible" }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              前へ
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={`${props.url.pathname}?page=${Number(page) + 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              次へ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { getCustomPokemonList } from "@/api/pokemon/list.ts";
import { PokemonListItemCustom } from "@/types/pokemon.ts";

import PokemonView from "@/islands/PokemonView.tsx";
import Pagination from "@/components/common/Pagination.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const page = ctx.url.searchParams.get("page") || 1;
    const limit = Number(ctx.url.searchParams.get("limit")) || 20;
    const offset = (Number(page) - 1) * Number(limit);

    const data = await getCustomPokemonList({ limit, offset });

    const resp = await ctx.render(data);
    return resp;
  },
};

export default function PokemonList(props: PageProps) {
  const page = Number(props.url.searchParams.get("page")) || 1;

  return (
    <div>
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props?.data?.map((pokemon: PokemonListItemCustom) => (
            <div
              key={pokemon.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="text-center">
                <div className="">
                  <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-md">
                    ID: {pokemon.id}
                  </span>
                  <div className="absolute top-0 right-0 px-2 rounded-md my-2">
                    <a
                      href={`/pokemon/${pokemon.id}`}
                      className="py-1 px-2 rounded-md bg-slate-500 text-white  hover:bg-slate-600"
                    >
                      詳細
                    </a>
                  </div>
                </div>
                <div className="w-48 h-48 mx-auto">
                  <PokemonView {...pokemon} />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{pokemon.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          next={{
            url: `/pokemon/list?page=${page + 1}`,
            isHidden: props.data.length < 20,
            text: "次へ",
          }}
          prev={{
            url: `/pokemon/list?page=${page - 1}`,
            isHidden: page <= 1,
            text: "前へ",
          }}
        />
      </div>
    </div>
  );
}

import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { getPokemonDetails } from "@/api/pokemon/details.ts";
import { Pokemon } from "@/types/pokemon.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const id = Number(ctx.params.id);

    const data = await getPokemonDetails(id);

    const resp = await ctx.render(data);
    return resp;
  },
};

export default function PokemonList(props: PageProps) {
  const id = Number(props.params.id);

  const next = (id + 1).toString().padStart(4, "0");
  const prev = (id - 1).toString().padStart(4, "0");

  const data = props.data;

  console.log(data);

  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          ポケモン図鑑
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <div className="text-center">
              <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-md">
                ID: {data.id}
              </span>
              <img
                src={data.images.front_default}
                alt={data.name}
                className="w-80 h-80 mx-auto"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center mt-4">
            <a
              href={`${props.url.origin}/pokemon/${prev}`}
              style={{ visibility: id === 1 ? "hidden" : "visible" }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              前へ
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={`${props.url.origin}/pokemon/${next}`}
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

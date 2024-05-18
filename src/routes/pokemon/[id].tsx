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

  return (
    <div className="mx-10">
      <div className="py-8">
        <div className="md:flex justify-between mx-10">
          <div className="grow">
            <img
              src={data.images.front_default}
              alt={data.name}
              className="w-80 h-80 mx-auto"
            />
          </div>
          <div className="grow">
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex flex-col text-left m-5 space-y-3">
                <div>
                  <div>
                    <span className="font-semibold">No. {data.id}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2">
                  <li class="flex">
                    <dt className="font-semibold">分類：</dt>
                    <dd>{data.genera}</dd>
                  </li>
                  <li class="flex">
                    <dt className="font-semibold">タイプ：</dt>
                    <dd>
                      {data.types.map((type: { id: string; name: string }) => (
                        <div
                          id={`${data.id}_${type.id}`}
                          className="inline-flex items-center mx-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-semibold text-slate-600"
                        >
                          {type.name}
                        </div>
                      ))}
                    </dd>
                  </li>
                </ul>
                <div className="text-sx">
                  <ul>
                    <li>{data.flavor_text_entries[0].flavor_text}</li>
                    <li>{data.flavor_text_entries[1].flavor_text}</li>
                  </ul>
                </div>
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

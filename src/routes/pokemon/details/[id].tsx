import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { getPokemonDetails } from "@/api/pokemon/details.ts";
import Pagination from "@/components/common/Pagination.tsx";
import Details from "@/components/pokemon/Details.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const id = Number(ctx.params.id);

    if (!id) {
      const headers = new Headers({
        location: `${ctx.url.origin}/pokemon/list`,
      });
      return new Response(null, {
        status: 302,
        headers,
      });
    }

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
    <>
      <Head>
        <title>ポケモン図鑑 | {data.name}</title>
      </Head>
      <div className="mx-10">
        <div className="py-8">
          <Details data={data} />
          <Pagination
            next={{
              url: `${props.url.origin}/pokemon/details/${next}`,
              isHidden: false,
              text: `No.${next}へ`,
            }}
            prev={{
              url: `${props.url.origin}/pokemon/details/${prev}`,
              isHidden: id === 1,
              text: `No.${prev}へ`,
            }}
          />
        </div>
      </div>
    </>
  );
}

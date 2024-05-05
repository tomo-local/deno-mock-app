import { FreshContext } from "$fresh/server.ts";
import { getPokemonDetails } from "@/api/pokemon/details.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const id = Number(_ctx.params.id);

  if (!id) {
    return new Response("Failed to fetch Pokemon details", { status: 500 });
  }

  const body = await getPokemonDetails(id);

  return new Response(JSON.stringify(body), { status: 200 });
};

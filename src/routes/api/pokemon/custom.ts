import { FreshContext } from "$fresh/server.ts";
import { getCustomPokemonList } from "@/api/resolver/pokemon.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const limit = Number(_ctx.url.searchParams.get("limit")) || 20;
  const offset = Number(_ctx.url.searchParams.get("offset")) || 0;

  const body = await getCustomPokemonList({ limit: limit, offset: offset });

  if (!body) {
    return new Response("Failed to fetch Pokemon list", { status: 500 });
  }

  console.log("==== pokemon",body);


  return new Response(JSON.stringify(body));
};

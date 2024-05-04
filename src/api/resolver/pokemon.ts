import { PokemonListResponse } from "@/types/pokemon.ts";
import { makePokemonUrl } from "@/helper/pokemon.ts";

export async function getPokemonList({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<PokemonListResponse[]> {
  const url = makePokemonUrl({ type: "pokemon", limit, offset });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon list");
  }

  const data = await response.json();

  return data.results;
}

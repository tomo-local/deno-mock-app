import { PokemonEndpointType } from '@/types/pokemon.ts'

const BASE_URL = "https://pokeapi.co/api/v2";

export function makePokemonUrl({ type = "pokemon", limit = 20, offset = 0 }: {
  type: PokemonEndpointType;
  limit: number;
  offset: number;

}): URL {
  const url = new URL(`${BASE_URL}/${type}`);

  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("offset", offset.toString());

  return url;
}

import {
  Pokemon,
  PokemonEndpointType,
  PokemonSpecies,
} from "@/types/pokemon.ts";
import { PokemonListItemCustom } from "@/types/custom.ts";

const BASE_URL = "https://pokeapi.co/api/v2";

export function makePokemonUrl({
  type = "pokemon",
  id,
  limit = 20,
  offset = 0,
}: {
  type: PokemonEndpointType;
  id?: number | string;
  limit?: number;
  offset?: number;
}): URL {
  const urlString = id ? `${BASE_URL}/${type}/${id}` : `${BASE_URL}/${type}`;

  const url = new URL(urlString);

  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("offset", offset.toString());

  return url;
}

export function getSlackModel(
  pokemon: Pokemon,
  species: PokemonSpecies,
  lang: string = "ja",
): PokemonListItemCustom {
  return {
    id: pokemon.id.toString().padStart(4, "0"),
    name: species.names.find((name) => name.language.name === lang)?.name || "",
    image: pokemon.sprites.front_default,
  };
}

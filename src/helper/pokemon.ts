import {
  Pokemon,
  PokemonEndpointType,
  PokemonListItemCustom,
  PokemonSpecies,
  PokemonType,
} from "@/types/pokemon.ts";

const BASE_URL = "https://pokeapi.co/api/v2";

export function makePokemonApiUrl({
  type = "pokemon",
  id,
  limit = 20,
  offset = 0,
  hasParam = true
}: {
  type: PokemonEndpointType;
  id?: number | string;
  limit?: number;
  offset?: number;
  hasParam?: boolean;
}): URL {
  const urlString = id ? `${BASE_URL}/${type}/${id}` : `${BASE_URL}/${type}`;

  const url = new URL(urlString);

  if (!hasParam) {
    return url;
  }

  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("offset", offset.toString());

  return url;
}

export function getPokemonModel(
  pokemon: Pokemon,
  species: PokemonSpecies,
  lang?: string,
): PokemonListItemCustom {
  lang = lang || "ja";

  return {
    id: pokemon.id.toString().padStart(4, "0"),
    name: species?.names?.find((name) => name.language.name === lang)?.name || pokemon.name,
    image: pokemon.sprites.front_default,
    cry: pokemon.cries.latest,
  };
}

export function getPokemonDetailModel(
  pokemon: Pokemon,
  species: PokemonSpecies,
  types: PokemonType[],
  lang?: string,
) {
  lang = lang || "ja";

  return {
    id: pokemon.id.toString().padStart(4, "0"),
    name: species.names.find((n) => n.language.name === lang)?.name || "",
    genera: species.genera.find((g) => g.language.name === lang)?.genus || "",
    flavor_text_entries: species.flavor_text_entries.filter(
      (s) => s.language.name === lang,
    ),

    images: pokemon.sprites,
    types: types?.map((type) => {
      return {
        id: type.id,
        name: type.names.find((n) => n.language.name === lang)?.name || "",
      };
    }),
    abilities: pokemon.abilities,
    height: pokemon.height,
    weight: pokemon.weight,
    base_experience: pokemon.base_experience,
    stats: pokemon.stats,
  };
}

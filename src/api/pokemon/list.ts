import { PokemonListItem, PokemonListItemCustom } from "@/types/pokemon.ts";
import { getPokemonModel, makePokemonUrl } from "@/helper/pokemon.ts";

export async function getPokemonList({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<PokemonListItem[]> {
  const url = makePokemonUrl({ type: "pokemon", limit, offset });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon list");
  }

  const data = await response.json();

  return data.results;
}

export async function getCustomPokemonList({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<PokemonListItemCustom[]> {
  const pokemonRes = await getPokemonList({ limit, offset });

  const pokemonData = await Promise.all(
    pokemonRes.map((res) => fetch(res.url))
  ).then(async (res) => await Promise.all(res.map((res) => res.json())));

  const pokemonUrls = pokemonData.map((pokemon) =>
    pokemon.species.url
  );

  const executeSpecies = await Promise.all(
    pokemonUrls.map((url) => fetch(url))
  );

  const speciesData = await Promise.all(
    executeSpecies.filter((res) => res.ok).map((res) => res.json())
  );

  return pokemonData.map((pokemon, index) => {
    return getPokemonModel(pokemon, speciesData[index]);
  });
}

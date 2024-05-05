import { getPokemonDetailModel, makePokemonUrl } from "@/helper/pokemon.ts";

export async function getPokemonDetails(id: number) {
  const pokemonUrl = makePokemonUrl({ type: "pokemon", id });
  const speciesUrl = makePokemonUrl({ type: "pokemon-species", id });

  const response = await Promise.all([
    fetch(pokemonUrl.toString()),
    fetch(speciesUrl.toString()),
  ]);

  if (!response.every((res) => res.ok)) {
    throw new Error("Failed to fetch Pokemon details");
  }

  const [pokemon, species] = await Promise.all(
    response.map((res) => res.json()),
  );

  const typeFetch = pokemon.types.map(
    (type: { type: { name: string; url: string } }) => fetch(type.type.url),
  );

  const types = await Promise.all(typeFetch).then((res) =>
    Promise.all(res.map((r) => r.json()))
  );

  return getPokemonDetailModel(pokemon, species, types);
}

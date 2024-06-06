import { getPokemonDetailModel, makePokemonApiUrl } from "@/helper/pokemon.ts";
import { Pokemon, PokemonSpecies } from "@/types/pokemon.ts";

export async function getPokemonDetails(id: number) {
  const pokemonUrl = makePokemonApiUrl({
    type: "pokemon",
    id,
    hasParam: false,
  });
  const speciesUrl = makePokemonApiUrl({
    type: "pokemon-species",
    id,
    hasParam: false,
  });

  const response = await Promise.all([
    fetch(pokemonUrl.toString()),
    fetch(speciesUrl.toString()),
  ]);

  if (!response.every((res) => res.ok)) {
    throw new Error("Failed to fetch Pokemon details");
  }

  const responseJson = await Promise.all(response.map((res) => res.json()));

  const pokemon = responseJson[0] as Pokemon;
  const species = responseJson[1] as PokemonSpecies;

  const typeFetch = pokemon.types?.map((type) => fetch(type.type.url));
  const statsFetch = pokemon.stats?.map((stat) => fetch(stat.stat.url));

  const types = await Promise.all(typeFetch).then((res) =>
    Promise.all(res.map((r) => r.json()))
  );
  const stats = await Promise.all(statsFetch).then((res) =>
    Promise.all(res.map((r) => r.json()))
  );

  return getPokemonDetailModel(pokemon, species, types, stats);
}

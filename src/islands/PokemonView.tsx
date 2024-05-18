import { PokemonListItemCustom } from "@/types/pokemon.ts";

export default function PokemonView(pokemon: PokemonListItemCustom) {
  return (
    <button
      onClick={() => {
        const audio = document.getElementById(pokemon.id) as HTMLAudioElement;
        audio.play();
      }}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-48 h-48 p-0 m-0"
      />
      <audio id={pokemon.id}>
        <source src={pokemon.cry} type="audio/ogg" />
      </audio>
    </button>
  );
}

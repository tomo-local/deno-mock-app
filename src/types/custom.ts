export interface PokemonListItemCustom {
  id: string;
  name: string;
  image: string;
}

export interface PokemonListResponseCustom {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItemCustom[];
}
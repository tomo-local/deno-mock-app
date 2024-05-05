export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  base_experience: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
}

export interface PokemonType {
  id: number;
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
    }[];
    double_damage_to: {
      name: string;
      url: string;
    }[];
    half_damage_from: {
      name: string;
      url: string;
    }[];
    half_damage_to: {
      name: string;
      url: string;
    }[];
    no_damage_from: {
      name: string;
      url: string;
    }[];
    no_damage_to: {
      name: string;
      url: string;
    }[];
  };
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  id: number;
  name: string;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export type PokemonEndpointType =
  | "berry"
  | "berry-firmness"
  | "berry-flavor"
  | "contest-type"
  | "contest-effect"
  | "super-contest-effect"
  | "encounter-method"
  | "encounter-condition"
  | "encounter-condition-value"
  | "evolution-chain"
  | "evolution-trigger"
  | "generation"
  | "pokedex"
  | "version"
  | "version-group"
  | "item"
  | "item-attribute"
  | "item-category"
  | "item-fling-effect"
  | "item-pocket"
  | "location"
  | "location-area"
  | "pal-park-area"
  | "region"
  | "machine"
  | "move"
  | "move-ailment"
  | "move-battle-style"
  | "move-category"
  | "move-damage-class"
  | "move-learn-method"
  | "move-target"
  | "ability"
  | "characteristic"
  | "egg-group"
  | "gender"
  | "growth-rate"
  | "nature"
  | "pokeathlon-stat"
  | "pokemon"
  | "pokemon-species"
  | "pokemon-color"
  | "pokemon-form"
  | "pokemon-habitat"
  | "pokemon-shape"
  | "pokemon-species"
  | "stat"
  | "type"
  | "language";

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

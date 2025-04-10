export enum PokemonTypes {
  Normal = "normal",
  Fire = "fire",
  Water = "water",
  Electric = "electric",
  Grass = "grass",
  Ice = "ice",
  Fighting = "fighting",
  Poison = "poison",
  Ground = "ground",
  Flying = "flying",
  Psychic = "psychic",
  Bug = "bug",
  Rock = "rock",
  Ghost = "ghost",
  Steel = "steel",
  Dragon = "dragon",
  Dark = "dark",
  Fairy = "fairy",
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny?: string;
    other?: {
      "official-artwork"?: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: PokemonTypes;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonCardComponentData {
  id: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonListResult {
  next: string | null;
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonSpecies {
  name: string;
  evolution_chain: {
    url: string;
  };
  genera: {
    genus: string;
    language: {
      name: string;
    };
  }[];
}

export interface PokemonEvolutionChain {
  chain: PokemonEvolutionChaiTo;
}

export interface PokemonEvolutionChaiTo {
  evolves_to: PokemonEvolutionChaiTo[];
  species: {
    name: string;
  };
}

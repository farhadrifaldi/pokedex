import {
  Pokemon,
  PokemonEvolutionChain,
  PokemonListResult,
  PokemonSpecies,
} from "@/types/pokemon";
import { apiClient } from "./client";

export async function getPokemon(url?: string): Promise<Pokemon | null> {
  if (url) {
    return await apiClient.get<Pokemon>(url);
  }
  return new Promise((resolve) => {
    resolve(null);
  });
}

export async function getPokemons({
  limit = 10,
  offset = 0,
}: {
  limit: number;
  offset: number;
}): Promise<PokemonListResult> {
  return await apiClient.get<PokemonListResult>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        limit,
        offset,
      },
    }
  );
}

export async function getPokemonSpecies(
  url?: string
): Promise<PokemonSpecies | null> {
  if (url) {
    return await apiClient.get<PokemonSpecies>(url);
  }
  return new Promise((resolve) => {
    resolve(null);
  });
}

export async function getPokemonEvolutionChain(
  url?: string
): Promise<PokemonEvolutionChain | null> {
  if (url) {
    return await apiClient.get<PokemonEvolutionChain>(url);
  }
  return new Promise((resolve) => {
    resolve(null);
  });
}

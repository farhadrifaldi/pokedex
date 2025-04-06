import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  getPokemon,
  getPokemonEvolutionChain,
  getPokemons,
  getPokemonSpecies,
} from "../apis/pokemonApi";
import type {
  Pokemon,
  PokemonEvolutionChain,
  PokemonListResult,
  PokemonSpecies,
} from "../types/pokemon";

export const pokemonQueryKeys = {
  all: ["pokemon"] as const,
  lists: () => [...pokemonQueryKeys.all, "list"] as const,
  list: (params: { limit: number }) =>
    [...pokemonQueryKeys.lists(), params] as const,
  details: () => [...pokemonQueryKeys.all, "detail"] as const,
  detail: (url?: string) => [...pokemonQueryKeys.details(), url] as const,
  species: (url?: string) => [...pokemonQueryKeys.all, "species", url] as const,
  evolution: (url?: string) =>
    [...pokemonQueryKeys.all, "evolution", url] as const,
};

export function usePokemonListQuery(params: { limit: number }) {
  return useInfiniteQuery<PokemonListResult>({
    queryKey: pokemonQueryKeys.list(params),
    queryFn: async (context) => {
      const response = await getPokemons({
        limit: params.limit,
        offset: (context.pageParam as number) ?? 0,
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      const offset = parseInt(url.searchParams.get("offset") ?? "0");
      return offset;
    },
    initialPageParam: 0,
  });
}

export function usePokemonQuery(url?: string) {
  return useQuery<Pokemon | null>({
    queryKey: pokemonQueryKeys.detail(url),
    queryFn: () => getPokemon(url),
  });
}

export function usePokemonSpeciesQuery(url?: string) {
  return useQuery<PokemonSpecies | null>({
    queryKey: pokemonQueryKeys.species(url),
    queryFn: () => getPokemonSpecies(url),
  });
}

export function usePokemonEvolutionQuery(url?: string) {
  return useQuery<PokemonEvolutionChain | null>({
    queryKey: pokemonQueryKeys.evolution(url),
    queryFn: () => getPokemonEvolutionChain(url),
  });
}

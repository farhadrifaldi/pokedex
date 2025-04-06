import { PokemonTypes } from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bgColor = (type?: PokemonTypes) => {
  if (type) {
    switch (type) {
      case PokemonTypes.Fire:
        return "bg-pokered";
      case PokemonTypes.Water:
        return "bg-pokeblue";
      case PokemonTypes.Grass:
        return "bg-pokegreen";
      case PokemonTypes.Electric:
        return "bg-pokeyellow";
      case PokemonTypes.Ice:
        return "bg-pokeblue-light";
      case PokemonTypes.Fighting:
        return "bg-pokegray";
      case PokemonTypes.Poison:
        return "bg-pokepurple";
      case PokemonTypes.Ground:
        return "bg-pokebrown";
      case PokemonTypes.Flying:
        return "bg-pokegray-ligth";
      case PokemonTypes.Psychic:
        return "bg-pokepurple-dark";
      case PokemonTypes.Bug:
        return "bg-pokegreen-dark";
      case PokemonTypes.Rock:
        return "bg-pokebrown";
      case PokemonTypes.Ghost:
        return "bg-pokepurple-dark";
      case PokemonTypes.Steel:
        return "bg-pokegray";
      case PokemonTypes.Dragon:
        return "bg-pokeyellow-dark";
      case PokemonTypes.Dark:
        return "bg-pokepurple-dark";
      case PokemonTypes.Fairy:
        return "bg-pokepink";
      default:
        return "bg-pokegray";
    }
  }

  return "bg-pokegray";
};

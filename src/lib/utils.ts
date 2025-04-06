import { PokemonTypes } from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bgColor = (type?: PokemonTypes) => {
  if (type) {
    switch (type) {
      case "fire":
        return "bg-pokered";
      case "water":
        return "bg-pokeblue";
      case "grass":
        return "bg-pokegreen";
      case "electric":
        return "bg-pokeyellow";
      case "ice":
        return "bg-pokeblue-light";
      case "fighting":
        return "bg-pokegray";
      case "poison":
        return "bg-pokepurple";
      case "ground":
        return "bg-pokebrown";
      case "flying":
        return "bg-pokegray-ligth";
      case "psychic":
        return "bg-pokepurple-dark";
      case "bug":
        return "bg-pokegreen-dark";
      case "rock":
        return "bg-pokebrown";
      case "ghost":
        return "bg-pokepurple-dark";
      case "steel":
        return "bg-pokegray";
      case "dragon":
        return "bg-pokeyellow-dark";
      case "dark":
        return "bg-pokepurple-dark";
      case "fairy":
        return "bg-pokepink";
      default:
        return "bg-pokegray";
    }
  }

  return "bg-pokegray";
};

import { Pokemon, PokemonListResult } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface CardsProps {
  data: PokemonListResult["results"];
  onClick?: (pokemon?: Pokemon | null) => void;
}

export function Cards({ data, onClick }: CardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {data.map((card, index) => (
        <PokemonCard key={index} pokemonUrl={card.url} onClick={onClick} />
      ))}
    </div>
  );
}

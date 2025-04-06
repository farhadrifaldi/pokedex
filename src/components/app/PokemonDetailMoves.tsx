import { Pokemon } from "@/types/pokemon";

type props = {
  pokemon: Pokemon;
};

export function PokemonDetailMoves({ pokemon }: props) {
  const allMoves = pokemon.moves.map((move) => move.move.name);
  return (
    <div className="overflow-scroll h-[40vh] pb-3 grid grid-cols-4 gap-x-4 gap-y-4">
      {allMoves.map((move) => (
        <div>
          <span className="capitalize text-xs text-gray-500 font-medium">
            {move}
          </span>
          <hr
            className={`w-[50%] border-b-2`}
          />
        </div>
      ))}
    </div>
  );
}

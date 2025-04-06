import { Pokemon } from "@/types/pokemon";
import { Progress } from "../ui/progress";

enum StatKeys {
  hp = "hp",
  attack = "attack",
  defense = "defense",
  spatk = "spatk",
  spdef = "spdef",
  speed = "speed",
}

type props = {
  pokemon: Pokemon;
};
export function PokemonDetailStats({ pokemon }: props) {
  const stats = {
    [StatKeys.hp]: {
      label: "HP",
      value: pokemon.stats[0].base_stat,
    },
    [StatKeys.attack]: {
      label: "Attack",
      value: pokemon.stats[1].base_stat,
    },
    [StatKeys.defense]: {
      label: "Defense",
      value: pokemon.stats[2].base_stat,
    },
    [StatKeys.spatk]: {
      label: "Sp. Atk",
      value: pokemon.stats[3].base_stat,
    },
    [StatKeys.spdef]: {
      label: "Sp. Def",
      value: pokemon.stats[4].base_stat,
    },
    [StatKeys.speed]: {
      label: "Speed",
      value: pokemon.stats[5].base_stat,
    },
  };
  return (
    <div>
      {Object.values(StatKeys).map((v) => (
        <div key={v} className="grid grid-cols-12 items-center mb-2">
          <p className="col-span-3 font-medium text-gray-500">
            {stats[v].label}
          </p>
          <p className="col-span-1 font-medium">{stats[v].value}</p>
          <div className="col-span-8">
            <Progress
              value={stats[v].value}
              type={stats[v].value > 50 ? "default" : "danger"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

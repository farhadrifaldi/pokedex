import { Pokemon, PokemonSpecies } from "@/types/pokemon";

interface props {
  pokemon: Pokemon;
  species?: PokemonSpecies | null;
}

export function PokemonDetailAbout({ pokemon, species }: props) {
  const weightKg = pokemon.weight / 10;
  const weightPound = (weightKg * 22.046) / 10;
  const heightCm = pokemon.height * 10;
  const heighInch = heightCm * 2.54;
  const genus = species?.genera.find((s) => s.language.name === "en")?.genus;

  return (
    <div className="grid grid-cols-3 gap-y-2.5">
      <p className="font-medium text-gray-500">Species</p>
      <p className="col-span-2">{genus}</p>
      <p className="font-medium text-gray-500">Height</p>
      <p className="col-span-2">
        {heighInch}" ({heightCm} cm)
      </p>
      <p className="font-medium text-gray-500">Weight</p>
      <p className="col-span-2">
        {weightPound.toFixed(2)} lbs ({weightKg} Kg)
      </p>
      <p className="font-medium text-gray-500">Abilities</p>
      <p className="col-span-2">
        {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
    </div>
  );
}

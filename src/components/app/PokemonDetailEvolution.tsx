import { usePokemonQuery } from "@/hooks/usePokemonQuery";
import { PokemonEvolutionChaiTo } from "@/types/pokemon";

interface props {
  evolutionChain?: PokemonEvolutionChaiTo | null;
}

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export function PokemonDetailEvolution({ evolutionChain }: props) {
  const { data } = usePokemonQuery(
    API_BASE_URL + (evolutionChain?.species.name ?? "")
  );

  const pokeIndex = () => {
    const idString = data?.id.toString() ?? "1";
    const zeroFillter = 3 - idString.length;
    return "#" + "0".repeat(zeroFillter) + idString;
  };

  const itHasEvolution = Boolean(
    evolutionChain?.evolves_to && evolutionChain.evolves_to.length > 0
  );
  const evolutionLength = evolutionChain?.evolves_to.length ?? 1;
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="border rounded-full h-44 w-44 p-5">
          <img
            src={data?.sprites.other?.["official-artwork"]?.front_default}
            alt={data?.name}
            style={{ width: "100px" }}
            className="mx-auto"
          />
          <p className="text-center capitalize font-medium">
            {evolutionChain?.species.name}
          </p>
          <p className="text-xs text-center text-gray-400">{pokeIndex()}</p>
        </div>
      </div>
      {itHasEvolution && (
        <>
          <img
            src="/arrow.png"
            alt="chevron-down"
            style={{ width: "50px" }}
            className="mx-auto my-3"
          />
          <div
            className={`grid grid-cols-${
              evolutionLength < 2 ? evolutionLength.toString() : "2"
            } gap-3`}
          >
            {evolutionChain?.evolves_to.map((ec) => (
              <PokemonDetailEvolution
                key={ec.species.name}
                evolutionChain={ec}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

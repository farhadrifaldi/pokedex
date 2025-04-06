import { usePokemonQuery } from "@/hooks/usePokemonQuery";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Spinner } from "../ui/spinner";
import { Pokemon } from "@/types/pokemon";
import { bgColor } from "@/lib/utils";

type props = {
  pokemonUrl?: string;
  onClick?: (pokemon?: Pokemon | null) => void;
};
export function PokemonCard({ pokemonUrl, onClick }: props) {
  const { data, isLoading } = usePokemonQuery(pokemonUrl);

  return (
    <Card
      onClick={() => {
        onClick?.(data);
      }}
      className={"cursor-pointer " + bgColor(data?.types[0].type.name)}
      aria-label="button is-primary"
      style={{
        backgroundImage: "url('/public/pokeball-bg-white.png')",
        backgroundSize: "150px",
        backgroundPosition: "90px 40px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardContent>
        {isLoading ? (
          <Spinner size="xl" variant="white" />
        ) : (
          <div className="flex flex-wrap items-center">
            <div className="w-1/3 z-10">
              <p className="font-semibold text-lg md:text-xl text-white mb-2 tracking-wider capitalize">
                {data?.name}
              </p>
              {data?.types.map((v, i) => (
                <Badge key={i} className="capitalize">
                  {v.type.name}
                </Badge>
              ))}
            </div>
            <div className="w-2/3">
              <img
                src={data?.sprites.other?.["official-artwork"]?.front_default}
                alt={data?.name}
                style={{ width: "200px" }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

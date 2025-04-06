import { Pokemon } from "@/types/pokemon";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from "../ui/drawer";
import { Badge } from "../ui/badge";
import { bgColor } from "@/lib/utils";
import { PokemonDetailTabs } from "./PokemonDetailTabs";

interface props {
  pokemon?: Pokemon | null;
  open: boolean;
  onClose: () => void;
}

export function PokemonDetail({ pokemon, open, onClose }: props) {
  const pokeIndex = () => {
    const idString = pokemon?.id.toString() ?? "1";
    const zeroFillter = 3 - idString.length;
    return "#" + "0".repeat(zeroFillter) + idString;
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className={" " + bgColor(pokemon?.types[0]?.type.name)}>
        <DrawerHeader
          className="h-[50vh] relative"
          style={{
            backgroundImage: "url('/public/pokeball-bg-white.png')",
            backgroundSize: "250px",
            backgroundPosition: "130% 170%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <DrawerDescription>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-3xl capitalize mb-2">
                  {pokemon?.name}
                </p>
                {pokemon?.types.map((v) => (
                  <Badge key={v.slot} className="capitalize mr-2">
                    {v.type.name}
                  </Badge>
                ))}
              </div>
              <p className="font-bold text-white text-lg">{pokeIndex()}</p>
            </div>
            <img
              src={pokemon?.sprites.other?.["official-artwork"]?.front_default}
              alt={pokemon?.name}
              style={{ width: "230px" }}
              className="absolute -bottom-10 left-[calc(50%-115px)]"
            />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="bg-white h-[55vh] rounded-t-3xl py-5">
          {pokemon && <PokemonDetailTabs pokemon={pokemon} />}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

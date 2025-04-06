import { Pokemon } from "@/types/pokemon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PokemonDetailAbout } from "./PokemonDetailAbout";
import { PokemonDetailStats } from "./PokemondDetailStats";
import { PokemonDetailEvolution } from "./PokemonDetailEvolution";
import { PokemonDetailMoves } from "./PokemonDetailMoves";
import {
  usePokemonEvolutionQuery,
  usePokemonSpeciesQuery,
} from "@/hooks/usePokemonQuery";

interface props {
  pokemon: Pokemon;
}

enum TabKeys {
  about = "About",
  baseStats = "Base Stats",
  evolution = "Evolution",
  moves = "Moves",
}

export function PokemonDetailTabs({ pokemon }: props) {
  const { data: dataSpecies } = usePokemonSpeciesQuery(pokemon.species.url);
  const { data: dataEvolution } = usePokemonEvolutionQuery(
    dataSpecies?.evolution_chain.url
  );

  const TabData = {
    [TabKeys.about]: {
      component: <PokemonDetailAbout pokemon={pokemon} species={dataSpecies} />,
    },
    [TabKeys.baseStats]: {
      component: <PokemonDetailStats pokemon={pokemon} />,
    },
    [TabKeys.evolution]: {
      component: (
        <div className="h-[35vh] overflow-y-scroll">
          <PokemonDetailEvolution evolutionChain={dataEvolution?.chain} />
        </div>
      ),
    },
    [TabKeys.moves]: {
      component: <PokemonDetailMoves pokemon={pokemon} />,
    },
  };

  return (
    <Tabs defaultValue={TabKeys.about} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-7">
        {Object.values(TabKeys).map((v) => (
          <TabsTrigger key={v} value={v}>
            {v}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.values(TabKeys).map((v) => (
        <TabsContent key={v} value={v}>
          {TabData[v].component}
        </TabsContent>
      ))}
    </Tabs>
  );
}

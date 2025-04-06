import { Cards } from "./components/app/Cards";
import { usePokemonListQuery } from "./hooks/usePokemonQuery";
import { Spinner } from "./components/ui/spinner";
import { useCallback, useEffect, useState } from "react";
import { PokemonDetail } from "./components/app/PokemonDetail";
import { Pokemon } from "./types/pokemon";

const LIMIT = 12;

function App() {
  const [detail, setDetail] = useState<Pokemon | undefined | null>(null);

  const { data, fetchNextPage, isLoading } = usePokemonListQuery({
    limit: LIMIT,
  });

  const pokemonList = data?.pages.flatMap((v) => v.results);

  const handleScroll = useCallback(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      void fetchNextPage();
    }
  }, [fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="bg-neutral-100 py-6 px-1 h-[calc(100vh+100px)] bg-[url(/pokeball-bg.png)] bg-no-repeat bg-fixed w-full lg:w-[768px] mx-auto bg-position-(--bg-position-pokeball-sm) md:bg-position-(--bg-position-pokeball-md) bg-size-(--bg-size-pokeball-sm) md:bg-size-(--bg-size-pokeball-md)">
      <div className="container">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-10">
          Pokedex
        </h1>

        {pokemonList && (
          <Cards
            data={pokemonList}
            onClick={(pokemon) => {
              setDetail(pokemon);
            }}
          />
        )}
        {isLoading && (
          <div className="flex justify-center py-20">
            <Spinner size="xl" />
          </div>
        )}
        <PokemonDetail
          pokemon={detail}
          open={Boolean(detail)}
          onClose={() => {
            setDetail(null);
          }}
        />
      </div>
    </div>
  );
}

export default App;

'use client'

import PokemonCard from "@src/components/PokemonCard";
import SearchBar from "@src/components/SearchBar";
import { getPokemonCards } from "@src/services/pokemon-tcg/pokemon-tcg.actions";
import { PokemonCardInterface } from "@src/services/pokemon-tcg/pokemon-tcg.types";
import { checkAuth } from "@src/utils/check-auth";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


export default function Page() {
    const router = useRouter();
    const [cards, setCards] = useState<PokemonCardInterface[]>([]);


    const handleSearch = async (searchTerm: string) => {
        try {
          const data = await getPokemonCards(1, 10, searchTerm);
          setCards(data);
        } catch (error) {
          console.error('Erro ao buscar cartas:', error);
        }
    };

    useEffect(() => {
        if (!checkAuth()) {
            router.push('/login');
        }
        
        handleSearch('');
    }, [])

    return (
        <main>
            <h1>Pokemon TCG Explorer</h1>

            <SearchBar onSearch={handleSearch} />

            <div className="flex flex-wrap justify-center gap-8 my-8">
              {cards.map((card) => {
                  return (
                      <PokemonCard
                          key={card.id}
                          id={card.number}
                          name={card.name}
                          hp={card.hp}
                          imageUrl={card.images.large}
                          type={card.types.toString()}
                      />
                  )
              })}
            </div>
            
        </main>
    );
}
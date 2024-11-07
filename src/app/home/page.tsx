'use client'

import PokemonCard from "@src/components/PokemonCard";
import SearchBar from "@src/components/SearchBar";
import { getPokemonCards } from "@src/services/pokemon-tcg/pokemon-tcg.actions";
import { PokemonCardInterface } from "@src/services/pokemon-tcg/pokemon-tcg.types";
import { checkAuth } from "@src/helpers/checkAuth";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { loadFavorites, saveFavorites } from "@src/helpers/localStorage";


export default function Page() {
    const router = useRouter();
    const [cards, setCards] = useState<PokemonCardInterface[]>([]);
    const [favorites, setFavorites] = useState<string[]>(loadFavorites());

    const handleSearch = async (searchTerm: string) => {
        try {
          const data = await getPokemonCards(1, 10, searchTerm);
          setCards(data);
        } catch (error) {
          console.error('Erro ao buscar cartas:', error);
        }
    };

    const toggleFavorite = (cardId: string) => {
      const updatedFavorites = favorites.includes(cardId)
        ? favorites.filter((fav) => fav !== cardId)
        : [...favorites, cardId];
  
      setFavorites(updatedFavorites);
      saveFavorites(updatedFavorites);
    };

    useEffect(() => {
        if (!checkAuth()) {
            router.push('/login');
        }
        
        handleSearch('');
    }, [])

    return (
        <main className="py-10 text-center">
            <h1 className="text-2xl">Pokemon TCG Explorer</h1>

            <SearchBar onSearch={handleSearch} />

            <div className="flex flex-wrap justify-center gap-8 my-8">
              {cards.map((card) => {
                  return (
                    <div key={card.id} className="relative">
                      <button
                        onClick={() => toggleFavorite(card.id)}
                        className={`absolute top-2 right-2 text-2xl z-10 ${
                          favorites.includes(card.id) ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                      >
                        {favorites.includes(card.id) ? '★' : '☆'}
                      </button>
                      <PokemonCard
                          id={card.number}
                          name={card.name}
                          hp={card.hp}
                          imageUrl={card.images.large}
                          type={card.types.toString()}
                      />
                    </div>
                  )
              })}
            </div>
            
        </main>
    );
}
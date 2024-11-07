
import { PokemonCardInterface } from "./pokemon-tcg.types";

export const getPokemonCards = async (page: number = 1, pageSize: number = 10, search?: string): Promise<PokemonCardInterface[]> => {
  const baseUrl = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`;
  const url = search
    ? `${baseUrl}&q=name:${encodeURIComponent(search)}&orderBy=number,name`
    : baseUrl;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar cartas');
  }

  const data = await response.json();
  
  return data.data;
};
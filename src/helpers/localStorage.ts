
export const loadFavorites = (): string[] => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  };
  
  export const saveFavorites = (favorites: string[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const clearFavorites = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('favorites');
    }
  };
  
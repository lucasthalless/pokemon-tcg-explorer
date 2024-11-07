'use client'

import { useState } from 'react';

type SearchBarProps = {
  onSearch: (search: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokémon cards..."
        className="border border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};
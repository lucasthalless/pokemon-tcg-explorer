import Image from 'next/image';
import React from 'react';

type PokemonCardProps = {
  id: string;
  name: string;
  hp: string;
  imageUrl: string;
  type: string;
};

export default function PokemonCard({ id, name, hp, imageUrl, type }: PokemonCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-[250px] text-center relative shadow-lg bg-white">
      <Image unoptimized src={imageUrl} alt={name} className="w-full object-cover rounded-md mb-3" width={202.75} height={283} />
      <div className="text-gray-800">
        <h3 className="text-lg font-bold">{`#${id} - ${name}`}</h3>
        <p className="text-sm text-gray-600">HP: {hp}</p>
        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(type)}`}>
          {type}
        </span>
      </div>
    </div>
  );
};

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'darkness':
      return 'bg-gray-800';
    case 'fire':
      return 'bg-orange-600';
    case 'water':
      return 'bg-blue-500';
    default:
      return 'bg-gray-400';
  }
};
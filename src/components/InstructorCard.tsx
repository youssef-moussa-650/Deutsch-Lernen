import React from 'react';

interface InstructorCardProps {
  name: string;
  image: string;
  description: string;
}

export function InstructorCard({ name, image, description }: InstructorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
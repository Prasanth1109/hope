import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative flex flex-col items-center p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
};

export default Card;

import AnimatedSidebar from '@/components/ui/AnimatedSidebar';
import Card from '@/components/ui/Card';
import React from 'react';

const data = [
  {
    title: "Card 1",
    description: "This is the first card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 1",
    description: "This is the first card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 1",
    description: "This is the first card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
  return (
    <div className='bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-pink-500'>
      <AnimatedSidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
};

export default Projects;
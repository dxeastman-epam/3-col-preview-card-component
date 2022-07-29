import React from 'react';
import './App.scss';
import { Card } from './components';

const cardData = [
  {
    title: 'Sedans',
    description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    image: './images/icon-sedans.svg',
    bgColor: 'hsl(31, 77%, 52%)',
    link: '#',
  },
  {
    title: 'SUVs',
    description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    image: './images/icon-suvs.svg',
    bgColor: 'hsl(184, 100%, 22%)',
    link: '#',
  },
  {
    title: 'Luxury',
    description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    image: './images/icon-luxury.svg',
    bgColor: 'hsl(179, 100%, 13%)',
    link: '#',
  },
]

const App = () => {
  return (
    <div className="App">
      {cardData.map(x => <Card key={x.title} {...x} />)}
    </div>
  );
}

export default App;

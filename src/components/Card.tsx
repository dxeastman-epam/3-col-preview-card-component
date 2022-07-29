import React, { useState } from 'react';
import './Card.scss';

interface CardProps {
  image: string;
  title: string;
  description: string;
  bgColor: string;
  link: string;
}

export const Card = (props: CardProps) => {
  const { 
    image,
    title = 'Title', 
    description = 'Lorem ipsum...',
    bgColor = 'blue',
    link = '#',
  } = props;
  const [hovering, setHovering] = useState<Boolean>(false)
  console.log('Card', props);
  return (
    <div className='card' style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} style={{ 
        color: hovering ? 'hsl(0, 0%, 95%)' : bgColor,
        backgroundColor: hovering ? bgColor : 'hsl(0, 0%, 95%)'
      }} 
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>Learn More</a>
    </div>
  )
};

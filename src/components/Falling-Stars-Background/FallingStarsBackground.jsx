// FallingStarsBackground.js
import React, { useEffect, useState } from 'react';
import './falling-stars-background.css'

const FallingStarsBackground = ({ children }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const interval = setInterval(() => {
        const newStar = {
          id: Math.random().toString(36).substr(2, 9),
          x: `${Math.random() * window.innerWidth}px`, 
          duration: `${Math.random() * 10 + 5}s`,
        };
        setStars((prevStars) => [...prevStars, newStar]);

        setTimeout(() => {
          setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
        }, (parseFloat(newStar.duration) * 1000) + 1000);
      }, 500);
      return () => clearInterval(interval);
    };

    generateStars();

    return () => clearInterval(generateStars);
  }, []);

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <div key={star.id} className="star" style={{ left: star.x, animationDuration: star.duration }} />
      ))}
      {children}
    </div>
  );
};

export default FallingStarsBackground;

"use client";
import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
}

interface StarLayerProps {
  numStars: number;
}

const StarLayer: React.FC<StarLayerProps> = ({ numStars }) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate fixed positions for stars
    const generatedStars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // Random star size between 1rem and 3rem
    }));

    setStars(generatedStars);
  }, [numStars]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star, i) => {
        // Adjust positions to cover the full viewport area
        const translateX = (star.x + scrollY * 0.05) % 100; // Move left
        const translateY = (star.y + scrollY * 0.05) % 100; // Move down

        return (
          <div
            key={i}
            className="absolute text-yellow-500 dark:text-yellow-300"
            style={{
              top: `${translateY}vh`,
              left: `${translateX}vw`,
              fontSize: `${star.size}rem`,
              opacity: 0.8, // Slightly transparent for the trailing effect
              transition: 'opacity 0.5s ease', // Smooth transition effect
            }}
          >
            ⭐
          </div>
        );
      })}
      {/* Additional layer for trailing effect */}
      {stars.map((star, i) => {
        const translateX = (star.x + scrollY * 0.1) % 100; // Slow trailing effect
        const translateY = (star.y + scrollY * 0.1) % 100;

        return (
          <div
            key={`trail-${i}`}
            className="absolute text-yellow-300 dark:text-yellow-200"
            style={{
              top: `${translateY}vh`,
              left: `${translateX}vw`,
              fontSize: `${star.size * 0.5}rem`, // Smaller size for trail
              opacity: 0.3, // More transparent for trailing effect
            }}
          >
            ⭐
          </div>
        );
      })}
    </div>
  );
};

export default StarLayer;
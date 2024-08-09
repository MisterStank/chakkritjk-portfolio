"use client";

import StarLayer from "./StarLayer";

const ParallaxStars: React.FC = () => {
    return (
      <div className="relative w-screen h-screen -z-50">
        <StarLayer numStars={20} />
      </div>
    );
  };
  
export default ParallaxStars;
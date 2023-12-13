import React from "react";

const GameCard = ({ gameName, steam_id, genre }) => {
  const imageUrl = `https://cdn.cloudflare.steamstatic.com/steam/apps/${steam_id}/hero_capsule.jpg`;
  return (
    <div className="flex items-center border border-gray-300 p-4 mb-4">
      {/* Placeholder for game image */}
      <div className="w-12 h-16 bg-gray-300 mr-4">
        <img
          src={imageUrl}
          // alt={gameName} // Заголовок для зображення
          alt=""
          className="w-12 h-16 mr-4"
        />
      </div>
      <div>{gameName}</div>
      <div>{genre}</div>
    </div>
  );
};

export default GameCard;

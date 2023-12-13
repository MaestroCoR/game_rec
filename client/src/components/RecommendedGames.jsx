import React from "react";
import GameCard from "./GameCard";

const RecommendedGames = ({ recommendedGames }) => {
  return (
    <div className="overflow-y-auto max-h-560">
      {recommendedGames.map((game, index) => (
        <GameCard
          key={index}
          gameName={game.title}
          steam_id={game.steam_gameId}
          genres={game.genre}
        />
      ))}
    </div>
  );
};

export default RecommendedGames;

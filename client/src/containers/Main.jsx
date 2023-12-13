import React, { useState } from "react";
import {
  Header,
  Footer,
  GameForm,
  RecommendedGames,
  Info,
} from "../components";

const Main = () => {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center pl-2 pr-2">
        <div className="w-1/3">
          <Info />
        </div>
        <div className="w-1/3">
          <GameForm
            setRecommendedGames={setRecommendedGames}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="w-1/3">
          <RecommendedGames
            recommendedGames={recommendedGames}
            isLoading={isLoading}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

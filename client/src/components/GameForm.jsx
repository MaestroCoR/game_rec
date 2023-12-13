import React, { useState } from "react";
import axios from "axios";

const GameForm = ({ setRecommendedGames }) => {
  const [gameIds, setGameIds] = useState([""]);
  const handleAddField = () => {
    const newGameIds = [...gameIds, ""];
    setGameIds(newGameIds);
  };

  const handleIdChange = (index, value) => {
    const newGameIds = [...gameIds];
    newGameIds[index] = value;
    setGameIds(newGameIds);
  };

  const handleRemoveField = (index) => {
    const newGameIds = [...gameIds];
    newGameIds.splice(index, 1);
    setGameIds(newGameIds);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ids = gameIds.filter((id) => id.trim() !== "");
    console.log(ids);
    axios
      .post("/recommend", { game_ids: ids })
      .then((response) => {
        console.log(response.data);
        setRecommendedGames(response.data.recommendation);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center p-2 pt-12 ">
      <div
        className="flex justify-center items-center p-4 bg-gray-100  border-black border-2 rounded-lg"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <form
          onSubmit={handleSubmit}
          className="pt-2"
          style={{ minHeight: "650px", maxHeight: "750px" }}
        >
          <div className="pb-4">
            <button
              type="submit"
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 focus:outline-none "
            >
              Отримати Рекомендації
            </button>
            <button
              type="button"
              onClick={handleAddField}
              className=" px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 focus:outline-none"
            >
              +
            </button>
          </div>
          <div className="overflow-y-auto max-h-560 style={{ paddingRight: '0.5rem' }}">
            {gameIds.map((id, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={id}
                  onChange={(e) => handleIdChange(index, e.target.value)}
                  placeholder="Введіть назву гри"
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveField(index)}
                  className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-red-600 transition duration-300 focus:outline-none"
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameForm;

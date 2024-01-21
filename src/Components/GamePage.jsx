import React, { useState } from "react";
import GamePageTop from "./GamePageTop";
import GamePageBottome from "./GamePageBottome";

function GamePage() {
  const number = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState("");

  return (
    <>
      <GamePageTop
        number={number}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        error={error}
        setError={setError}
      ></GamePageTop>
      <GamePageBottome
        number={number}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        error={error}
        setError={setError}
      ></GamePageBottome>
    </>
  );
}

export default GamePage;

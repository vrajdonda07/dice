import React, { useState } from "react";
import styles from "./gamepage.module.css";
import Rules from "./Rules";

function GamePageBottome({selectedNumber, setSelectedNumber, currentDice, setCurrentDice, setTotalScore, error, setError}) {
  // const [currentDice, setCurrentDice] = useState(1);

  const[showRules, setShowRules] = useState(false)

  const handleRollDice = (min, max) => {
    if(selectedNumber == null){
      setError("Please Select Number")
      return;
    }
    setError("")
    const random = Math.floor(Math.random() * (max - min) + min);
    // console.log(random);
    setCurrentDice(random);
    setSelectedNumber(undefined)//to unselect the num when we click dice
    if(selectedNumber === random){
      console.log("plus " + random)
      setTotalScore((prev) => prev + 2)
    }else{
      console.log("minus " + random)
      setTotalScore((prev) => prev - 2)
    }
  };

  const handleReset = () => {
    setTotalScore(0)
  }

  const handleShowRule = () => {
    setShowRules((prev) => !prev)
  }

  return (
    <div>
      <div className={styles.rolldice}>
        <div onClick={() => handleRollDice(1, 7)} className={styles.rollimg}>
          <img src={`./assets/dice${currentDice}.png`} alt="not found"></img>
        </div>
        <div className={styles.rollheading}>
          <p>Click to roll</p>
        </div>
        <div>
          <button onClick={handleReset} className={styles.resetbtn}>Reset Score</button>
        </div>
        <div>
          <button onClick={handleShowRule} className={styles.showrulebtn}>{showRules ? 'Hide' : 'Show'} Rules</button>
        </div>
      </div>
      <div>
        {showRules && <Rules />}
      </div>
    </div>
  );
}

export default GamePageBottome;

import React from "react";
import styles from "./homepage.module.css";

function HomePage({handleStart}) {
  return (
    <>
      <div className={styles.homecontainer}>
        <div className={styles.imgDiv}>
          <img
            className={styles.diceImg}
            src="assets/dice.png"
            alt="not found"
          />
        </div>
        <div>
          <div className={styles.homeheading}>DICE GAME</div>
          <div className={styles.content}>
            <button onClick={handleStart} className={styles.playbtn}>Play Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React from "react";
import styles from './gamepage.module.css'

function Rules() {
  return (
    <div className={styles.rules}>
      <div className={styles.rulesheading}>
        <h1>How to play dice game</h1>
      </div>
      <div className={styles.rulespara}>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>After clicking on dice, if selected number is match to dice number you will get 2 points.</p>
        <p>If you get wrong guess then 2 point will be deducted.</p>
      </div>
    </div>
  );
}

export default Rules;

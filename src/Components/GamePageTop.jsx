import React, { useState } from "react";
import styles from "./gamepage.module.css";

function GamePageTop({
  number,
  selectedNumber,
  setSelectedNumber,
  currentDice,
  totalScore,
  setTotalScore,
  error,
  setError,
}) {
  // const number = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState();

  const handleSelectNumber = ({ val, index }) => {
    setSelectedNumber(val);
    console.log("selected num index " + selectedNumber);
    console.log("current dice " + currentDice);
  };

  return (
    <>
      <div className={styles.errormsg}>{error}</div>
      <div className={styles.topbar}>
        <div className={styles.score}>
          <h1>{totalScore}</h1>
          <p>Total score</p>
        </div>
        <div className={styles.selectNumber}>
          {number.map((val, index) => (
            <div
              style={{
                background: selectedNumber === index + 1 ? "black" : "white",
                color: selectedNumber === index + 1 ? "white" : "black",
                width: "50px",
                height: "50px",
                border: "1px solid black",
                textAlign: "center",
                lineHeight: "50px",
              }}
              onClick={() => handleSelectNumber({ val, index })}
              className={styles.sn}
              key={index}
            >
              {val}
            </div>
          ))}
          <div className={styles.selectheading}>Select Number</div>
        </div>
      </div>
    </>
  );
}

export default GamePageTop;

///

// const number = [1, 2, 3, 4, 5, 6];
//   const [selectedNumber, setSelectedNumber] = useState(Array(6).fill(false));

//   const handleSelectNumber = ({ val, index }) => {
//     const x = [...selectedNumber];
//     x[index] = !x[index];
//     setSelectedNumber(x);
//     console.log(selectedNumber);
//   };
// <div className={styles.topbar}>
//       <div className={styles.score}>
//         <h1>0</h1>
//         <p>Total score</p>
//       </div>
//       <div className={styles.selectNumber}>
//         {selectedNumber.map((val, index) => (
//           <div
//             style={{
//               background: val ? "black" : "white",
//               color: val ? "white" : "black",
//               width: "50px",
//               height: "50px",
//               border: "1px solid black",
//               textAlign: "center",
//               lineHeight: "50px",
//             }}
//             onClick={() => handleSelectNumber({ val, index })}
//             className={styles.sn}
//             key={index}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>

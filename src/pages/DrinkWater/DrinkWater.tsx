/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import styles from './DrinkWater.module.scss';

export default function DrinkWater() {
  const [isFull, setIsFull] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const totalCups = 8;

  const handleOnClick = (index: number) => {
    setIsFull((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drink Water</h1>
      <h3 className={styles.subtitle}>Goal: 2 Liters</h3>
      <div className={styles.cup}>
        <div className={styles.remaining}>
          {isFull.filter((item) => item === true).length !== totalCups && (
            <>
              <span>{`${
                2 - (250 * isFull.filter((item) => item === true).length) / 1000
              }L`}</span>
              <small>Remaining</small>
            </>
          )}
        </div>
        {isFull.filter((item) => item === true).length !== 0 && (
          <div
            className={styles.percentage}
            style={{
              height: `${
                (isFull.filter((item) => item === true).length / totalCups) *
                330
              }px`,
            }}
          >
            {`${
              (isFull.filter((item) => item === true).length / totalCups) * 100
            }%`}
          </div>
        )}
      </div>
      <p className={styles.text}>
        Select how many glasses of water that you have drank
      </p>
      <div className={styles.cups}>
        {isFull.map((_cup, index) => (
          <button
            className={`${styles.cup} ${styles.cup_small} ${
              isFull[index] ? styles.full : ''
            }`}
            key={index}
            onClick={() => handleOnClick(index)}
            type="button"
          >
            250 ml
          </button>
        ))}
      </div>
    </div>
  );
}

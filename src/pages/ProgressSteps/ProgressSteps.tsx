import { useState } from 'react';

import styles from './ProgressSteps.module.scss';

export default function ProgressSteps() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress__container}>
        <div className={styles.progress} style={{ width: `${step * 33}%` }} />
        <div className={`${styles.circle} ${styles.circle__active}`}>1</div>
        <div
          className={`${styles.circle} ${step >= 1 && styles.circle__active}`}
        >
          2
        </div>
        <div
          className={`${styles.circle} ${step >= 2 && styles.circle__active}`}
        >
          3
        </div>
        <div
          className={`${styles.circle} ${step >= 3 && styles.circle__active}`}
        >
          4
        </div>
      </div>
      <div>
        <button
          className={styles.btn}
          disabled={step === 0}
          type="button"
          onClick={handlePreviousStep}
        >
          Prev
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={handleNextStep}
          disabled={step === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';

import styles from './ThemeClock.module.scss';

export default function ThemeClock() {
  const [isDark, setIsDark] = useState(false);

  const handleOnClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ''}`}>
      <button
        className={styles.toggle_theme}
        type="button"
        onClick={() => handleOnClick()}
      >
        Dark mode
      </button>

      <div className={styles.clock_container}>
        <div className={styles.clock}>
          <div className={`${styles.needle} ${styles.hour}`} />
          <div className={`${styles.needle} ${styles.minute}`} />
          <div className={`${styles.needle} ${styles.second}`} />
          <div className={styles.center_point} />
        </div>

        <div className={styles.time} />
        <div className={styles.date} />
      </div>
    </div>
  );
}

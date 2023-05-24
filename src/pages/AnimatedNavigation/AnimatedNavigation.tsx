import { useState } from 'react';

import styles from './AnimatedNavigation.module.scss';

export default function AnimatedNavigation() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className={styles.container}>
      <nav className={`${!toggle ? styles.active : ''}`}>
        <ul>
          <li>
            <a href="/#/AnimatedNavigation">Home</a>
          </li>
          <li>
            <a href="/#/AnimatedNavigation">Works</a>
          </li>
          <li>
            <a href="/#/AnimatedNavigation">About</a>
          </li>
          <li>
            <a href="/#/AnimatedNavigation">Contact</a>
          </li>
        </ul>
        <button
          className={styles.icon}
          onClick={() => handleClick()}
          type="button"
        >
          <div className={`${styles.line} ${styles.line_1}`} />
          <div className={`${styles.line} ${styles.line_2}`} />
        </button>
      </nav>
    </div>
  );
}

import { useEffect, useState } from 'react';

import styles from './EventKeyCodes.module.scss';

export default function EventKeyCodes() {
  const [isPressed, setButtonPressed] = useState<string[]>();
  const names = ['event.key', 'event.code'];

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      setButtonPressed([event.key, event.code]);
    });
  }, []);

  return (
    <div className={styles.container}>
      {!isPressed && (
        <div>
          <div className={styles.key}>Press any key to get the keyCode</div>
        </div>
      )}
      {isPressed &&
        isPressed.map((button, index) => (
          <div className={styles.key} key={`${button}_${names[index]}`}>
            <small>{names[index]}</small>
            {button}
          </div>
        ))}
    </div>
  );
}

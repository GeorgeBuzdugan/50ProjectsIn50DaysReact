import { useState } from 'react';

import styles from './IncrementingCounter.module.scss';
import useInterval from './useInterval';

interface Props {
  icon: React.ReactElement;
  maxNumber: number;
  initialIncrement: number;
  title: string;
}

export default function Counter({
  icon,
  maxNumber,
  initialIncrement,
  title,
}: Props) {
  const [followers, setFollowers] = useState(0);

  useInterval(() => {
    if (followers === 0)
      setFollowers((prevState) => prevState + initialIncrement);
    if (followers < maxNumber)
      setFollowers((prevState) => prevState + Math.ceil(prevState / 200));
    else setFollowers(maxNumber);
  }, 1);

  return (
    <div className={styles.counter_container}>
      {icon}
      <div className={styles.counter}>{followers}</div>
      <span>{title}</span>
    </div>
  );
}

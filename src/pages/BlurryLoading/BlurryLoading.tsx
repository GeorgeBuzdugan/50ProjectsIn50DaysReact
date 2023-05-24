import { useEffect, useState } from 'react';

import styles from './BlurryLoading.module.scss';

export default function BlurryLoading() {
  const [loader, setLoader] = useState(0);

  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    if (loader < 100) setTimeout(() => setLoader(loader + 1), 30);
  }, [loader]);

  return (
    <div className={styles.container}>
      <section
        className={styles.bg}
        style={{ filter: `blur(${scale(loader, 0, 100, 30, 0)}px)` }}
      />
      <div
        className={styles.loading}
        style={{ opacity: scale(loader, 0, 100, 1, 0) }}
      >
        {loader}%
      </div>
    </div>
  );
}

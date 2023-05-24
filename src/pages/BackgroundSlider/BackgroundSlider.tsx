import { useState } from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

import styles from './BackgroundSlider.module.scss';

const slides = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
];

export default function BackgroundSlider() {
  const [isActive, setIsActive] = useState(0);

  const handleOnClickPrevious = () => {
    if (isActive === 0) setIsActive(slides.length - 1);
    else setIsActive(isActive - 1);
  };

  const handleOnClickNext = () => {
    if (isActive === slides.length - 1) setIsActive(0);
    else setIsActive(isActive + 1);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${slides[isActive].url})`,
      }}
    >
      <div className={styles.slider_container}>
        {slides.map((slide) => (
          <div
            className={`${styles.slide} ${
              slide.id === isActive ? styles.active : ''
            }`}
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
          />
        ))}
      </div>
      <button
        className={`${styles.arrow} ${styles.left_arrow}`}
        type="button"
        onClick={() => handleOnClickPrevious()}
      >
        <GrCaretPrevious />
      </button>

      <button
        className={`${styles.arrow} ${styles.right_arrow}`}
        type="button"
        onClick={() => handleOnClickNext()}
      >
        <GrCaretNext />
      </button>
    </div>
  );
}

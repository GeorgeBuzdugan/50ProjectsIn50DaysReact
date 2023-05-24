import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './HiddenSearch.module.scss';

export default function HiddenSearch() {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          type="text"
          className={`${styles.search__input} ${
            isActive ? styles.search__active__input : ''
          }`}
          placeholder="Search..."
        />
        <button
          className={`${styles.btn} ${
            isActive ? styles.search__active__btn : ''
          }`}
          type="button"
          onClick={handleIsActive}
        >
          <AiOutlineSearch className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

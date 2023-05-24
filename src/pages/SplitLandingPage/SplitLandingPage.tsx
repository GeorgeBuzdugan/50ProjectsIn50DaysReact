import styles from './SplitLandingPage.module.scss';

export default function ScrollAnimation() {
  return (
    <div className={styles.container}>
      <div className={`${styles.split} ${styles.split__left}`}>
        <h1 className={styles.text}>Playstation 5</h1>
        <button type="button" className={styles.btn}>
          Buy Now
        </button>
      </div>
      <div className={`${styles.split} ${styles.split__right}`}>
        <h1 className={styles.text}>XBox Series X</h1>
        <button type="button" className={styles.btn}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './FormInputWave.module.scss';

export default function FormInputWave() {
  function labelToSpan(label: string) {
    return label.split('').map((letter, index) => (
      <span key={letter} style={{ transitionDelay: `${index * 50}ms` }}>
        {letter}
      </span>
    ));
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Please Login</h1>
        <form>
          <div className={styles.form_control}>
            <input id="email" type="text" required />
            <label htmlFor="email">{labelToSpan('Email')}</label>
          </div>

          <div className={styles.form_control}>
            <input id="password" type="password" required />
            <label htmlFor="password">{labelToSpan('Password')}</label>
          </div>

          <button className={styles.btn} type="button">
            Login
          </button>

          <p className={styles.text}>
            Don&apos;t have an account? <a href="/#/FormInputWave">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

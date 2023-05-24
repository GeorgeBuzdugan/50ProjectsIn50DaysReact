import { useEffect, useState } from 'react';

import getDadJokes from '../../api/getDadJokes';
import styles from './DadJokes.module.scss';

export default function DadJokes() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [joke, setJoke] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function awaitDadJokes() {
      setIsLoading(true);
      const response = await getDadJokes();
      if (response.hasError) {
        setHasError(true);
      }
      if (response.joke) {
        setJoke(response.joke);
      }
      setIsLoading(false);
    }
    awaitDadJokes();
  }, [count]);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.joke_container}>
        <h3>Don&apos;t Laugh Challenge</h3>
        {hasError && <h3>Something went wrong.</h3>}
        {!hasError && isLoading && <h3 className={styles.joke}>Loading ...</h3>}
        {!hasError && !isLoading && (
          <div id="joke" className={styles.joke}>
            {joke}
          </div>
        )}
        <button onClick={handleOnClick} className={styles.btn} type="button">
          Get Another Joke
        </button>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/dot-notation */
import React, { useEffect, useState } from 'react';

import getMovies from '../../api/getMovies';
import styles from './MovieApp.module.scss';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const PLACEHOLDER_IMAGE =
  'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

function getClassByRate(vote: number) {
  if (vote >= 8) {
    return 'green';
  }
  if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

export default function MovieApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [value, setValue] = useState('');

  async function awaitMovies(searchTerm: string | undefined) {
    setIsLoading(true);
    const response = await getMovies(searchTerm);
    if (response.hasError) {
      setHasError(true);
    }
    if (response.movies) {
      setMovies(response.movies);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    awaitMovies(undefined);
  }, []);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    awaitMovies(value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <header>
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search"
            value={value}
            onChange={(event) => handleOnChange(event)}
          />
        </form>
      </header>

      <main className={styles.main}>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && hasError && <h1>Something went wrong!</h1>}
        {!isLoading &&
          !hasError &&
          movies.length > 0 &&
          movies.map((movie) => (
            <div className={styles.movie} key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? IMG_PATH + movie.poster_path
                    : PLACEHOLDER_IMAGE
                }
                alt={`Poster of movie ${movie.title}`}
              />
              <div className={styles.movie_info}>
                <h3>{movie.original_title}</h3>
                <span className={styles[getClassByRate(movie.vote_average)]}>
                  {movie.vote_average}
                </span>
              </div>
              <div className={styles.overview}>
                <h3>Overview</h3>
                {movie.overview}
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}

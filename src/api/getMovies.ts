// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';

export interface IErrorMessage {
  message: string;
  code: string | undefined;
}

const API_KEY = '8b4d08a0b549638a989586803f805006';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

async function getMovies(searchTerm: string | undefined) {
  let hasError = false;
  let errorMessage = <IErrorMessage>{};
  let movies;
  const url = searchTerm ? SEARCH_API + searchTerm : API_URL;
  try {
    const result = await axios.get(url);
    movies = result.data.results;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      errorMessage = { message: error.message, code: error.code };
    } else {
      errorMessage = { message: 'Something went wrong.', code: undefined };
    }
    hasError = true;
  }
  return { movies, errorMessage, hasError };
}

export default getMovies;

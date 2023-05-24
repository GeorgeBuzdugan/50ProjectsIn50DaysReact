// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';

export interface IErrorMessage {
  message: string;
  code: string | undefined;
}

async function getDadJokes() {
  let hasError = false;
  let errorMessage = <IErrorMessage>{};
  let joke;

  try {
    const result = await axios.get('https://icanhazdadjoke.com/slack');
    joke = result.data.attachments[0].text;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      errorMessage = { message: error.message, code: error.code };
    } else {
      errorMessage = { message: 'Something went wrong.', code: undefined };
    }
    hasError = true;
  }
  return { joke, errorMessage, hasError };
}

export default getDadJokes;

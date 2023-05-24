/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './RandomChoicePicker.module.scss';

function splitLastOccurrence(str: string, substring: string) {
  const lastIndex = str.lastIndexOf(substring);

  const after = str.slice(lastIndex + 1);

  return after;
}

export default function RandomChoicePicker() {
  const [textValue, setTextValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [highlight, setHighlight] = useState(-1);
  const [error, setError] = useState(false);

  function pickRandomTag() {
    return Math.floor(Math.random() * tags.length);
  }

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      if (randomTag !== undefined) {
        setHighlight(randomTag);

        setTimeout(() => {
          setHighlight(randomTag);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        setHighlight(randomTag);
      }, 100);
    }, times * 100);
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      setTextValue('');
      randomSelect();
    } else if (/^[a-z]$/i.test(event.key)) {
      setTextValue(target.value + event.key);
    } else if (event.key === ',') {
      if (tags.includes(splitLastOccurrence(target.value, ','))) setError(true);
      else {
        setTags((prevState) => [
          ...prevState,
          splitLastOccurrence(target.value, ','),
        ]);
        setTextValue(target.value + event.key);
        setError(false);
      }
    } else if (event.code === 'Backspace') {
      if (target.value[target.value.length - 1] !== ',')
        setTextValue(target.value.slice(0, -1));
    }
  };

  const handleClick = (index: number) => {
    setHighlight(-1);
    setTextValue((prevState) => prevState.replace(`${tags[index]},`, ''));
    setTags((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);
  };

  const handleClear = () => {
    setTextValue('');
    setTags([]);
    setHighlight(-1);
    setError(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.choices}>
        <h3>
          Enter all of the choices divided by a comma. <br /> Press enter when
          you&apos;re done
        </h3>
        <textarea
          placeholder="Enter choices here..."
          onKeyDown={(e) => handleOnKeyDown(e)}
          onChange={() => undefined}
          value={textValue}
        />
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div
              key={`${tag}-tag-${index}`}
              className={`${styles.tag} ${
                highlight === index && styles.tag__highlight
              }`}
            >
              {tag}
              <button type="button" onClick={() => handleClick(index)}>
                <AiOutlineClose color="#fff" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>{error && <h3>Tag has already been added.</h3>}</div>
      <div>
        {tags.length > 0 && (
          <button
            type="button"
            className={styles.clear_button}
            onClick={() => handleClear()}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

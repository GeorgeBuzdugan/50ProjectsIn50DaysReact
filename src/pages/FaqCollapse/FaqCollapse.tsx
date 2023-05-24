import { useState } from 'react';

import Dropdown from './Dropdown';
import styles from './FaqCollapse.module.scss';

const dropdowns = [
  {
    id: 'first',
    title: "Why shouldn't we trust atoms?",
    text: 'They make everything up.',
  },
  {
    id: 'second',
    title: 'What do you call someone with no body and no nose?',
    text: 'Nobody knows.',
  },
  {
    id: 'third',
    title: "What's the object-oriented way to become wealthy?",
    text: 'Inheritance.',
  },
  {
    id: 'fourth',
    title: 'How many tickles does it take to tickle an octopus?',
    text: 'Ten-tickles!',
  },
  {
    id: 'fifth',
    title: 'What is: 1 + 1?',
    text: 'Depends on who are you asking.',
  },
];

export default function FaqCollapse() {
  const [isActive, setIsActive] = useState(dropdowns[0].id);
  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.faq__container}>
        {dropdowns.map((dropdown) => (
          <Dropdown
            key={dropdown.id}
            id={dropdown.id}
            title={dropdown.title}
            text={dropdown.text}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </div>
    </div>
  );
}

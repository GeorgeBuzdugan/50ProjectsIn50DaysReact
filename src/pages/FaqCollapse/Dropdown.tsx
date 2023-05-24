import { MdArrowDropDown, MdClose } from 'react-icons/md';

import styles from './FaqCollapse.module.scss';

type Props = {
  id: string;
  title: string;
  text: string;
  isActive: string;
  setIsActive: (value: string) => void;
};

export default function Dropdown({
  id,
  title,
  text,
  isActive,
  setIsActive,
}: Props) {
  return (
    <div
      className={`${styles.faq} ${isActive === id ? styles.faq__active : ''}`}
    >
      <h3 className={styles.faq__title}>{title}</h3>
      {isActive === id && <p className={styles.faq__text}>{text}</p>}
      <button
        className={styles.faq__toggle}
        type="button"
        onClick={() => (isActive === id ? setIsActive('') : setIsActive(id))}
      >
        {isActive === id ? <MdClose /> : <MdArrowDropDown />}
      </button>
    </div>
  );
}

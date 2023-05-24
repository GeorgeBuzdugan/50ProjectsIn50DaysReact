import { ReactNode, useRef } from 'react';

import useElementOnScreen from '../../hooks/useElementOnScreen';
import styles from './ScrollAnimation.module.scss';

type Props = {
  children: ReactNode;
};

export default function Animate({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      className={`${onScreen ? styles.box__show : styles.box__hide} ${
        styles.box
      }`}
    >
      {children}
    </div>
  );
}

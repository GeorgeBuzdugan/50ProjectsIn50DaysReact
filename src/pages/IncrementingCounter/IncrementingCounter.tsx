import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';

import Counter from './Counter';
import styles from './IncrementingCounter.module.scss';

const data = [
  {
    icon: <AiOutlineTwitter size={70} />,
    maxNumber: 12000,
    initialIncrement: 20,
    title: 'Twitter Followers',
  },
  {
    icon: <AiOutlineYoutube size={70} />,
    maxNumber: 5000,
    initialIncrement: 13,
    title: 'Youtube Subscribers',
  },
  {
    icon: <AiOutlineFacebook size={70} />,
    maxNumber: 7500,
    initialIncrement: 17,
    title: 'Facebook Fans',
  },
];

export default function IncrementingCounter() {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Counter
          icon={item.icon}
          maxNumber={item.maxNumber}
          initialIncrement={item.initialIncrement}
          title={item.title}
          key={item.title}
        />
      ))}
    </div>
  );
}

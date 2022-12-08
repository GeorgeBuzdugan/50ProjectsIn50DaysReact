import { useState } from 'react';

import Card from '../../components/ExpandingCard/Card';
import { EXPANDING_CARDS } from '../../constants/constants';

export default function ExpandingCards() {
  const [isActive, setIsActive] = useState([true, false, false, false, false]);

  const handleOnClick = (index: number) => {
    setIsActive((prevState) =>
      prevState.map((state, stateIndex) => {
        let newState = false;
        if (state) {
          newState = false;
        }
        if (index === stateIndex) {
          newState = true;
        }
        return newState;
      })
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '90vw',
        height: '100vh',
        margin: 'auto',
        alignItems: 'center',
      }}
    >
      {EXPANDING_CARDS.map((card, index) => (
        <Card
          id={`card_${index.toString()}`}
          title={card[1]}
          url={card[0]}
          key={card[0]}
          isActive={isActive[index]}
          onClick={() => handleOnClick(index)}
        />
      ))}
    </div>
  );
}

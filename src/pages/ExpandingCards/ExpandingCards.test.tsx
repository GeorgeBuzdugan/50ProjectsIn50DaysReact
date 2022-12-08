/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { EXPANDING_CARDS } from '../../constants/constants';
import ExpandingCards from './ExpandingCards';

describe('Expanding Cards', () => {
  it('Renders cards', () => {
    render(<ExpandingCards />);
    // eslint-disable-next-line array-callback-return
    EXPANDING_CARDS.map((card, index) => {
      expect(screen.getByTestId(`card_${index}`)).toHaveAttribute(
        'style',
        `background-image: url(${card[0]});`
      );
      expect(screen.getByTestId(`card_${index}`)).toHaveTextContent(card[1]);
    });
  });
});

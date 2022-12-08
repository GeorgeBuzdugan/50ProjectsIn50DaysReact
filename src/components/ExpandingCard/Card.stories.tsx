/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EXPANDING_CARDS } from '../../constants/constants';
import Card from './Card';

export default {
  title: 'Expanding Cards/Expanding Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ExpandingCard = Template.bind({});
ExpandingCard.args = {
  id: 'card_1',
  title: EXPANDING_CARDS[0][1],
  url: EXPANDING_CARDS[0][0],
  isActive: true,
};

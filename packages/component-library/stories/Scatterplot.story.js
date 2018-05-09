import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, number } from '@storybook/addon-knobs/react';

import { Scatterplot } from '../src';


const singleGroup = [
  { x: 6, y: 6 },
  { x: 7, y: 4 },
  { x: 8, y: 3 },
  { x: 9, y: 6 },
  { x: 9, y: 8 },
  { x: 0, y: 3 },
  { x: 0, y: 2 },
  { x: 5, y: 3 },
  { x: 1, y: 5 },
  { x: 8, y: 4 },
];

const dualGroup = [
  { x: 1, y: 23, name: 'Hip Hop' },
  { x: 4, y: 10, name: 'Hip Hop' },
  { x: 1, y: 12, name: 'Rock' },
  { x: 5, y: 87, name: 'Rock' },
  { x: 3, y: -7, name: 'Rock' },
  { x: 6, y: 56, name: 'Hip Hop' },
  { x: 7, y: 45, name: 'Hip Hop' },
  { x: 9, y: 59, name: 'Rock' },
  { x: 1, y: -27, name: 'Hip Hop' },
  { x: 8, y: 113, name: 'Rock' },
  { x: 3, y: 68, name: 'Rock' },
  { x: 2, y: 50, name: 'Hip Hop' },
  { x: 8, y: 62, name: 'Hip Hop' },
  { x: 0, y: 15, name: 'Rock' },
  { x: 1, y: 21, name: 'Rock' },
  { x: 9, y: 46, name: 'Hip Hop' },
  { x: 1, y: 42, name: 'Hip Hop' },
  { x: 10, y: 83, name: 'Rock' },
  { x: 4, y: 34, name: 'Rock' },
  { x: 10, y: 61, name: 'Rock' },
  { x: 3, y: -6, name: 'Hip Hop' },
  { x: 8, y: 61, name: 'Rock' },
  { x: 7, y: 102, name: 'Rock' },
  { x: 0, y: -26, name: 'Rock' },
  { x: 5, y: 59, name: 'Hip Hop' }
];


const dataGroups = ['Rock', 'Hip Hop'];

export default () => storiesOf('Scatterplot')
  .addDecorator(withKnobs)
  .add('Simple usage', () => {
    const title = text('Title', 'Concert Attendees and Revenue');
    const description = text('Description', 'For concerts at XYZ Venus in 2017');
    const data = object('Data', singleGroup);
    const size = number('Point Size', 7);

    return (
      <div>
        <div>
          <Scatterplot
            title={title}
            subtitle={description}
            xLabel="Attendies"
            yLabel="Revenue"
            data={data}
            size={size}
          />
        </div>
      </div>
    );
  })
  .add('Multiple Groups', () => {
    const title = text('Title', 'Concert Attendees and Revenue');
    const description = text('Description', 'For concerts at XYZ Venus in 2017');
    const data = object('Data', dualGroup);
    const size = number('Point Size', 7);

    return (
      <div>
        <div>
          <Scatterplot
            title={title}
            subtitle={description}
            data={data}
            dataGroups={dataGroups}
            size={size}
          />
        </div>
      </div>
    );
  });


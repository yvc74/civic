import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';

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

export default () => storiesOf('Scatterplot')
  .addDecorator(withKnobs)
  .add('Simple usage', () => {
    const title = text('Title', 'Concert Attendees and Revenue');
    const description = text('Description', 'For concerts at XYZ Venus in 2017');
    const data = object('Data', singleGroup);

    return (
      <div>
        <div>
          <Scatterplot
            title={title}
            subtitle={description}
            data={data}
            xLabel="Attendies"
            yLabel="Revenue"
          />
        </div>
      </div>
    );
  })
  .add('Multiple Groups', () => {
    const title = text('Title', 'Concert Attendees and Revenue');
    const description = text('Description', 'For concerts at XYZ Venus in 2017');

    return (
      <div>
        <div>
          <Scatterplot
            title={title}
            subtitle={description}
            data={singleGroup}
          />
        </div>
      </div>
    );
  });


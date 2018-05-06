import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';

import { Scatterplot } from '../src';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  height: '400px',
  width: '400px',
};

const testData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

export default () => storiesOf('Scatterplot')
  .addDecorator(withKnobs)
  .add('Simple usage', () => {
    const title = text('Title', 'Scatter Plot Title');
    const description = text('Description', 'Scatterplot description');
    const data = object('Data', testData);

    return (
      <div style={{ width: '100%' }}>
        <div style={containerStyle}>
          <Scatterplot
            title={title}
            description={description}
            data={data}
          />
        </div>
      </div>
    );
  });


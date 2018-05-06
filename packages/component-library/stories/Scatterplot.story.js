import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Scatterplot } from '../src';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const data = [{ x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }];

export default () => storiesOf('Scatterplot')
  .add('Simple usage', () => {
    return (
      <div style={containerStyle} >
        <Scatterplot data={data} />
      </div>
    );
  });


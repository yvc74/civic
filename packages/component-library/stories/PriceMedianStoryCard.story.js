/* eslint-disable no-console */
import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';

import {
  withKnobs,
  text, number, object, array,
} from '@storybook/addon-knobs';
import { HorizontalBarChart } from '../src';
import { getRandomValuesArray, getColors, randomizer, wallOfRichText } from './shared';

const API_URL = 'http://45.55.145.111:8000/api/harvardjchs/?datapoint=OR&datatype=Price-to-Median&date=2016-01-01&limit=100&source=&valuetype=';
const labelKey = 'datapoint';
const valueKey = 'value';
const grabDataFromResponse = response => response.results ? response.results : [];
const oregonRegex = /, OR(-\w*$|$)/g;
const filterForOregon = data => data
  .filter(x => typeof x[labelKey] === 'string' && x[labelKey].search(oregonRegex) > -1);
const makeStateObj = data => ({ data });
const processResponseForState = resp => {
  console.log(resp);
  return makeStateObj(filterForOregon(grabDataFromResponse(resp)));
};

class PriceMedian extends React.Component {
  state = {
    data: [],
  };

  componentWillMount () {
    fetch(API_URL)
      .then(r => r.json())
      .then(r => this.setState(processResponseForState(r)));
  }


  render () {
    const { data } = this.state;
    return (
      <HorizontalBarChart
        data={data}
        dataKey="id"
        dataKeyLabel={labelKey}
        dataValue={valueKey}
      />
    );
  }
}

export default () => storiesOf('PriceMedianStoryCard')
  .addDecorator(checkA11y)
  .add('Live API Usage', () => <PriceMedian />)
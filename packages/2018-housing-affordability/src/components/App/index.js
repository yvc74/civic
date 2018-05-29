import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMedianPriceData } from '../../state/selectors';
import { getMedianPricesThunk } from '../../state/reducers/app';

import '@hackoregon/component-library/assets/global.styles.css';
import { StoryCard, HorizontalBarChart } from '@hackoregon/component-library';

class App extends Component {
  componentWillMount() {
    this.props.getMedianPrices();
  }

  render () {
    const { medianPriceData } = this.props;
    return (
      <StoryCard title="An example housing Story Card">
        <HorizontalBarChart
          data={medianPriceData}
          dataKey="id"
          dataKeyLabel="datapoint"
          dataValue="value"
        />
      </StoryCard>
    );
  }
}

App.displayName = 'App';

export default connect(
  state => {
    console.log(state);
    return ({
    medianPriceData: getMedianPriceData(state),
  })},
  dispatch => ({
    getMedianPrices: () => dispatch(getMedianPricesThunk()),
  }),
)(App);

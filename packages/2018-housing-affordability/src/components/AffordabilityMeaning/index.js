import React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

import '@hackoregon/component-library/assets/vendor/react-select.min.css';

import { HorizontalBarChart, Slider, CivicStoryCard, Dropdown } from '@hackoregon/component-library';

import {
  updateUserIncome,
  updateFamilySize,
} from '../../state/affordability-meaning/actions';

import {
  getUserIncome,
  getFamilySize,
} from '../../state/affordability-meaning/selectors';



export class AffordabilityMeaning extends React.Component {
  componentDidMount() {
    // this.props.fetchAllCities();
    // this.props.setCity();
  }

  render() {


    const parameterGroupStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '50%',
      minWidth: '340px',
    };

    const textAlignCenter = {
      textAlign: 'center',
    };

    // const DEFAULT_INCOME = 25;
    const MIN_INCOME = 9.75;
    const MAX_INCOME = 75;
    const userIncome = 1234;
    const setUserIncome = () => {};

    const FAMILY_SIZE = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
    ];

    return (
      <CivicStoryCard
        title="Affordability Meaning"
        slug="affordability-meaning"
      >
        <p className="description" style={textAlignCenter}>Compare your income to the average income of common demographics.</p>
            <div>
              <div style={parameterGroupStyle}>
                <h3 style={textAlignCenter}>Your income: ${userIncome.toFixed(2)}/hr</h3>
                <Slider
                  min={MIN_INCOME}
                  max={MAX_INCOME}
                  value={userIncome}
                  onChange={setUserIncome}
                />
              </div>
              <div style={parameterGroupStyle}>
                <h3 style={textAlignCenter}>Family Size </h3>
                <Dropdown
                  value={1}//{userUnitSize.value}
                  onChange={() => {}} //{event => setUnitSize(event)}
                  options={FAMILY_SIZE}
                />
                
              </div>
            </div>
           
      </CivicStoryCard>
    );
  }
}

AffordabilityMeaning.displayName = 'AffordabilityMeaning';

// Connect this to the redux store when necessary
export default connect(
  state => ({
  
  }),
  dispatch => ({
    // setUserIncome() {
    //   dispatch(updateUserIncome());
    // },
  })
)(AffordabilityMeaning);
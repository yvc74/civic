import React from 'react';
import { shallow } from 'enzyme';
import Scatterplot from './Scatterplot';

describe('Basic Scatterplot', () => {
  const data = [
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

  const title = 'Concert Attendees and Revenue';
  const description = 'For concerts at XYZ Venus in 2017';

  const wrapper = shallow(
    <Scatterplot
      title={title}
      subtitle={description}
      xLabel="Attendies"
      yLabel="Revenue"
      data={data}
    />);
  it('should render a Victory Scatter Chart', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });
  it('should have a title', () => {
    expect(wrapper.find('h3').text()).to.equal(title);
  });

});

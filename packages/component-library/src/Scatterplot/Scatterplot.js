import React, { PropTypes } from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryLabel } from 'victory';

// const Scatterplot = ({ data }) => (
//   <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
//     <XAxis dataKey={'x'} name="stature" unit="cm" />
//     <YAxis dataKey={'y'} name="weight" unit="kg" />
//     <Scatter name="A school" data={data} fill="#8884d8" />
//     <CartesianGrid />
//     <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//   </ScatterChart>
// );

const Scatterplot = ({ title, description, data }) => (
  <VictoryChart>
    <VictoryLabel
      textAnchor="middle"
      text={title}
      x={200}
      y={10}
    />
    <VictoryLabel
      textAnchor="middle"
      text={description}
      x={200}
      y={30}
    />
    <VictoryScatter
      style={{ data: { fill: '#c43a31' } }}
      size={7}
      data={data}
    />
  </VictoryChart>
);

Scatterplot.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.Array,
};

export default Scatterplot;

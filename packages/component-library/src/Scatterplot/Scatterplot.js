import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Scatterplot = ({ data }) => (
  <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    <XAxis dataKey={'x'} name="stature" unit="cm" />
    <YAxis dataKey={'y'} name="weight" unit="kg" />
    <Scatter name="A school" data={data} fill="#8884d8" />
    <CartesianGrid />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  </ScatterChart>
);

Scatterplot.propTypes = {
  data: React.PropTypes.Array,
};

export default Scatterplot;

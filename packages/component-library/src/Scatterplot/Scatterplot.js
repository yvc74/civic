import React, { PropTypes } from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis,
} from 'victory';

import CivicVictoryTheme from '../VictoryTheme/VictoryThemeIndex';
import { css } from 'emotion';

const barchartWrapper = css`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;

const titleStyle = css`
  font-family: 'filson-soft', sans-serif;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  margin: 40px 0 12px 0;
`;

const subtitleStyle = css`
  display: block;
  font-family: 'filson-soft', sans-serif;
  font-size: 18px;
  text-align: center;
`;

const genColor = () => `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;

const dataHandler = (size, data, dataGroups) => {
  if (dataGroups && dataGroups.length) {
    return dataGroups.map((group, i) => {
      const color = genColor();
      const key = group + i;
      return (
        <VictoryScatter
          key={key}
          style={{ data: { fill: color } }}
          size={size}
          data={data.filter(d => group === d.name)}
        />);
    });
  }
  const fill = genColor();
  return (
    <VictoryScatter
      style={{ data: { fill } }}
      size={size}
      data={data}
    />
  );
};

const Scatterplot = ({ title, subtitle, xLabel, yLabel, size, data, dataGroups }) => (
  <div>
    { title ? <h3 className={titleStyle}>{title}</h3> : null}
    { subtitle ? <span className={subtitleStyle}>{subtitle}</span> : null}
    <div className={barchartWrapper}>
      <VictoryChart
        domainPadding={20}
        animate={{ duration: 300 }}
        theme={CivicVictoryTheme.civic}
      >
        <VictoryLabel text={yLabel} textAnchor="middle" x={50} y={30} />
        <VictoryLabel text={xLabel} textAnchor="end" x={600} y={285} />

        {dataHandler(size, data, dataGroups)}

      </VictoryChart>
    </div>
  </div>
);

Scatterplot.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
  size: PropTypes.number,
  data: PropTypes.Array,
  dataGroups: PropTypes.Array,
};

Scatterplot.defaultProps = {
  size: 7,
};

export default Scatterplot;

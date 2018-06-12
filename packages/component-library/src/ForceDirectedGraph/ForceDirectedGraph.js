import React from 'react';
import PropTypes from 'prop-types';
import {
  ForceGraph,
  ForceGraphNode,
  ForceGraphLink,
} from 'react-vis-force';

import ChartContainer from '../ChartContainer';

const ForceDirectedGraph = ({ title, subtitle }) => (
  <ChartContainer title={title} subtitle={subtitle}>
    <ForceGraph simulationOptions={{ height: 300, width: 300, animate: true }}>
      <ForceGraphNode node={{ id: '1' }} fill="red" />
      <ForceGraphNode node={{ id: '2' }} fill="red" />
      <ForceGraphNode node={{ id: '3' }} fill="red" />
      <ForceGraphNode node={{ id: '4' }} fill="blue" />
      <ForceGraphNode node={{ id: '5' }} fill="blue" />
      <ForceGraphNode node={{ id: '6' }} fill="blue" />
      <ForceGraphLink link={{ source: '2', target: '1' }} />
      <ForceGraphLink link={{ source: '3', target: '1' }} />
      <ForceGraphLink link={{ source: '5', target: '4' }} />
      <ForceGraphLink link={{ source: '6', target: '4' }} />
    </ForceGraph>
  </ChartContainer>
);

export default ForceDirectedGraph;

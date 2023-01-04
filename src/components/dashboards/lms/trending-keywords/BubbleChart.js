import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const width = 460;
const height = 400;
const fontSize = 1; //rem

const ForceGraph = ({ nodes }) => {
  const [animatedNodes, setAnimatedNodes] = useState([]);

  const radiusScale = value => {
    const fx = d3
      .scaleSqrt()
      .range([15, 55])
      .domain([
        0.95 *
          d3.min(nodes, item => {
            return item.v;
          }),
        1.05 *
          d3.max(nodes, item => {
            return item.v;
          })
      ]);
    return fx(value);
  };

  // Tooltip
  const showTooltip = function (e, item) {
    e.target.classList.add('opacity-75');
    d3.select('.d3-tooltip').transition().duration(200);
    d3.select('.d3-tooltip')
      .style('opacity', 1)
      .style('border', `1px solid ${item.color}`)
      .text(item.name + ': ' + item.v)
      .style('left', e.clientX - 40 + 'px')
      .style('top', e.clientY - 40 + 'px');
  };

  const moveTooltip = function (e) {
    e.target.classList.add('opacity-75');
    d3.select('.d3-tooltip')
      .style('opacity', 1)
      .style('left', e.clientX - 40 + 'px')
      .style('top', e.clientY - 40 + 'px');
  };

  const hideTooltip = function (e) {
    e.target.classList.remove('opacity-75');
    d3.select('.d3-tooltip').transition().duration(200).style('opacity', 0);
  };

  useEffect(() => {
    const simulation = d3
      .forceSimulation()
      .velocityDecay(0.7)
      .force('x', d3.forceX().strength(0.05))
      .force('y', d3.forceY().strength(0.05))
      .force(
        'collide',
        d3.forceCollide(d => radiusScale(d.v) + 4)
      );

    simulation.on('tick', () => {
      setAnimatedNodes([...simulation.nodes()]);
    });

    simulation.nodes([...nodes]);

    simulation.alpha(0.01).restart();

    return () => simulation.stop();
  }, [nodes]);

  return (
    <>
      {animatedNodes.map((node, index) => (
        <g
          key={index}
          textAnchor="middle"
          transform={`translate(${width / 2 + node.x}, ${height / 2 + node.y})`}
          onMouseOver={e => showTooltip(e, node)}
          onMouseMove={e => moveTooltip(e)}
          onMouseLeave={e => hideTooltip(e)}
        >
          <circle r={radiusScale(node.v)} fill={node.color} strokeWidth="0" />
          <text
            dy="4"
            fill="#fff"
            textAnchor="middle"
            fontSize={`${fontSize}rem`}
            fontWeight="normal"
            style={{ pointerEvents: 'none' }}
          >
            {node.name}
          </text>
        </g>
      ))}
    </>
  );
};

const BubbleChart = ({ data }) => {
  return (
    <div className="position-relative w-100" style={{ height: '28rem' }}>
      <div className="d3-tooltip"></div>
      <svg
        className="packed-bubble-svg h-100 w-100"
        viewBox={'0 0 ' + width + ' ' + height}
      >
        <ForceGraph nodes={data} />
      </svg>
    </div>
  );
};

ForceGraph.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired
};

BubbleChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BubbleChart;

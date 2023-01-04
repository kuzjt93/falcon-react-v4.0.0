import React from 'react';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';

const HalfDoughnutChart = ({
  color = 'primary',
  target = 50,
  reached = 50
}) => {
  const options = {
    rotation: -90,
    circumference: '180',
    cutout: '80%',
    hover: { mode: null },
    plugins: {
      legend: {
        display: false
      },
      tooltip: chartJsDefaultTooltip()
    }
  };
  const data = {
    labels: ['Reached', 'Remaining'],
    datasets: [
      {
        data: [reached, target - reached],
        backgroundColor: [getColor(color), getColor('gray-300')],
        borderColor: [getColor(color), getColor('gray-300')]
      }
    ]
  };
  return <Doughnut data={data} options={options} width="112" />;
};

HalfDoughnutChart.propTypes = {
  target: PropTypes.number,
  reached: PropTypes.number,
  color: PropTypes.string
};

export default HalfDoughnutChart;

import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { getColor } from 'helpers/utils';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ProductShareChart = () => {
  const options = {
    tooltip: chartJsDefaultTooltip(),
    rotation: -90,
    circumference: '180',
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: chartJsDefaultTooltip()
    }
  };
  const data = {
    labels: ['Falcon', 'Sparrow'],
    datasets: [
      {
        data: [50, 88],
        backgroundColor: [getColor('primary'), getColor('gray-300')],
        borderColor: [getColor('primary'), getColor('gray-300')]
      }
    ]
  };
  return <Doughnut data={data} options={options} width="112" />;
};

export default ProductShareChart;

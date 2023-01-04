import FalconComponentCard from 'components/common/FalconComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import React from 'react';
import { Line } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: getColor('primary'),
        borderWidth: 2,
        fill: false,
        data: [55, 80, 60, 22, 50, 40, 90],
        tension: 0.3
      }
    ]
  };

  const options = {
    plugins: {
      tooltip: chartJsDefaultTooltip()
    },
    scales: {
      x: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1)
        }
      },
      y: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1),
          drawBorder: true
        }
      }
    }
  };

    return (
      <Line data={data} options={options}  height={1000} width={1618} />
    );  
  }
`;
const ChartLine = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Line Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Line,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartLine;

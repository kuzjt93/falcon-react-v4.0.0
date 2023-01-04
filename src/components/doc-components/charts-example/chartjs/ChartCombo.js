import FalconComponentCard from 'components/common/FalconComponentCard';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { getColor, rgbaColor } from 'helpers/utils';
import React from 'react';
import { Bar } from 'react-chartjs-2';

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
        data: [55, 80, -60, -22, -50, 40, 90]
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: getColor('soft-danger'),
        data: [4, -80, 90, -22, 70, 35, -50],
        borderWidth: 1
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: getColor('soft-primary'),
        data: [-30, 30, -18, 100, -45, -25, -50],
        borderWidth: 1
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
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
          color: rgbaColor(getColor('black'), 0.1)
        }
      }
    }
  };

    return (
      <Bar data={data} options={options} height={500} width={1618}/>
    );
  }
`;
const ChartCombo = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Combo Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Bar,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartCombo;

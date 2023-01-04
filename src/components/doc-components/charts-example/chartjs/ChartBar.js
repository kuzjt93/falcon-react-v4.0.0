import FalconComponentCard from 'components/common/FalconComponentCard';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { getColor, rgbaColor } from 'helpers/utils';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          rgbaColor(getColor('secondary'), 0.2),
          rgbaColor(getColor('warning'), 0.2),
          rgbaColor(getColor('info'), 0.2),
          rgbaColor(getColor('success'), 0.2),
          rgbaColor(getColor('info'), 0.2),
          rgbaColor(getColor('primary'), 0.2)
        ],
        borderColor: [
          getColor('secondary'),
          getColor('warning'),
          getColor('info'),
          getColor('success'),
          getColor('info'),
          getColor('primary')
        ],
        borderWidth: 1
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
      <Bar 
        data={data} 
        options={options} 
        height={1000} 
        width={1618}
      />
    );
  }
`;
const ChartBar = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Bar Chart" light={false} />
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

export default ChartBar;

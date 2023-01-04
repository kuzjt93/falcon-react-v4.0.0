import FalconComponentCard from 'components/common/FalconComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip, getBubbleDataset } from 'helpers/chartjs-utils';
import React from 'react';
import { Bubble } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: getBubbleDataset(5, 5, 15, 0, 100),
        backgroundColor: getColor('soft-primary'),
        hoverBackgroundColor: getColor('primary')
      },
      {
        label: 'Dataset 2',
        data: getBubbleDataset(5, 5, 15, 0, 100),
        backgroundColor: getColor('soft-success'),
        hoverBackgroundColor: getColor('success')
      },
      {
        label: 'Dataset 3',
        data: getBubbleDataset(5, 5, 15, 0, 100),
        backgroundColor: getColor('soft-danger'),
        hoverBackgroundColor: getColor('danger')
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'top'
      },
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
    <Bubble data={data} options={options}  width={200}/>
  );

}`;

const ChartBubble = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Bubble Chart" light={false} />

      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Bubble,

          getColor,
          rgbaColor,
          getBubbleDataset,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartBubble;

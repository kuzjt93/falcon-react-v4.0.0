import FalconComponentCard from 'components/common/FalconComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import React from 'react';
import { Scatter } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    datasets: [
      {
        label: 'Dataset one',
        data: [
          {
            x: -98,
            y: 42
          },
          {
            x: -85,
            y: -29
          },
          {
            x: -87,
            y: -70
          },
          {
            x: -53,
            y: 28
          },
          {
            x: -29,
            y: 4
          },
          {
            x: -2,
            y: -42
          },
          {
            x: 5,
            y: 3
          },
          {
            x: 39,
            y: 19
          },
          {
            x: 49,
            y: 79
          },
          {
            x: 83,
            y: -9
          },
          {
            x: 93,
            y: 12
          }
        ],
        pointBackgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1
      },
      {
        label: 'Dataset Two',
        data: [
          {
            x: 53,
            y: 12
          },
          {
            x: -78,
            y: 42
          },
          {
            x: -65,
            y: -39
          },
          {
            x: -57,
            y: -20
          },
          {
            x: 57,
            y: 28
          },
          {
            x: -35,
            y: 75
          },
          {
            x: -29,
            y: -43
          },
          {
            x: 15,
            y: 31
          },
          {
            x: 97,
            y: 19
          },
          {
            x: 49,
            y: 69
          },
          {
            x: 33,
            y: -57
          }
        ],
        pointBackgroundColor: getColor('warning'),
        borderColor: getColor('warning'),
        borderWidth: 1,
        borderRadius: '50%'
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
          color: rgbaColor(getColor('black'), 0.1)
        }
      }
    },
    animation: {
      duration: 2000
    }
  };

  return (
    <Scatter data={data} options={options}  width={200}/>
  );

}`;

const ChartScatter = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Scatter Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Scatter,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartScatter;

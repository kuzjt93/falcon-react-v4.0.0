import FalconComponentCard from 'components/common/FalconComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import React from 'react';
import { Radar } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data =  {
    labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
    datasets: [
      {
        label: 'Student A',
        backgroundColor: rgbaColor(getColor('success'), 0.5),
        data: [65, 75, 70, 80, 60, 80],
        borderWidth: 1
      },
      {
        label: 'Student B',
        backgroundColor: rgbaColor(getColor('primary'), 0.5),
        data: [54, 65, 60, 70, 70, 75],
        borderWidth: 1
      }
    ]
  }

  const options= {
    plugins: {
      tooltip: chartJsDefaultTooltip()
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1)
        }
      }
    }
  }

    return (
      <Radar data={data} options={options}  height={350} />
    );
  }
`;
const ChartRadar = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Radar Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Radar,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartRadar;

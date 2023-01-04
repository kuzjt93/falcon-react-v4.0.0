import FalconComponentCard from 'components/common/FalconComponentCard';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { getColor, rgbaColor } from 'helpers/utils';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
      {
        data: [10, 20, 50, 40, 30],
        backgroundColor: [
          rgbaColor(getColor('facebook'), 0.5),
          rgbaColor(getColor('youtube'), 0.5),
          rgbaColor(getColor('twitter'), 0.5),
          rgbaColor(getColor('linkedin'), 0.5),
          rgbaColor(getColor('success'), 0.5)
        ],
        borderWidth: 1,
        borderColor: getColor('gray-400')
      }
    ],
    labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub'],
    borderColor: getColor('gray-400') //- not working
  };

  const options = {
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
  };

    return (
      <PolarArea data={data} options={options} height={350} />
    );
  }
`;
const ChartPolar = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Polar Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          PolarArea,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartPolar;

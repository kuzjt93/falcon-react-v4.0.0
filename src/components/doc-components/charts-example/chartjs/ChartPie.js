import FalconComponentCard from 'components/common/FalconComponentCard';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import { getColor, rgbaColor } from 'helpers/utils';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
      {
        data: [5, 3, 2, 1, 1],
        backgroundColor: [
          rgbaColor(getColor('facebook'), 0.75),
          rgbaColor(getColor('youtube'), 0.75),
          rgbaColor(getColor('twitter'), 0.75),
          rgbaColor(getColor('linkedin'), 0.75),
          rgbaColor(getColor('github'), 0.75)
        ],
        borderWidth: 1,
        borderColor: getColor('gray-100')
      }
    ],
    labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub']
  };

  const options = {
    plugins: {
      tooltip: chartJsDefaultTooltip()
    },
    maintainAspectRatio: false
  };

    return (
      <Pie data={data} options={options} height={350} width={350}/>
    );
  }
`;
const ChartPie = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Pie Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Pie,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartPie;

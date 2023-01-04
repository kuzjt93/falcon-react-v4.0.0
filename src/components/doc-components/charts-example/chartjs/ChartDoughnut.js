import FalconComponentCard from 'components/common/FalconComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
      {
        data: [5, 3, 2, 1, 1],
        backgroundColor: [
          rgbaColor(getColor('facebook'), 0.2),
          rgbaColor(getColor('youtube'), 0.2),
          rgbaColor(getColor('twitter'), 0.2),
          rgbaColor(getColor('linkedin'), 0.2),
          rgbaColor(getColor('github'), 0.2)
        ],
        borderWidth: 1,
        borderColor: [
          getColor('facebook'),
          getColor('youtube'),
          getColor('twitter'),
          getColor('linkedin'),
          getColor('github')
        ]
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
      <Doughnut data={data} options={options} height={350} width={350}/>
    );
  }
`;
const ChartDoughnut = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Doughnut Chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          Doughnut,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </FalconComponentCard>
  );
};

export default ChartDoughnut;

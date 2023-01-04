import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';
import { getColor } from 'helpers/utils';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  const getOption = () => ({
    color: [
      getColor('danger'),
      getColor('warning'),
      getColor('primary')
    ],

    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      formatter: tooltipFormatter
    },
    xAxis: {
      type: 'category',
      data: days,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getColor('gray-300'),
          type: 'solid'
        }
      },
      axisTick: { show: false },
      axisLabel: {
        formatter: value => value.substring(0, 3),
        color: getColor('gray-400'),
        margin: 15
      },
      splitLine: {
        show: false
      },
      axisPointer: {
        lineStyle: {
          color: getColor('gray-300')
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: getColor('gray-200')
        }
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: getColor('gray-400'),
        margin: 15
      },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('primary')
        },
        symbol: 'circle',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('warning'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('warning')
        },
        symbol: 'circle',
        data: [220, 282, 201, 234, 290, 430, 410]
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('danger')
        },
        symbol: 'circle',
        data: [450, 432, 401, 454, 590, 530, 510]
      }
    ],
    grid: { right: '3%', left: '8%', bottom: '10%', top: '5%' }
  });
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const StepLineChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Step line chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default StepLineChart;

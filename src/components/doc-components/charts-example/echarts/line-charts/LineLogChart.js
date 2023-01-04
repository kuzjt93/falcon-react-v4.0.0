import FalconComponentCard from 'components/common/FalconComponentCard';
import { months } from 'data/common';
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
  const data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      },
      formatter: tooltipFormatter
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: getColor('gray-300')
        }
      },
      axisLabel: {
        color: getColor('gray-600')
      },
      splitLine: { show: false },
      data: Array.from(Array(10).keys()).map(item => item + 1)
    },
    yAxis: {
      type: 'log',
      axisLabel: {
        color: getColor('gray-600')
      },
      splitLine: {
        lineStyle: {
          color: getColor('gray-200')
        }
      }
    },
    series: [
      {
        name: 'Index Of 3',
        type: 'line',
        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
        symbolSize: 7,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('danger')
        },
        symbol: 'circle'
      },
      {
        name: 'Index of 2',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
        symbolSize: 7,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('success'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('success')
        },
        symbol: 'circle'
      },
      {
        name: 'Index of 1/2',
        type: 'line',
        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
        symbolSize: 7,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('info'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('info')
        },
        symbol: 'circle'
      }
    ],
    grid: {
      right: 10,
      left: 5,
      bottom: 5,
      top: 10,
      containLabel: true
    }
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

const LineLogChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Line log chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          months,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default LineLogChart;

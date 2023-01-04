import FalconComponentCard from 'components/common/FalconComponentCard';
import dayjs from 'dayjs';
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
import { getColor, rgbaColor } from 'helpers/utils';
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

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      },
      formatter: tooltipFormatter
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getColor('gray-300'),
          type: 'solid'
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: getColor('gray-400'),
        margin: 15,
        formatter: value => dayjs(value).format('MMM DD')
      },
      splitLine: {
        show: false
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
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: rgbaColor(getColor('primary'), 0.4)
        },
        {
          gt: 5,
          lt: 7,
          color: rgbaColor(getColor('primary'), 0.4)
        }
      ]
    },
    series: [
      {
        type: 'line',
        name: 'Total',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: getColor('primary'),
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
        },
        areaStyle: {},
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100]
        ]
      }
    ],
    grid: { right: 20, left: 5, bottom: 5, top: 8, containLabel: true }
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

const AreaPiecesChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Area pieces chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          dayjs,
          tooltipFormatter,
          rgbaColor
        }}
      />
    </FalconComponentCard>
  );
};

export default AreaPiecesChart;

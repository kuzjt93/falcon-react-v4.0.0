import React, { useRef } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { GaugeChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  GaugeChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = () => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: getColor('gray-100'),
    textStyle: { color: getColor('dark') },
    formatter: params =>
      `<h6 class="mb-0">${params.seriesName}: ${params.value}%</h6>`
  },
  series: [
    {
      type: 'gauge',
      name: 'Site visit',
      startAngle: 90,
      endAngle: -270,
      radius: '85%',
      pointer: {
        show: false
      },
      center: ['50%', '50%'],
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: getColor('info')
        }
      },
      axisLine: {
        lineStyle: {
          width: 8,
          color: [[1, getColor('gray-200')]]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: [79],
      detail: {
        show: false
      },
      animationDuration: 2000
    },
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '70%',
      name: 'Support',
      pointer: {
        show: false
      },
      center: ['50%', '50%'],
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: getColor('primary')
        }
      },
      axisLine: {
        lineStyle: {
          width: 8,
          color: [[1, getColor('gray-200')]]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: [85],
      detail: {
        show: false
      },
      animationDuration: 2000
    },
    {
      type: 'gauge',
      name: 'Revenue',
      startAngle: 90,
      endAngle: -270,
      radius: '55%',
      pointer: {
        show: false
      },
      center: ['50%', '50%'],
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: getColor('success')
        }
      },
      axisLine: {
        lineStyle: {
          width: 8,
          color: [[1, getColor('gray-200')]]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: [70],
      detail: {
        show: false
      },
      animationDuration: 2000
    }
  ]
});

const WeeklyGoalsChart = () => {
  const chartRef = useRef(null);
  return (
    <ReactEChartsCore
      ref={chartRef}
      echarts={echarts}
      option={getOptions()}
      style={{ height: '15.625rem' }}
    />
  );
};

export default WeeklyGoalsChart;

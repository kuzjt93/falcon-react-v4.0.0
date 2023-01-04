import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor, getPastDates, rgbaColor } from 'helpers/utils';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import dayjs from 'dayjs';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = () => ({
  color: [getColor('primary'), getColor('gray-200')],
  legend: {
    data: ['Satisfied', 'Dissatisfied'],
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    padding: [0, 0, 0, 0],
    textStyle: {
      color: getColor('gray-700'),
      fontWeight: '500',
      fontSize: '13px'
    },
    left: 0,
    itemGap: 16
  },
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('gray-900') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    data: getPastDates(11).map(date => dayjs(date).format('DD MMM')),
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getColor('gray-600')
    },

    axisLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLabel: {
      color: getColor('gray-600')
    }
  },
  series: [
    {
      name: 'Satisfied',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: [98, 105, 65, 110, 75, 55, 95, 75, 90, 45, 70]
    },
    {
      name: 'Dissatisfied',
      type: 'bar',
      stack: 'two',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3),
          color: getColor('gray-300')
        }
      },
      data: [80, 60, 78, 58, 65, 65, 75, 110, 40, 60, 60]
    }
  ],
  itemStyle: {
    borderRadius: [3, 3, 0, 0]
  },

  barWidth: '13.03px',
  grid: {
    top: '13%',
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  }
});

const SatisfactionSurveyChart = () => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions()}
      style={{ height: '24.625rem', minWidth: '40rem' }}
    />
  );
};

export default SatisfactionSurveyChart;

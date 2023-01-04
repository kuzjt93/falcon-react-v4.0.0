import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { HeatmapChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  getColor,
  getPastDates,
  getRandomNumber,
  rgbaColor
} from 'helpers/utils';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  HeatmapChart,
  CanvasRenderer,
  LegendComponent
]);

const hours = [
  '12 AM',
  '1 AM',
  '2 AM',
  '3 AM',
  '4 AM',
  '5 AM',
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM',
  '10 PM',
  '11 PM'
];

const data = [];
for (let i = 0; i < 24; i += 1) {
  for (let j = 0; j < 7; j += 1) {
    data.push([j, i, getRandomNumber(20, 300)]);
  }
}

const tooltipFormatter = params => {
  return `<div>
        <p class='mb-0 text-600'>${dayjs(params.name).format(
          'MMM DD, YYYY'
        )}</p>
        <div class="d-flex align-items-center">
          <p class="mb-0 text-600">
            ${dayjs()
              .hour(params.data[1])
              .format('hA')} : <span class='text-800 fw-semi-bold'>${
    params.data[2]
  }</span>
          </p>
        </div>
      </div>`;
};

const getOptions = () => ({
  gradientColor: [getColor('info'), getColor('primary')],
  tooltip: {
    position: 'top',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: tooltipFormatter
  },
  xAxis: {
    type: 'category',
    data: getPastDates(7),
    splitArea: {
      show: true
    },
    axisTick: { show: false },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('ddd')
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-400')
      }
    }
  },
  yAxis: {
    position: 'right',
    type: 'category',
    inverse: true,
    data: hours,
    splitArea: {
      show: true
    },
    axisTick: { show: false },
    axisLabel: {
      color: getColor('gray-600'),
      margin: 20,
      padding: [10, 0, 0, 0]
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-400')
      }
    }
  },
  visualMap: {
    type: 'piecewise',
    orient: 'horizontal',
    left: 'left',
    bottom: '3%',
    itemSymbol: 'circle',
    itemWidth: '10px',
    itemHeight: '10px',
    min: 20,
    max: 300,
    splitNumber: 4,
    textGap: 5,
    textStyle: {
      color: getColor('gray-600'),
      fontWeight: 500,
      lineHeight: 1000000
    }
  },
  series: [
    {
      name: 'Users By Time',
      type: 'heatmap',
      data: data,
      label: {
        show: false
      },
      itemStyle: {
        borderColor: getColor('white'),
        borderWidth: 3
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 3,
          shadowColor: rgbaColor(getColor('black'), 0.5)
        }
      }
    }
  ],
  grid: {
    containLabel: true,
    right: '5px',
    left: 0,
    bottom: '15%',
    top: 0
  }
});

const UsersAtTimeChart = () => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions()}
      style={{ height: '24.75rem' }}
    />
  );
};

export default UsersAtTimeChart;

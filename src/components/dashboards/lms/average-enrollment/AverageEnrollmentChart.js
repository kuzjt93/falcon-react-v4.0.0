import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { getColor, rgbaColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  LegendComponent
]);

const tooltipFormatter = params => {
  return params
    .map(
      ({ value, seriesName, borderColor }) =>
        `<div class="dot me-1 fs--2 d-inline-block" style="background-color: ${borderColor}"></div>
              <span class='text-600'>${seriesName}: ${value}</span>`
    )
    .join('<br/>');
};

const getOptions = data => ({
  color: getColor('gray-100'),
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-100'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: tooltipFormatter,
    transitionDuration: 0
  },
  legend: {
    data: ['onSaleCourse', 'regularPaidCourse'],
    show: false
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      data: [
        'launch',
        'week 1',
        'week 2',
        'week 3',
        'week 4',
        'week 5',
        'week 6',
        'week 7',
        'week 8',
        'week 9',
        'week 10',
        'week 11',
        'week 12'
      ],
      boundaryGap: false,
      axisPointer: {
        lineStyle: {
          color: getColor('gray-200'),
          type: 'line'
        }
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: getColor('gray-200'),
          type: 'line'
        }
      },

      axisTick: { show: false },
      axisLabel: {
        color: getColor('gray-500'),
        formatter(value) {
          return value;
        },
        interval: 3,
        margin: 15,
        showMinLabel: true,
        showMaxLabel: false,
        align: 'center'
      }
    },
    {
      type: 'category',
      position: 'bottom',
      data: [
        'launch',
        'week 1',
        'week 2',
        'week 3',
        'week 4',
        'week 5',
        'week 6',
        'week 7',
        'week 8',
        'week 9',
        'week 10',
        'week 11',
        'week 12'
      ],
      boundaryGap: false,
      axisPointer: {
        lineStyle: {
          color: getColor('gray-200'),
          type: 'line'
        }
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: getColor('gray-200'),
          type: 'line'
        }
      },

      axisTick: { show: false },
      axisLabel: {
        color: getColor('gray-500'),
        formatter(value) {
          return value;
        },
        interval: 200,
        margin: 15,
        showMaxLabel: true,
        showMinLabel: false,
        align: 'right'
      }
    }
  ],
  yAxis: {
    type: 'value',
    splitNumber: 3,
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-200'),
        type: 'line'
      }
    },
    boundaryGap: false,
    axisLabel: {
      showMinLabel: false,
      show: true,
      color: getColor('gray-400'),
      formatter: value => `${Math.round((value / 1000) * 10) / 10}k`
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      name: 'On Sale Course',
      type: 'line',
      data: data.onSaleCourse,
      lineStyle: { color: getColor('primary') },
      itemStyle: {
        borderColor: getColor('primary'),
        borderWidth: 2
      },
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        scale: true
      }
    },
    {
      name: 'Regular Paid Course',
      type: 'line',
      data: data.regularPaidCourse,
      lineStyle: { color: getColor('warning'), type: 'dashed' },
      itemStyle: {
        borderColor: getColor('warning'),
        borderWidth: 2
      },
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        scale: true
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('warning'), 0.2)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('warning'), 0)
            }
          ]
        }
      }
    }
  ],
  grid: {
    right: '10px',
    left: '30px',
    bottom: '15%',
    top: '5%'
  }
});

const AverageEnrollmentChart = forwardRef(({ data }, ref) => {
  return (
    <ReactEChartsCore ref={ref} echarts={echarts} option={getOptions(data)} />
  );
});

AverageEnrollmentChart.propTypes = {
  data: PropTypes.shape({
    onSaleCourse: PropTypes.array,
    regularPaidCourse: PropTypes.array
  })
};

export default AverageEnrollmentChart;

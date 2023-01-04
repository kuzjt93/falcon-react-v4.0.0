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
import { getColor, getDates, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const dates = month => {
  return getDates(
    dayjs().month(month).date(1),
    dayjs()
      .month(Number(month) + 1)
      .date(0),
    1000 * 60 * 60 * 24 * 3
  );
};

const getOptions = (newData, returningData, month) => ({
  title: {
    text: 'Customers',
    textStyle: {
      fontWeight: 500,
      fontSize: 13,
      fontFamily: 'poppins',
      color: getColor('gray-900')
    }
  },
  legend: {
    show: false,
    data: ['New', 'Returning']
  },

  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-100'),
    color: getColor('dark'),
    // textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: tooltipFormatter
  },
  xAxis: {
    type: 'category',
    data: dates(month),
    boundaryGap: false,
    axisPointer: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'solid'
      }
    },
    axisTick: { show: false },
    axisLabel: {
      color: getColor('gray-400'),
      formatter(value, index) {
        if (index === 0) {
          return `${dayjs(value).format('MMM DD')}`;
        }
        return `${dayjs(value).format('DD')}`;
      },
      margin: 15
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisLabel: {
      color: getColor('gray-400'),
      margin: 15
    }
  },
  series: [
    {
      name: 'New',
      type: 'line',
      data: newData,
      lineStyle: { color: getColor('primary') },
      itemStyle: {
        borderColor: getColor('primary'),
        borderWidth: 2
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
              color: rgbaColor(getColor('primary'), 0.2)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('primary'), 0.01)
            }
          ]
        }
      },
      symbol: 'none',
      emphasis: {
        scale: true
      }
    },
    {
      name: 'Returning',
      type: 'line',
      data: returningData,
      lineStyle: { color: getColor('warning') },
      itemStyle: {
        borderColor: getColor('warning'),
        borderWidth: 2
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
              color: rgbaColor(getColor('warning'), 0.01)
            }
          ]
        }
      },
      symbol: 'none',
      emphasis: {
        scale: true
      }
    }
  ],

  grid: { right: 7, left: 0, bottom: 5, top: 50, containLabel: true }
});

const ReturningCustomerChart = forwardRef(
  ({ newData, returningData, month }, ref) => {
    return (
      <>
        <ReactEChartsCore
          ref={ref}
          echarts={echarts}
          option={getOptions(newData, returningData, month)}
          style={{ height: '20rem' }}
        />
      </>
    );
  }
);

ReturningCustomerChart.propTypes = {
  newData: PropTypes.array.isRequired,
  returningData: PropTypes.array.isRequired,
  month: PropTypes.number.isRequired
};

export default ReturningCustomerChart;

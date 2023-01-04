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
import { getColor, getPastDates } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = data => ({
  color: [getColor('primary'), getColor('success'), getColor('info')],
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
    data: getPastDates(30).map(date => dayjs(date).format('DD MMM, YYYY')),
    boundaryGap: false,
    silent: true,
    axisPointer: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisTick: {
      show: true,
      length: 20,
      lineStyle: {
        color: getColor('gray-200')
      },

      interval: 5
    },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('MMM DD'),
      align: 'left',
      fontSize: 11,
      padding: [0, 0, 0, 5],
      interval: 5
    }
  },
  yAxis: {
    type: 'value',
    position: 'right',
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    axisLabel: {
      show: true,
      color: getColor('gray-600'),
      formatter: value => `${Math.round((value / 1000) * 10) / 10}k`
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: 'line',
      name: 'Mobile',
      data: data.mobile,
      showSymbol: false,
      symbol: 'circle',
      itemStyle: {
        borderColor: getColor('primary'),
        borderWidth: 2
      },
      lineStyle: {
        color: getColor('primary')
      },
      symbolSize: 2
    },
    {
      type: 'line',
      name: 'Desktop',
      data: data.desktop,
      showSymbol: false,
      symbol: 'circle',
      itemStyle: {
        borderColor: getColor('success'),
        borderWidth: 2
      },
      lineStyle: {
        color: getColor('success')
      },
      symbolSize: 2
    },
    {
      type: 'line',
      name: 'Tablet',
      data: data.tablet,
      showSymbol: false,
      symbol: 'circle',
      itemStyle: {
        borderColor: getColor('info'),
        borderWidth: 2
      },
      lineStyle: {
        color: getColor('info')
      },
      symbolSize: 2
    }
  ],
  grid: {
    containLabel: true,
    right: '5px',
    left: 0,
    bottom: 0,
    top: 10
  }
});

const ActiveUsersChart = ({ data }) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(data)}
      style={{ height: '16.25rem' }}
    />
  );
};

ActiveUsersChart.propTypes = {
  data: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array,
    tablet: PropTypes.array
  })
};

export default ActiveUsersChart;

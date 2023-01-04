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
  color: getColor('white'),
  title: {
    text: 'Bounce Rate',
    padding: [5, 0, 0, 0],
    textStyle: {
      color: getColor('gray-900'),
      fontSize: 13,
      fontWeight: 600
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
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
    axisPointer: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: getColor('gray-400')
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('MMM DD'),
      fontSize: 11
    }
  },
  yAxis: {
    type: 'value',
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    axisLabel: {
      show: true,
      color: getColor('gray-600'),
      formatter: value => `${value}%`,
      margin: 15
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: 'line',
      name: 'Rate',
      data,
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
    }
  ],
  grid: { right: '10px', left: '40px', bottom: '10%', top: '13%' }
});

const BounceRateChart = ({ data }) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(data)}
      style={{ height: '20rem' }}
    />
  );
};

BounceRateChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default BounceRateChart;

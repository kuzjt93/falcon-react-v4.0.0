import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = data => ({
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    axisPointer: {
      type: 'none'
    },
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0
  },
  xAxis: {
    type: 'category',
    data: data[0],
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => value.substring(0, 3)
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-400')
      }
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        color: getColor('gray-200')
      }
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => `${value}%`,
      fontWeight: 500,
      padding: [3, 0, 0, 0],
      margin: 12
    },
    axisLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      data: data[1],
      itemStyle: {
        borderRadius: [3, 3, 0, 0],
        color: getColor('primary')
      },
      barWidth: 15
    }
  ],
  grid: {
    containLabel: true,
    right: 0,
    left: 0,
    bottom: 0,
    top: 15
  }
});

const UsersByCountryChart = ({ data }) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(data)}
      style={{ height: '13.125rem' }}
    />
  );
};

UsersByCountryChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default UsersByCountryChart;

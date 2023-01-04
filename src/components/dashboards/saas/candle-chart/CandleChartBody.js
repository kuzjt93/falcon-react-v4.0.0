import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { CandlestickChart } from 'echarts/charts';
import {
  DataZoomComponent,
  DataZoomInsideComponent,
  GridComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

echarts.use([
  CandlestickChart,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  DataZoomInsideComponent
]);

const splitData = rawData => {
  let categoryData = [];
  let values = [];

  rawData.forEach(item => {
    categoryData.push(item.slice(0, 1)[0]);
    values.push(item.slice(1));
  });
  return { categoryData, values };
};

const getOptions = (data, zoomStart, zoomEnd) => ({
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1
  },
  xAxis: {
    type: 'category',
    data: data.categoryData,
    scale: true,
    splitLine: { show: false },
    splitNumber: 10,
    min: 'dataMin',
    max: 'dataMax',
    boundaryGap: true,
    axisPointer: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
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
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('MMM D'),
      margin: 15,
      fontWeight: 500
    }
  },
  yAxis: {
    scale: true,
    position: 'right',
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-200'),
        type: 'dashed'
      }
    },
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getColor('gray-600'),
      margin: 15,
      fontWeight: 500
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  dataZoom: [
    {
      type: 'inside',
      start: zoomStart,
      end: zoomEnd
    }
  ],

  series: [
    {
      name: 'candlestick',
      type: 'candlestick',
      data: data.values,
      itemStyle: {
        color: getColor('warning'),
        color0: getColor('primary'),
        borderColor: getColor('warning'),
        borderColor0: getColor('primary')
      }
    }
  ],
  grid: {
    right: 23,
    left: 12,
    bottom: 0,
    top: '20px',
    containLabel: true
  }
});

const CandleChartBody = forwardRef(
  ({ data, zoomStart, zoomEnd, ...rest }, ref) => {
    const chartData = splitData(data);

    return (
      <ReactEChartsCore
        ref={ref}
        echarts={echarts}
        option={getOptions(chartData, zoomStart, zoomEnd)}
        {...rest}
      />
    );
  }
);

CandleChartBody.propTypes = {
  data: PropTypes.array.isRequired,
  zoomStart: PropTypes.number.isRequired,
  zoomEnd: PropTypes.number.isRequired
};

export default CandleChartBody;

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent,
  DatasetComponent
]);

const getOption = data => ({
  color: [getColor('primary'), getColor('gray-300')],
  dataset: { source: data },
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: function (params) {
      return `<div className="fw-semi-bold">${
        params.seriesName
      }</div><div className="fs--1 text-600"><strong>${params.name}:</strong> ${
        params.value[params.componentIndex + 1]
      }</div>`;
    }
  },
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    axisLabel: { color: getColor('gray-400') },
    axisLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisTick: false,
    boundaryGap: true
  },
  yAxis: {
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLine: { show: false },
    axisLabel: {
      color: getColor('gray-400'),
      formatter: value => `${value} hr`
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: '12%',
      barGap: '30%',
      label: { show: false },
      z: 10,
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        color: getColor('primary')
      }
    },
    {
      type: 'bar',
      barWidth: '12%',
      barGap: '30%',
      label: { show: false },
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
        color: getColor('gray-300')
      }
    }
  ],
  grid: { right: '0', left: '40px', bottom: '10%', top: '15%' }
});

const ReportForThisWeekChart = forwardRef(({ data }, ref) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={ref}
      option={getOption(data)}
      style={{ height: '17.625rem' }}
    />
  );
});

ReportForThisWeekChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default ReportForThisWeekChart;

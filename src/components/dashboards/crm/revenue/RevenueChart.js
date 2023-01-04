import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, getPastDates } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent,
  BarChart
]);

const tooltipFormatter = params => {
  return `<div class="card">
              <div class="card-header bg-light py-2">
                <h6 class="text-600 mb-0">${params[0].axisValue}</h6>
              </div>
            <div class="card-body py-2">
              <h6 class="text-600 fw-normal">
                <span class="dot me-1 d-inline-block bg-primary"></span>
                Revenue: 
                <span class="fw-medium">$${params[0].data}</span>
              </h6>
              <h6 class="text-600 mb-0 fw-normal"> 
                <span class="dot me-1 d-inline-block bg-warning"></span>
                Revenue Goal: 
                <span class="fw-medium">$${params[1].data}</span>
              </h6>
            </div>
          </div>`;
};

const getOptions = (data1, data2) => ({
  color: getColor('white'),
  tooltip: {
    trigger: 'axis',
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatter
  },
  xAxis: {
    type: 'category',
    data: getPastDates(25).map(date => dayjs(date).format('DD MMM, YYYY')),
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('MMM DD'),
      align: 'left',
      fontSize: 11,
      padding: [0, 0, 0, 5],
      showMaxLabel: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    boundaryGap: true
  },
  yAxis: {
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      name: 'Revenue',
      data: data1,
      lineStyle: {
        color: getColor('primary')
      },
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
        color: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          color: getColor('primary')
        }
      }
    },
    {
      type: 'line',
      name: 'Revenue Goal',
      data: data2,
      symbol: 'circle',
      symbolSize: 6,
      animation: false,
      itemStyle: {
        color: getColor('warning')
      },
      lineStyle: {
        type: 'dashed',
        width: 2,
        color: getColor('warning')
      }
    }
  ],
  grid: { right: 5, left: 5, bottom: '8%', top: '5%' }
});

const RevenueChart = ({ data }) => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(data[0], data[1])}
      style={{ height: '20rem' }}
    />
  );
};

RevenueChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default RevenueChart;

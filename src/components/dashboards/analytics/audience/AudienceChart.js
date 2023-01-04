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
import { getColor, getPastDates, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const tooltipFormatter = params => {
  const percentage =
    ((params[0].value - params[1].value) / params[1].value) * 100;
  const perTemp = `
    <div class="d-flex align-items-center ms-2">
      <h6 class="fs--2 mb-0 ms-1 fw-semi-bold"> 
        <span style="color:${
          percentage < 0 ? getColor('danger') : getColor('success')
        };">${percentage < 0 ? '&#9660' : '&#9650'}</span> 
        ${Math.abs(percentage).toFixed(2)} %</h6>
    </div>
  `;

  const currentDate = new Date(params[0].axisValue);
  const prevDate = new Date(new Date().setDate(currentDate.getDate() - 7));
  return `<div>
        <p class='mb-0 fs--2 text-600'>${dayjs(params[0].axisValue).format(
          'MMM DD'
        )} vs ${dayjs(prevDate).format('MMM DD')}</p>
        <div class="d-flex align-items-center">
          <p class='mb-0 text-600 fs--1'>
            Users: <span class='text-800 fw-semi-bold fs--1'>${
              params[0].data
            }</span>
          </p>
          ${perTemp}
        </div>
      </div>`;
};

const getOptions = data => ({
  color: getColor('white'),
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatter
  },
  xAxis: {
    type: 'category',
    data: getPastDates(7),
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => dayjs(value).format('MMM DD'),
      align: 'left',
      fontSize: 11,
      padding: [0, 0, 0, 5],
      showMaxLabel: false
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    axisTick: {
      show: true,
      length: 20,
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    boundaryGap: false
  },
  yAxis: {
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    axisLine: { show: false },
    axisLabel: { color: getColor('gray-600') }
  },
  series: [
    {
      type: 'line',
      data: data[0],
      showSymbol: false,
      symbol: 'circle',
      animation: false,
      itemStyle: {
        borderColor: getColor('primary'),
        borderWidth: 2
      },
      lineStyle: {
        color: getColor('primary')
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
              color: rgbaColor(getColor('primary'), 0)
            }
          ]
        }
      }
    },
    {
      type: 'line',
      data: data[1],
      symbol: 'none',
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getColor('info')
      }
    }
  ],
  grid: {
    containLabel: true,
    right: '5px',
    left: 0,
    bottom: 0,
    top: '10px'
  }
});

const AudienceChart = ({ data }) => {
  const chartRef = useRef(null);

  return (
    <ReactEChartsCore
      ref={chartRef}
      echarts={echarts}
      option={getOptions(data)}
      style={{ height: '21.25rem' }}
    />
  );
};

AudienceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default AudienceChart;

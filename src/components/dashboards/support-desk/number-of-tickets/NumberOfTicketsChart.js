import React, { forwardRef } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import * as echarts from 'echarts/core';
import { getColor, getPastDates, rgbaColor } from 'helpers/utils';
import AppContext from 'context/Context';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useContext } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const getOption = (data, isDark) => ({
  color: [
    getColor('primary'),
    isDark ? '#1E4C88' : '#94BCF1',
    isDark ? '#1A3A64' : '#C0D8F7',
    isDark ? '#225FAE' : '#6AA3ED'
  ],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('gray-900') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return `<div>${params.seriesName}</div>
      <div class="fs--1 d-flex flex-between-center">
      <div>
      <div class="dot me-1 fs--2 d-inline-block" style="background-color:${
        params.borderColor ? params.borderColor : params.color
      }"></div>
        <span>${dayjs(params.name).format('MMM DD')} : </span> 
        </div>
      <strong>${params.value}</strong>
      </div>`;
    }
  },
  legend: {
    show: false
  },
  xAxis: {
    data: getPastDates(6),
    splitLine: { show: false },
    splitArea: { show: false },
    axisLabel: {
      formatter: value => dayjs(value).format('MMM DD'),
      color: getColor('gray-600')
    },
    axisLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLabel: {
      color: getColor('gray-600')
    }
  },
  series: [
    {
      name: 'On Hold Tickets',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[0]
    },
    {
      name: 'Open Tickets',
      type: 'bar',
      stack: 'two',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[1]
    },
    {
      name: 'Due Tickets',
      type: 'bar',
      stack: 'three',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[2]
    },
    {
      name: 'Unassigned Tickets',
      type: 'bar',
      stack: 'four',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[3]
    }
  ],
  itemStyle: {
    borderRadius: [3, 3, 0, 0]
  },

  barWidth: '12px',
  grid: {
    top: '10%',
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  }
});

const NumberOfTicketsChart = forwardRef(({ data }, ref) => {
  const { config } = useContext(AppContext);
  const { isDark } = config;
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption(data, isDark)}
      ref={ref}
      style={{ height: '18.5rem', minWidth: '40rem' }}
    />
  );
});

NumberOfTicketsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default NumberOfTicketsChart;

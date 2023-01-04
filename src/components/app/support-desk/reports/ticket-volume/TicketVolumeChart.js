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
import { getColor, getPastDates, getPosition } from 'helpers/utils';
import AppContext from 'context/Context';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { tooltipFormatter } from 'helpers/echart-utils';

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
    isDark ? '#235FAD' : '#6AA2EC',
    isDark ? '#1C4477' : '#AACAF4',
    isDark ? '#152C48' : '#DFEBFB'
  ],
  legend: {
    data: [
      'On Hold Tickets',
      'Open Tickets',
      'Due Tickets',
      'Unassigned Tickets'
    ],
    show: false
  },
  xAxis: {
    type: 'category',
    data: getPastDates(10).map(date => dayjs(date).format('MMM DD')),
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getColor('gray-600')
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: getColor('gray-600')
    }
  },
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
    transitionDuration: 0,
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    },
    formatter: tooltipFormatter
  },

  series: [
    {
      name: 'On Hold Tickets',
      type: 'bar',
      stack: 'total',
      data: [8, 6, 5, 12, 9, 6, 9, 6, 4, 7],
      emphasis: {
        itemStyle: {
          color: getColor('primary')
        }
      }
    },
    {
      name: 'Open Tickets',
      type: 'bar',
      stack: 'total',
      data: [15, 10, 7, 7, 5, 6, 15, 10, 7, 12],
      emphasis: {
        itemStyle: {
          color: isDark ? '#2567BD' : '#5595E9'
        }
      }
    },
    {
      name: 'Due Tickets',
      type: 'bar',
      stack: 'total',
      data: [5, 4, 4, 6, 6, 8, 7, 4, 3, 5],
      emphasis: {
        itemStyle: {
          color: isDark ? '#205396' : '#7FB0EF'
        }
      }
    },
    {
      name: 'Unassigned Tickets',
      type: 'bar',
      stack: 'total',
      data: [6, 3, 6, 4, 12, 7, 5, 3, 2, 4],
      itemStyle: {
        borderRadius: [2, 2, 0, 0]
      },
      emphasis: {
        itemStyle: {
          color: isDark ? '#1A3F6F' : '#AACAF4'
        }
      }
    }
  ],

  grid: {
    right: '0px',
    left: '23px',
    bottom: '6%',
    top: '10%'
  }
});

const TicketVolumeChart = forwardRef(({ data }, ref) => {
  const { config } = useContext(AppContext);
  const { isDark } = config;
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption(data, isDark)}
      ref={ref}
      style={{ height: '21.81rem' }}
    />
  );
});

TicketVolumeChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default TicketVolumeChart;

import React, { useContext, forwardRef } from 'react';
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
import { getColor, rgbaColor } from 'helpers/utils';
import AppContext from 'context/Context';
import PropTypes from 'prop-types';

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
    getColor('info'),
    isDark ? '#229BD2' : '#73D3FE',
    isDark ? '#195979' : '#A9E4FF'
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
    }
  },
  legend: {
    show: false
  },
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getColor('gray-600'),
      margin: 8
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
    },
    position: 'right'
  },
  series: [
    {
      name: 'Urgent',
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
      name: 'High',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[1]
    },
    {
      name: 'Medium',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[2]
    },
    {
      name: 'Low',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getColor('dark'), 0.3)
        }
      },
      data: data[3],
      itemStyle: {
        borderRadius: [2, 2, 0, 0]
      }
    }
  ],

  barWidth: '15px',
  grid: {
    top: '8%',
    bottom: 18,
    left: 0,
    right: 2,
    containLabel: true
  }
});

const UnresolvedTicktsChart = forwardRef(({ data }, ref) => {
  const { config } = useContext(AppContext);

  const { isDark } = config;
  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={ref}
      option={getOption(data, isDark)}
      style={{ height: '21rem' }}
    />
  );
});

UnresolvedTicktsChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default UnresolvedTicktsChart;

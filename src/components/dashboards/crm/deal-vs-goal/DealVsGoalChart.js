import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPosition, tooltipFormatter } from 'helpers/echart-utils';
import { getColor, getPastDates, rgbaColor } from 'helpers/utils';
import { useBreakpoints } from 'hooks/useBreakpoints';
import PropTypes from 'prop-types';
import React from 'react';

const getOptions = data => ({
  color: [getColor('primary'), getColor('warning')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: tooltipFormatter,
    transitionDuration: 0,
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    }
  },

  legend: {
    left: 'left',
    top: -5,
    data: ['Closed Amount', 'Revenue Goal'],
    itemWidth: 10,
    itemHeight: 10,
    icon: 'circle',
    inactiveColor: getColor('gray-400'),
    textStyle: { color: getColor('gray-700') },
    itemGap: 20
  },
  xAxis: {
    type: 'category',
    name: 'Closed Date',
    nameGap: 50,
    nameLocation: 'center',
    offset: 0,
    nameTextStyle: {
      color: getColor('gray-700')
    },
    data: getPastDates(9),
    boundaryGap: false,
    axisPointer: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: rgbaColor('#000', 0.01),
        type: 'dashed'
      }
    },
    axisTick: { show: false },
    axisLabel: {
      color: getColor('gray-400'),
      formatter: value => dayjs(value).format('DD MMM, YY'),
      margin: 20
    }
  },
  yAxis: {
    type: 'value',
    name: 'Closed Amount',
    nameGap: 85,
    nameLocation: 'middle',
    nameTextStyle: {
      color: getColor('gray-700')
    },
    splitNumber: 3,
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-200')
      }
    },
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getColor('gray-400'),
      formatter: function (value) {
        return `$${value}`;
      },
      margin: 15
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: 'line',
      name: 'Closed Amount',
      data: data.closedAmount,
      symbolSize: 5,
      symbol: 'circle',
      smooth: false,
      lineStyle: { color: rgbaColor(getColor('primary')) },
      itemStyle: {
        borderColor: rgbaColor(getColor('primary'), 0.6),
        borderWidth: 2
      },
      emphasis: {
        scale: true
      }
    },
    {
      type: 'line',
      name: 'Revenue Goal',
      data: data.revenueGoal,
      symbolSize: 5,
      symbol: 'circle',
      smooth: false,
      emphasis: {
        scale: true
      },
      lineStyle: { color: rgbaColor(getColor('warning')) },
      itemStyle: {
        borderColor: rgbaColor(getColor('warning'), 0.6),
        borderWidth: 2
      }
    }
  ],
  grid: {
    right: '5px',
    left: 45,
    bottom: 30,
    top: 30,
    containLabel: true
  }
});

const DealVSGoalChart = ({ data }) => {
  const { breakpoints } = useBreakpoints();
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(data)}
      style={{ height: breakpoints.up('xxl') ? '14rem' : '15rem' }}
    />
  );
};

DealVSGoalChart.propTypes = {
  data: PropTypes.shape({
    closedAmount: PropTypes.array.isRequired,
    revenueGoal: PropTypes.array.isRequired
  }).isRequired
};

export default DealVSGoalChart;

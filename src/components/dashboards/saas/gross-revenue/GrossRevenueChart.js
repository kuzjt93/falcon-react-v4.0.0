import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { getColor, getDates } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

echarts.use([LineChart, TooltipComponent, GridComponent, LegendComponent]);

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const dates = month => {
  return getDates(
    dayjs().month(months.indexOf(month)).date(1),
    dayjs()
      .month(Number(months.indexOf(month)) + 1)
      .date(0),
    1000 * 60 * 60 * 24 * 3
  );
};

const tooltipFormatter = (params, selectedMonth, previousMonth) => {
  let tooltipItem = ``;
  params.forEach(el => {
    const currentDate = dayjs(el.axisValue);
    tooltipItem =
      tooltipItem +
      `<h6 class="fs--1 text-700 d-flex align-items-center">
        <div class="dot me-2" style="background-color:${el.borderColor}"></div>
        ${
          el.seriesName === 'prevMonth' ? previousMonth : selectedMonth
        } ${currentDate.format('DD')} : ${el.value}
      </h6>`;
  });
  return `<div class='ms-1'>
            ${tooltipItem}
          </div>`;
};

const getOption = (data, selectedMonth, previousMonth) => ({
  title: {
    text: 'Sales over time',
    textStyle: {
      fontWeight: 500,
      fontSize: 13,
      fontFamily: 'poppins'
    }
  },
  color: getColor('white'),
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: params => tooltipFormatter(params, selectedMonth, previousMonth),
    transitionDuration: 0
  },
  legend: {
    show: false,
    data: ['currentMonth', 'prevMonth']
  },
  xAxis: {
    type: 'category',
    data: dates(selectedMonth),
    boundaryGap: false,
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
      color: getColor('gray-400'),
      margin: 15,
      formatter: value => dayjs(value).format('MMM DD')
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getColor('gray-300')
      }
    },
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getColor('gray-400'),
      margin: 15
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      name: 'prevMonth',
      type: 'line',
      data: data[previousMonth],
      lineStyle: { color: getColor('gray-300') },
      itemStyle: {
        borderColor: getColor('gray-300'),
        borderWidth: 2
      },
      symbol: 'none',
      smooth: false,
      emphasis: {
        scale: true
      }
    },
    {
      name: 'currentMonth',
      type: 'line',
      data: data[selectedMonth],
      lineStyle: { color: getColor('primary') },
      itemStyle: {
        borderColor: getColor('primary'),
        borderWidth: 2
      },
      symbol: 'none',
      smooth: false,
      emphasis: {
        scale: true
      }
    }
  ],
  grid: { right: '8px', left: '40px', bottom: '15%', top: '20%' }
});

const GrossRevenueChart = forwardRef(
  ({ data, selectedMonth, previousMonth, ...rest }, ref) => {
    return (
      <ReactEChartsCore
        echarts={echarts}
        ref={ref}
        option={getOption(data, selectedMonth, previousMonth)}
        {...rest}
      />
    );
  }
);

GrossRevenueChart.propTypes = {
  data: PropTypes.shape({
    Jan: PropTypes.array.isRequired,
    Feb: PropTypes.array.isRequired,
    Mar: PropTypes.array.isRequired,
    Apr: PropTypes.array.isRequired,
    May: PropTypes.array.isRequired,
    Jun: PropTypes.array.isRequired,
    Jul: PropTypes.array.isRequired,
    Aug: PropTypes.array.isRequired,
    Sep: PropTypes.array.isRequired,
    Oct: PropTypes.array.isRequired,
    Nov: PropTypes.array.isRequired,
    Dec: PropTypes.array.isRequired
  }).isRequired,
  selectedMonth: PropTypes.string,
  previousMonth: PropTypes.string
};

export default GrossRevenueChart;

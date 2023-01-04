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
import { getColor, getRandomNumber, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const data = [
  921, 950, 916, 913, 909, 962, 926, 936, 977, 976, 999, 981, 998, 1000, 900,
  906, 973, 911, 994, 982, 917, 972, 952, 963, 991
];
const axisData = Array.from(Array(25).keys());

const tooltipFormatter = params => {
  return `
    <div>
      <h6 class="fs--1 text-700 mb-0 d-flex align-items-center">
      <div class="dot me-1" style="background-color:${getColor(
        'primary'
      )}"></div>
        Users : ${params[0].value}
      </h6>
    </div>
  `;
};

const getOptions = () => ({
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
    formatter: tooltipFormatter
  },
  xAxis: {
    type: 'category',

    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    boundaryGap: [0.2, 0.2],
    data: axisData
  },
  yAxis: {
    type: 'value',
    scale: true,
    boundaryGap: false,
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    },
    min: 500,
    max: 1100
  },
  series: [
    {
      type: 'bar',
      barCategoryGap: '12%',
      data,
      itemStyle: {
        color: rgbaColor('#fff', 0.3)
      }
    }
  ],
  grid: { right: '0px', left: '0px', bottom: 0, top: 0 }
});

const RealTimeUsersChart = ({ setUserCount }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const rndData = getRandomNumber(900, 1000);
      data.shift();
      data.push(rndData);
      axisData.shift();
      axisData.push(getRandomNumber(100, 500));

      setUserCount(rndData);

      chartRef.current.getEchartsInstance().setOption({
        xAxis: {
          data: axisData
        },
        series: [
          {
            data
          }
        ]
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ReactEChartsCore
      ref={chartRef}
      echarts={echarts}
      option={getOptions()}
      style={{ height: '9.375rem' }}
    />
  );
};

RealTimeUsersChart.propTypes = {
  setUserCount: PropTypes.func
};

export default RealTimeUsersChart;

import FalconComponentCard from 'components/common/FalconComponentCard';
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
import { tooltipFormatter } from 'helpers/echart-utils';
import { getColor } from 'helpers/utils';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const data = [
    ['2021-06-05', 116],
    ['2021-06-06', 129],
    ['2021-06-07', 135],
    ['2021-06-08', 86],
    ['2021-06-09', 73],
    ['2021-06-10', 85],
    ['2021-06-11', 73],
    ['2021-06-12', 68],
    ['2021-06-13', 92],
    ['2021-06-14', 130],
    ['2021-06-15', 245],
    ['2021-06-16', 139],
    ['2021-06-17', 115],
    ['2021-06-18', 111],
    ['2021-06-19', 309],
    ['2021-06-20', 206],
    ['2021-06-21', 137],
    ['2021-06-22', 128],
    ['2021-06-23', 85],
    ['2021-06-24', 94],
    ['2021-06-25', 71],
    ['2021-06-26', 106],
    ['2021-06-27', 84],
    ['2021-06-28', 93],
    ['2021-06-29', 85],
    ['2021-06-30', 73],
    ['2021-07-01', 83],
    ['2021-07-02', 125],
    ['2021-07-03', 107],
    ['2021-07-04', 82],
    ['2021-07-05', 44],
    ['2021-07-06', 72],
    ['2021-07-07', 106],
    ['2021-07-08', 107],
    ['2021-07-09', 66],
    ['2021-07-10', 91],
    ['2021-07-11', 92],
    ['2021-07-12', 113],
    ['2021-07-13', 107],
    ['2021-07-14', 131],
    ['2021-07-15', 111],
    ['2021-07-16', 64],
    ['2021-07-17', 69],
    ['2021-07-18', 88],
    ['2021-07-19', 77],
    ['2021-07-20', 83],
    ['2021-07-21', 111],
    ['2021-07-22', 57],
    ['2021-07-23', 55],
    ['2021-07-24', 60]
  ];
  
  const dateList = data.map(function (item) {
    return item[0];
  });

  const valueList = data.map(function (item) {
    return item[1];
  });
  
  const getOption = () => ({
    visualMap: {
        show: false,
        type: 'continuous',
        dimension: 0,
        min: 0,
        max: dateList.length - 1,
        color: [getColor('danger'), getColor('warning')]
      },
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
        data: dateList,
        axisLabel: {
          formatter: value => dayjs(value).format('MMM DD'),
          color: getColor('gray-500'),
          margin: 15
        },
        axisLine: {
          lineStyle: {
            color: getColor('gray-300'),
            type: 'solid'
          }
        },
        axisPointer: {
          lineStyle: {
            color: getColor('gray-300')
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          color: getColor('gray-500'),
          margin: 15
        },
        splitLine: {
          lineStyle: {
            color: getColor('gray-200'),
            type: 'dashed'
          }
        }
      },
      grid: { right: '3%', left: '8%', bottom: '10%', top: '5%' },
      series: {
        name: 'Total',
        type: 'line',
        showSymbol: false,
        symbolSize: 10,
        symbol: 'circle',
        data: valueList,
        itemStyle: {
          color: getColor('white'),
          borderWidth: 2
        }
      }
  });
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const LineGradientChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Line gradient chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          dayjs,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default LineGradientChart;

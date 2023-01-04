import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
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
import PropTypes from 'prop-types';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

  const getOption = () => ({
     tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        formatter: tooltipFormatter,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: {
          lineStyle: {
            color: getColor('gray-300'),
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: getColor('gray-400'),
          formatter: value => value.substring(0, 3),
          margin: 15
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          color: getColor('gray-400'),
          margin: 15
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: getColor('gray-200')
          }
        },
        axisTick: { show: false },
        axisLine: { show: false },
        min: 600
      },
      series: [
        {
          type: 'bar',
          name: 'Total',
          data,
          lineStyle: { color: getColor('primary') },
          itemStyle: {
            color: getColor('primary'),
            borderRadius: [3, 3, 0, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          emphasis: {
            scale: true
          }
        }
      ],
      grid: { right: '3%', left: '10%', bottom: '10%', top: '5%' }
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

const BasicBarChart = ({ title }) => {
  return (
    <FalconComponentCard className="h-100">
      <FalconComponentCard.Header title={title} light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

BasicBarChart.propTypes = {
  title: PropTypes.string
};

export default BasicBarChart;

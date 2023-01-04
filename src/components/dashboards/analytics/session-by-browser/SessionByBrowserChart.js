import ReactEChartsCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const data = [
  { value: 50.3, name: 'Chrome' },
  { value: 20.6, name: 'Safari' },
  { value: 30.1, name: 'Mozilla' }
];

const getOptions = () => ({
  color: [getColor('primary'), getColor('success'), getColor('info')],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: params =>
      `<strong>${params.data.name}:</strong> ${params.data.value}%`
  },

  legend: { show: false },
  series: [
    {
      type: 'pie',
      radius: ['100%', '65%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderWidth: 2,
        borderColor: getColor('gray-100')
      },
      label: {
        show: false
      },
      emphasis: {
        scale: false
      },
      data
    }
  ]
});

const SessionByBrowserChart = () => {
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions()}
      style={{ height: 200 }}
    />
  );
};

export default SessionByBrowserChart;

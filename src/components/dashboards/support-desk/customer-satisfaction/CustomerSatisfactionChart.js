import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor, rgbaColor } from 'helpers/utils';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { useContext } from 'react';
import AppContext from 'context/Context';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const getOption = isDark => ({
  legend: {
    left: 'center',
    bottom: 22,
    itemWidth: 12,
    itemHeight: 12,
    borderRadius: 0,
    icon: 'circle',
    inactiveColor: getColor('gray-400'),
    inactiveBorderColor: 'transparent',
    textStyle: {
      color: getColor('gray-600'),
      fontSize: 12,
      fontFamily: 'Poppins',
      fontWeight: '500'
    },
    itemGap: 16
  },
  series: [
    {
      type: 'pie',
      radius: '70%',
      label: {
        show: false
      },
      center: ['50%', '45%'],
      itemStyle: {
        borderWidth: 2,
        borderColor: isDark ? '#121E2D' : getColor('gray-100')
      },
      data: [
        {
          value: 1100,
          name: 'Positive',
          itemStyle: {
            color: getColor('primary')
          }
        },
        {
          value: 550,
          name: 'Nagative',
          itemStyle: {
            color: rgbaColor(getColor('primary'), 0.5)
          }
        }
      ]
    }
  ],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    }
  }
});

const CustomerSatisfactionChart = () => {
  const { config } = useContext(AppContext);
  const { isDark } = config;
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption(isDark)}
      className="h-100 w-100"
    />
  );
};

export default CustomerSatisfactionChart;

import React from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';
import { getColor, rgbaColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = () => ({
  series: [
    {
      type: 'line',
      data: [8, 15, 12, 14, 18, 12, 12, 25, 13, 12, 10, 13, 35],
      color: getColor('warning'),
      areaStyle: {
        color: {
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('warning'), 0.23)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('warning'), 0.04)
            }
          ]
        }
      }
    }
  ],

  grid: { bottom: '-10px', right: 0 }
});

const AvgCallDurationChart = () => {
  return (
    <BasicECharts
      echarts={echarts}
      options={getOptions()}
      style={{ height: '3rem', width: '12rem' }}
    />
  );
};

export default AvgCallDurationChart;

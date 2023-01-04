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
import { getColor, rgbaColor } from 'helpers/utils';
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
  let xAxisData = [];
  let data1 = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];

  for (let i = 0; i < 10; i += 1) {
    xAxisData.push('Class' + (i + 1));
    data1.push((Math.random() * 2).toFixed(2));
    data2.push((Math.random() * 5).toFixed(2));
    data3.push((Math.random() + 0.3).toFixed(2));
    data4.push(-Math.random().toFixed(2));
  }

  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: rgbaColor(getColor('dark'), 0.3)
    }
  };

  const getOption = () => ({
      color: [
        getColor('primary'),
        getColor('info'),
        getColor('warning'),
        getColor('danger')
      ],
      legend: {
        data: ['Bar1', 'Bar2', 'Bar3', 'Bar4'],
        textStyle: {
          color: getColor('gray-700')
        },
        left: 0
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          }
        },
        iconStyle: {
          borderColor: getColor('gray-700'),
          borderWidth: 1
        }
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        data: xAxisData,
        splitLine: { show: false },
        splitArea: { show: false },

        axisLabel: {
          color: getColor('gray-600')
        },

        axisLine: {
          lineStyle: {
            color: getColor('gray-400')
          }
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: getColor('gray-200')
          }
        },
        axisLabel: {
          color: getColor('gray-600')
        }
      },
      series: [
        {
          name: 'Bar1',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: 'Bar2',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: 'Bar3',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: 'Bar4',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data4
        }
      ],
      grid: {
        top: '10%',
        bottom: 10,
        left: 5,
        right: 7,
        containLabel: true
      }
    });
    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '21.88rem' }}
      />
    );
  }
`;

const StackedChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header title="Stacked chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          rgbaColor
        }}
      />
    </FalconComponentCard>
  );
};

export default StackedChart;

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
import { getColor } from 'helpers/utils';
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
  let data = Array.from(Array(7).keys()).map(() => Math.round(Math.random() * 200));
  const chartRef = useRef(null);

  const run = () => {
    data = data.map(item =>
      Math.random() > 0.9
        ? item + Math.round(Math.random() * 2000)
        : item + Math.round(Math.random() * 200)
    );

    chartRef.current.getEchartsInstance().setOption({
      series: [
        {
          data
        }
      ]
    });
  };
  setTimeout(function () {
    
    chartRef.current && run();
  }, 0);
  setInterval(function () {
    chartRef.current && run();
  }, 3000);

  const getOption = () => ({
    xAxis: {
      max: 'dataMax',
      splitLine: {
        lineStyle: {
          color: getColor('gray-200')
        }
      },
      axisLabel: {
        color: getColor('gray-500')
      }
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      inverse: true,
      axisLabel: {
        color: getColor('gray-500')
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('gray-300')
        }
      },
      axisTick: {
        show: false
      },
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 4 // only the largest 5 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          color: getColor('gray-700'),
          fontWeight: 500,
          valueAnimation: true
        },
        itemStyle: {
          color: getColor('primary'),
          borderRadius: [0, 3, 3, 0]
        }
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    grid: {
      right: '10%',
      left: 5,
      bottom: 5,
      top: 5,
      containLabel: true
    }
    });
    
    return (
      <ReactEChartsCore
        echarts={echarts}
        ref={chartRef}
        option={getOption()}
        style={{ height: '21.88rem' }}
      />
    );
  }
`;

const RaceChart = () => {
  return (
    <FalconComponentCard className="h-100">
      <FalconComponentCard.Header title="Bar race chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor
        }}
      />
    </FalconComponentCard>
  );
};

export default RaceChart;

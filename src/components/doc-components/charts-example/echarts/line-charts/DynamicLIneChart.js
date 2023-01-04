import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import React from 'react';

import { LineChart } from 'echarts/charts';

import * as echarts from 'echarts/core';

import dayjs from 'dayjs';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function chartOptions(){
  const chartRef = useRef(null);
  const randomData = () => {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  };

  let data = [];
  let now = +new Date(1997, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (let i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      },
      padding: [7, 10],
      backgroundColor: getColor('gray-100'),
      borderColor: getColor('gray-300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      formatter: tooltipFormatter
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      },
      axisLabel: {
        color: getColor('gray-500')
      },

      axisLine: {
        lineStyle: {
          color: getColor('gray-300')
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
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      axisLabel: {
        color: getColor('gray-500')
      }
    },
    series: [
      {
        name: 'Total',
        type: 'line',
        showSymbol: false,
        emphasis: {
          scale: false
        },
        data: data,
        lineStyle: {
          color: getColor('primary')
        },
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('primary'),
          borderWidth: 2
        },
        symbol: 'circle',
        symbolSize: 10
      }
    ],
    grid: { right: 5, left: '7%', bottom: '10%', top: '5%' }
  });
  
  useEffect(() => {
      const interval = setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        chartRef.current.getEchartsInstance().setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={chartRef}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  )
}`;

const DynamicLineChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Dynamic line chart" light={false} />
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

export default DynamicLineChart;

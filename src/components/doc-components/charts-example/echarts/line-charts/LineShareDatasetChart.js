import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
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
  LineChart,
  CanvasRenderer
]);
const chartCode = `function ChartOptions() {
  const chartRef = useRef(null);

  const getOption = () => ({
    color: [
      getColor('danger'),
      getColor('warning'),
      getColor('info'),
      getColor('primary')
    ],
    legend: {
      top: 0,
      textStyle: {
        color: getColor('gray-700')
      }
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: getColor('gray-300')
        }
      },
      axisLabel: {
        color: getColor('gray-600')
      },
      axisPointer: {
        lineStyle: {
          color: getColor('gray-300')
        }
      }
    },
    yAxis: {
      gridIndex: 0,
      axisLabel: {
        color: getColor('gray-600')
      },
      splitLine: {
        lineStyle: {
          color: getColor('gray-200')
        }
      }
    },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('danger')
        },
        symbol: 'circle'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('info'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('info')
        },
        symbol: 'circle'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('warning'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('warning')
        },
        symbol: 'circle'
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('primary')
        },
        symbol: 'circle'
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '28%'],
        emphasis: { focus: 'data' },
        label: {
          formatter: '{b}: {@2012} ({d}%)',
          color: getColor('gray-600')
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ],
    grid: {
      right: 10,
      left: 5,
      bottom: 5,
      top: '55%',
      containLabel: true
    }
  });

  const updateAxisPointer = event => {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      var dimension = xAxisInfo.value + 1;

      chartRef.current.getEchartsInstance().setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  };

  const onEvents = {
    updateAxisPointer: updateAxisPointer
  };
  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={chartRef}
      option={getOption()}
      style={{ height: '31.25rem' }}
      onEvents={onEvents}
    />
  )

}`;

const LineShareDatasetChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Share Dataset" light={false} />
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

export default LineShareDatasetChart;

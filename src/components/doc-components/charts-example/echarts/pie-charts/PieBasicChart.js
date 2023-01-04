import FalconComponentCard from 'components/common/FalconComponentCard';
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
import { getColor, rgbaColor } from 'helpers/utils';
import React from 'react';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  
  const chartRef = useRef(null)

  const getOption = () => ({
    legend: {
      left: 'left',
      textStyle: {
        color: getColor('gray-600')
      }
    },
    series: [
      {
        type: 'pie',
        radius: window.innerWidth < 530 ? '45%' : '60%',
        label: {
          color: getColor('gray-700')
        },
        center: ['50%', '55%'],
        data: [
          {
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: getColor('primary')
            }
          },
          {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: getColor('danger')
            }
          },
          {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: getColor('info')
            }
          },
          {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: getColor('success')
            }
          },
          {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: getColor('warning')
            }
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: rgbaColor(getColor('gray-600'), 0.5)
          }
        }
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

    //------- Responsive on window resize -------
    
    const updateDimensions = () => {
      if (window.innerWidth < 530) {
        chartRef.current.getEchartsInstance().setOption({
          series: [{ radius: '45%' }]
        });
      }
      else
        chartRef.current.getEchartsInstance().setOption({
          series: [{ radius: '60%' }]
        });
    }
  
    useEffect(() => {
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        ref={chartRef}
        style={{ height: '20rem' }}
      />
    );
  }
`;

const PieBasicChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header title="Pie chart" light={false} />
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

export default PieBasicChart;

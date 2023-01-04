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

const chartCode = `function ChartOptions() {
  const chartRef = useRef(null)
  
  const getOption = () => ({
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: getColor('gray-600')
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: window.innerWidth < 530 ? ['65%', '55%'] : ['50%', '55%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: getColor('gray-100'),
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 1048,
            name: 'Starter',
            itemStyle: {
              color: getColor('primary')
            }
          },
          {
            value: 735,
            name: 'Basic',
            itemStyle: {
              color: getColor('danger')
            }
          },
          {
            value: 580,
            name: 'Optimal',
            itemStyle: {
              color: getColor('info')
            }
          },
          {
            value: 484,
            name: 'Business',
            itemStyle: {
              color: getColor('success')
            }
          },
          {
            value: 300,
            name: 'Premium',
            itemStyle: {
              color: getColor('warning')
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

    //------- Responsive on window resize -------
    
    const updateDimensions = () => {
      if (window.innerWidth < 530) {
        chartRef.current.getEchartsInstance().setOption({
          series: [
            {
              center: ['65%', '55%']
            }
          ]
        });
      } 
      else
        chartRef.current.getEchartsInstance().setOption({
          series: [
            {
              center: ['50%', '55%']
            }
          ]
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

const DoughnutRoundedChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header
        title="Doughnut rounded chart"
        light={false}
      />
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

export default DoughnutRoundedChart;

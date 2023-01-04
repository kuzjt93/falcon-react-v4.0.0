import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { RadarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, rgbaColor } from 'helpers/utils';
import { useBreakpoints } from 'hooks/useBreakpoints';
import React from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  RadarChart,
  CanvasRenderer,
  LegendComponent
]);

function tooltipFormatter(params) {
  const indicators = [
    ['Marketing', 'Sales', 'Dev', 'Support', 'Tech', 'Admin'],
    ['Language', 'Math', 'English', 'Physics', 'Chemistry', 'Biology']
  ];
  const num = params.seriesIndex;
  return `<strong > ${params.name} </strong>
  <div class="fs--1 text-600">
    <strong >${indicators[params.seriesIndex][0]}</strong>: ${
    params.value[0]
  }  <br>
    <strong>${indicators[num][1]}</strong>: ${params.value[1]}  <br>
    <strong>${indicators[num][2]}</strong>: ${params.value[2]}  <br>
    <strong>${indicators[num][3]}</strong>: ${params.value[3]}  <br>
    <strong>${indicators[num][4]}</strong>: ${params.value[4]}  <br>
    <strong>${indicators[num][5]}</strong>: ${params.value[5]}  <br>
  </div>`;
}

const chartCode = `function ChartOptions() {

  const chartRef = useRef(null);
  const { breakpoints } = useBreakpoints();

  const getOption = () => ({
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: getColor('gray-600')
      }
    },
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
      },
      formatter: tooltipFormatter
    },

    radar: [
      {
        radius: window.innerWidth < 576 ? 90 : 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        center: window.innerWidth < 992 ? ['50%', '30%'] : ['25%', '50%'],
        indicator: [
          { name: 'Admin', max: 6500 },
          { name: 'Tech', max: 16000 },
          { name: 'Support', max: 30000 },
          { name: 'Dev', max: 38000 },
          { name: 'Sales', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ],
        axisName: {
          formatter: '{value}',
          textStyle: {
            color: getColor('gray-700')
          }
        },
        splitLine: {
          lineStyle: {
            color: rgbaColor(getColor('gray-700'))
          }
        }
      },

      {
        indicator: [
          { text: 'Language', max: 150 },
          { text: 'Math', max: 150 },
          { text: 'English', max: 150 },
          { text: 'physics', max: 120 },
          { text: 'Chemistry', max: 108 },
          { text: 'Biology', max: 72 }
        ],
        radius: window.innerWidth < 576 ? 90 : 120,
        center: window.innerWidth < 992 ? ['50%', '75%'] : ['75%', '50%'],
        splitLine: {
          lineStyle: {
            color: getColor('gray-700')
          }
        },
        axisName: {
          textStyle: {
            color: getColor('gray-1000'),
            backgroundColor: getColor('gray-100'),
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      }
    ],

    series: [
      {
        type: 'radar',
        data: [
          {
            value: [5200, 4000, 20000, 30000, 20000, 18000],
            name: 'Data A',
            itemStyle: {
              color: getColor('info')
            },
            areaStyle: {
              color: rgbaColor(getColor('info'), 0.3)
            }
          },
          {
            value: [5000, 12000, 28000, 26000, 32000, 21000],
            name: 'Data B',
            itemStyle: {
              color: getColor('success')
            },
            areaStyle: {
              color: rgbaColor(getColor('success'), 0.3)
            }
          }
        ]
      },

      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [130, 110, 130, 100, 99, 70],
            name: 'Data C',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            itemStyle: {
              color: getColor('warning')
            },
            areaStyle: {
              color: rgbaColor(getColor('warning'), 0.3)
            },
            label: {
              show: true,
              formatter: function (params) {
                return params.value;
              },
              color: getColor('gray-700')
            }
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: 'Data D',
            itemStyle: {
              color: getColor('danger')
            },
            areaStyle: {
              color: rgbaColor(getColor('danger'), 0.3)
            }
          }
        ]
      }
    ]
    });

    //------- Responsive on window resize -------
    
    const updateDimensions = () => {
      if (window.innerWidth < 992) {
        chartRef.current.getEchartsInstance().setOption({
          radar: [
            {
              center: ['50%', '30%']
            },
            {
              center: ['50%', '75%']
            }
          ]
        });
      } else {
        chartRef.current.getEchartsInstance().setOption({
          radar: [
            {
              center: ['25%', '50%']
            },
            {
              center: ['75%', '50%']
            }
          ]
        });
      }

      if (window.innerWidth < 576) {
        chartRef.current.getEchartsInstance().setOption({
          radar: [
            {
              radius: 90
            },
            {
              radius: 90
            }
          ]
        });
      } else {
        chartRef.current.getEchartsInstance().setOption({
          radar: [
            {
              radius: 120
            },
            {
              radius: 120
            }
          ]
        });
      }
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
        style={{ height: breakpoints.up('lg') ? '22rem' : '45rem' }}
      />
    );
  }
`;

const RadarCustomizedChart = () => {
  return (
    <FalconComponentCard dir="ltr">
      <FalconComponentCard.Header
        title="Radar Customized  chart"
        light={false}
      />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          rgbaColor,
          useBreakpoints,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default RadarCustomizedChart;

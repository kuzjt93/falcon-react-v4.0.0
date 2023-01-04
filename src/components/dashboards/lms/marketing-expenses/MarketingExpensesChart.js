import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = () => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: getColor('gray-100'),
    textStyle: { color: getColor('dark') },
    formatter: '<strong>{b}</strong><br/> {c} ({d}%)'
  },
  legend: { show: false },
  series: [
    {
      name: 'Marketing Expenses',
      type: 'pie',
      radius: ['45%', '60%'],
      selectedMode: 'single',
      itemStyle: {
        borderWidth: 2,
        borderColor: getColor('gray-100')
      },
      label: {
        show: false
      },
      labelLine: { show: false },
      data: [
        {
          value: 91600,
          name: 'Event Sponsorship',
          itemStyle: {
            color: rgbaColor(getColor('primary'), 0.4)
          }
        },
        {
          value: 183000,
          name: 'Outrich Event',
          itemStyle: {
            color: rgbaColor(getColor('primary'), 0.6)
          }
        },
        {
          value: 138000,
          name: 'Ad Campaign',
          itemStyle: {
            color: rgbaColor(getColor('primary'), 0.8)
          }
        },
        {
          value: 183000,
          name: 'Social Media',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.2)
          }
        },
        {
          value: 45900,
          name: 'Google Ads',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.35)
          }
        },
        {
          value: 138000,
          name: 'Influencer Marketing',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.5)
          }
        },
        {
          value: 183000,
          name: 'Email Marketing',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.7)
          }
        },
        {
          value: 91600,
          name: 'Generate Backlinks',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.8)
          }
        }
      ]
    },
    {
      name: 'Marketing Expenses',
      type: 'pie',
      radius: ['70%', '75%'],
      barWidth: 10,
      itemStyle: {
        borderWidth: 2,
        borderColor: getColor('gray-100')
      },
      label: {
        formatter: '{per|{d}%}',
        rich: {
          per: {
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          }
        }
      },
      labelLine: { show: false },
      data: [
        {
          value: 412600,
          name: 'Offline Marketing',
          itemStyle: { color: getColor('primary') },
          label: {
            rich: {
              per: {
                color: '#1C4F93'
              }
            }
          }
        },
        {
          value: 641500,
          name: 'Digital Marketing',
          itemStyle: {
            color: rgbaColor(getColor('info'), 0.35)
          },
          label: {
            rich: {
              per: {
                color: '#1978A2'
              }
            }
          }
        }
      ]
    }
  ]
});

const MarketingExpensesChart = ({ data }) => {
  const chartRef = useRef(null);

  return (
    <div className="position-relative py-2">
      <ReactEChartsCore
        ref={chartRef}
        echarts={echarts}
        option={getOptions(data)}
        style={{ minHeight: '18.75rem' }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <div className="rounded-circle d-flex flex-center marketing-exp-circle">
          <h4 className="mb-0 text-900">$1.1M</h4>
        </div>
      </div>
    </div>
  );
};

MarketingExpensesChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array)
};

export default MarketingExpensesChart;

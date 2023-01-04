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
import { getColor } from 'helpers/utils';
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
  color: [
    getColor('primary'),
    getColor('info'),
    getColor('warning'),
    getColor('info')
  ],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: function (params) {
      return `<strong>${params.data.name}:</strong> ${params.percent}%`;
    }
  },
  legend: { show: false },
  series: [
    {
      name: 'Total',
      type: 'pie',
      radius: ['100%', '67%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderWidth: 2,
        borderColor: getColor('gray-100')
      },
      label: {
        show: false
      },
      emphasis: {
        scale: false
      },
      labelLine: { show: false },
      data: [
        { value: 60, name: 'Email' },
        { value: 30, name: 'Social' },
        { value: 10, name: 'Call' },
        { value: 120, name: 'Other' }
      ]
    }
  ]
});

const MostLeadsChart = ({ data }) => {
  const chartRef = useRef(null);

  return (
    <div className="position-relative py-2">
      <ReactEChartsCore
        ref={chartRef}
        echarts={echarts}
        option={getOptions(data)}
        style={{ height: '12.5rem' }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <p className="fs--1 mb-0 text-400 font-sans-serif fw-medium">Total</p>
        <p className="fs-3 mb-0 font-sans-serif fw-medium mt-n2">15.6k</p>
      </div>
    </div>
  );
};

MostLeadsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array)
};

export default MostLeadsChart;

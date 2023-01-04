import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Flex from 'components/common/Flex';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent,
  DatasetComponent
]);

const getOption = data => ({
  color: [getColor('primary'), getColor('gray-300')],
  dataset: { source: data },
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: function (params) {
      return `<div className="fw-semi-bold">${
        params.seriesName
      }</div><div className="fs--1 text-600"><strong>${params.name}:</strong> ${
        params.value[params.componentIndex + 1]
      }</div>`;
    }
  },
  legend: {
    data: ['2019', '2018'],
    left: 'left',
    itemWidth: 10,
    itemHeight: 10,
    borderRadius: 0,
    icon: 'circle',
    inactiveColor: getColor('gray-400'),
    textStyle: { color: getColor('gray-700') }
  },
  xAxis: {
    type: 'category',
    axisLabel: { color: getColor('gray-400') },
    axisLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisTick: false,
    boundaryGap: true
  },
  yAxis: {
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      lineStyle: {
        color: getColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLine: { show: false },
    axisLabel: { color: getColor('gray-400') }
  },
  series: [
    {
      type: 'bar',
      barWidth: '10px',
      barGap: '30%',
      label: { show: false },
      z: 10,
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        color: getColor('primary')
      }
    },
    {
      type: 'bar',
      barWidth: '10px',
      barGap: '30%',
      label: { show: false },
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        color: getColor('gray-300')
      }
    }
  ],
  grid: { right: '0', left: '30px', bottom: '10%', top: '20%' }
});

const TopProducts = ({ data }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Top Products"
        titleTag="h6"
        className="py-2"
        light
        endEl={
          <Flex>
            <Button variant="link" size="sm" as={Link} className="me-2" to="#!">
              View Details
            </Button>
            <CardDropdown />
          </Flex>
        }
      />
      <Card.Body className="h-100">
        <ReactEChartsCore
          echarts={echarts}
          option={getOption(data)}
          style={{ height: '100%', minHeight: '17.75rem' }}
        />
      </Card.Body>
    </Card>
  );
};

TopProducts.propTypes = {
  data: PropTypes.array.isRequired
};

export default TopProducts;

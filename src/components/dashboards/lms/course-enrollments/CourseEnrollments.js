import React from 'react';
import PropTypes from 'prop-types';
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
import { Card, Form } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { getColor, rgbaColor } from 'helpers/utils';

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
  color: [
    rgbaColor(getColor('info'), 0.6),
    getColor('primary'),
    rgbaColor(getColor('warning'), 0.4)
  ],
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
    data: ['Free Course', 'Paid Course', 'On sale Course'],
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
        type: 'line'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColor('gray-200'),
        type: 'line',
        width: 0.5
      }
    },
    axisTick: { show: false },
    boundaryGap: true
  },
  yAxis: {
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      lineStyle: {
        color: getColor('gray-200'),
        type: 'dashed'
      }
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: getColor('gray-400'),
      formatter: value => `${Math.round((value / 1000) * 10) / 10}k`
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: '15%',
      barGap: '30%',
      label: { show: false },
      z: 10,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [2, 2, 0, 0]
      }
    },
    {
      type: 'bar',
      barWidth: '15%',
      barGap: '30%',
      label: { show: false },
      z: 10,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [2, 2, 0, 0]
      }
    },
    {
      type: 'bar',
      barWidth: '15%',
      barGap: '30%',
      label: { show: false },
      z: 10,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [2, 2, 0, 0]
      }
    }
  ],
  grid: { right: '0', left: '30px', bottom: '10%', top: '20%' }
});

const CourseEnrollments = ({ data }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Course Enrollment"
        titleTag="h6"
        className="py-2"
        light
        endEl={
          <Form.Select size="sm" className="me-2">
            <option>Last 7 days</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </Form.Select>
        }
      />
      <Card.Body className="h-100 w-100">
        <ReactEChartsCore
          echarts={echarts}
          option={getOption(data)}
          style={{ height: '100%', minHeight: '15.625rem' }}
        />
      </Card.Body>
    </Card>
  );
};

CourseEnrollments.propTypes = {
  data: PropTypes.array.isRequired
};

export default CourseEnrollments;

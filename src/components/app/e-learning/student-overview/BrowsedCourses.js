import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { getColor, rgbaColor } from 'helpers/utils';
import FalconLink from 'components/common/FalconLink';
import Flex from 'components/common/Flex';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  LegendComponent
]);

const tooltipFormatter = params => `
    <div>
      <p class='mb-2 text-600'>
      ${
        dayjs(params[0].axisValue).isValid()
          ? dayjs(params[0].axisValue).format('MMMM YYYY')
          : params[0].axisValue
      }
      </p>
      ${params
        .map(
          ({ seriesName, value, borderColor }) =>
            `<div class="dot d-inline-block" style="background-color: ${borderColor}"></div>
            <span class='text-600'>
              ${seriesName} : <strong>${value}</strong>
            </span>`
        )
        .join('<br />')}
    </div>`;

const getOptions = () => ({
  color: getColor('gray-100'),
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    data: [
      '2020-01-01',
      '2020-02-01',
      '2020-03-01',
      '2020-04-01',
      '2020-05-01',
      '2020-06-01',
      '2020-07-01',
      '2020-08-01',
      '2020-09-01',
      '2020-10-01',
      '2020-11-01',
      '2020-12-01',
      '2021-01-01',
      '2021-02-01',
      '2021-03-01',
      '2021-04-01',
      '2021-05-01',
      '2021-06-01',
      '2021-07-01',
      '2021-08-01',
      '2021-09-01',
      '2021-10-01',
      '2021-11-01',
      '2021-12-01'
    ],
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => {
        const date = new Date(value);
        return `${dayjs(date).format('MMM')}`;
      },
      interval: 2
    }
  },
  yAxis: {
    type: 'value',
    show: false
  },
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    axisPointer: {
      type: 'none'
    },
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter(params) {
      return tooltipFormatter(params);
    }
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      barWidth: '50%',
      z: -1,
      data: [
        600, 832, 901, 934, 1290, 1330, 1320, 1250, 1190, 1345, 1009, 1320, 600,
        832, 901, 934, 1290, 1330, 1320, 1250, 1190, 1345, 1009, 1320
      ],
      itemStyle: {
        color: rgbaColor(getColor('primary'), 0.1),
        borderRadius: [5, 5, 0, 0],
        borderWidth: 1,
        borderColor: getColor('gray-300')
      },
      emphasis: {
        itemStyle: {
          color: rgbaColor(getColor('info'), 0.15),
          borderRadius: [5, 5, 0, 0],
          borderWidth: 1,
          borderColor: getColor('gray-300')
        }
      }
    },
    {
      name: 'Paid',
      type: 'bar',
      barWidth: '50%',
      barGap: '-100%',
      data: [
        320, 420, 800, 100, 1000, 930, 720, 1020, 800, 320, 450, 150, 320, 420,
        800, 100, 1000, 930, 720, 1020, 800, 320, 450, 150
      ],
      itemStyle: {
        borderRadius: [5, 5, 0, 0],
        color: getColor('primary'),
        borderWidth: 1,
        borderColor: getColor('primary')
      }
    }
  ],
  grid: {
    right: '0px',
    left: '0px',
    bottom: '10%',
    top: '15%'
  }
});

const BrowsedCourses = () => {
  const chartRef = useRef(null);

  const handleLegendToggle = (event, name) => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name
    });
    event.target.closest('button').classList.toggle('opacity-50');
  };

  return (
    <Card className="mb-3">
      <Card.Header className="bg-light">
        <h6 className="mb-0">Browsing New Courses</h6>
      </Card.Header>
      <Card.Body>
        <ReactEChartsCore
          ref={chartRef}
          echarts={echarts}
          option={getOptions()}
          style={{ minHeight: '21.875rem' }}
        />
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Flex className="flex-wrap gap-md-2">
              <Button
                variant="text"
                size="sm"
                className="d-flex align-items-center p-0 shadow-none"
                onClick={event => handleLegendToggle(event, 'Total')}
              >
                <FontAwesomeIcon
                  icon="circle"
                  className="text-info fs--2 me-1"
                  transform="shrink-3"
                />
                <small className="text-600">New Courses Browsed</small>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="d-flex align-items-center p-0 shadow-none ms-2"
                onClick={event => handleLegendToggle(event, 'Paid')}
              >
                <FontAwesomeIcon
                  icon="circle"
                  className="text-primary fs--2 me-1"
                  transform="shrink-3"
                />
                <small className="text-600">Paid Course Browsed</small>
              </Button>
            </Flex>
          </Col>
          <Col xs="auto">
            <FalconLink
              to="/e-learning/course/course-grid"
              title="All Courses"
              className="px-0 fw-medium"
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

BrowsedCourses.propTypes = {
  data: PropTypes.shape({
    onSaleCourse: PropTypes.array,
    regularPaidCourse: PropTypes.array
  })
};

export default BrowsedCourses;

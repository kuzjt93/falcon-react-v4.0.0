import React from 'react';
import PropTypes from 'prop-types';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { Card, Col, Row } from 'react-bootstrap';
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
import FalconLink from 'components/common/FalconLink';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const data = [
  { value: 12, name: '90-100%' },
  { value: 16, name: '70-90%' },
  { value: 12, name: '40-70%' },
  { value: 2, name: '0-40%' }
];

const getOptions = () => ({
  color: [
    getColor('success'),
    getColor('primary'),
    getColor('info'),
    getColor('warning')
  ],
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: params =>
      `<strong>${params.data.name}:</strong> ${params.data.value}%`
  },

  legend: { show: false },
  series: [
    {
      type: 'pie',
      radius: ['85%', '60%'],
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
      data
    }
  ]
});

const AssignmentScores = ({ scoresData }) => {
  return (
    <Card className="h-100 font-sans-serif">
      <FalconCardHeader
        light
        title="Assignment Scores"
        titleTag="h6"
        className="py-2"
        endEl={
          <FalconLink title="Individual results" className="px-0 fw-medium" />
        }
      />
      <Card.Body>
        <Row className="g-0 h-100">
          <Col sm={7} className="order-1 order-sm-0">
            <Row className="g-sm-0 gy-4 row-cols-2 h-100 align-content-between">
              {scoresData.map(item => (
                <Col key={item.id}>
                  <Flex className="mb-3 gap-2">
                    <div className={`vr rounded ps-1 bg-${item.color}`} />
                    <h6 className="lh-base text-700 mb-0">{item.range}</h6>
                  </Flex>
                  <h5 className="fw-normal">{item.courses} Courses</h5>
                  <h6 className="mb-0">
                    <span className="text-500 me-2">this week</span>
                    <SoftBadge
                      bg={item.badge.type}
                      pill
                      className="d-none d-md-inline-block ms-2"
                    >
                      {item.badge.icon && (
                        <FontAwesomeIcon
                          icon={item.badge.icon}
                          className="ms-1"
                        />
                      )}
                      {item.badge.content}
                    </SoftBadge>
                  </h6>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={5}>
            <ReactEChartsCore
              echarts={echarts}
              option={getOptions()}
              style={{ height: 200 }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

AssignmentScores.propTypes = {
  scoresData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AssignmentScores;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasicECharts from 'components/common/BasicEChart';
import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  ToolboxComponent,
  TitleComponent
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  GridComponent,
  ToolboxComponent,
  TitleComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = data => ({
  tooltip: {
    trigger: 'axis',
    formatter: '{b0} : {c0}'
  },
  xAxis: {
    data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
  },
  series: [
    {
      type: 'line',
      data: data.dataArray,
      color: data.chartColor,
      smooth: true,
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color:
                data.chartColor === '#2c7be5'
                  ? 'rgba(44, 123, 229, .25)'
                  : data.chartColor === '#00d27a'
                  ? 'rgba(0, 210, 122, .25)'
                  : data.chartColor === '#27bcfd'
                  ? 'rgba(39, 188, 253, .25)'
                  : 'rgba(245, 128, 62, .25)'
            },
            {
              offset: 1,
              color:
                data.chartColor === '#2c7be5'
                  ? 'rgba(44, 123, 229, 0)'
                  : data.chartColor === '#00d27a'
                  ? 'rgba(0, 210, 122, 0)'
                  : data.chartColor === '#27bcfd'
                  ? 'rgba(39, 188, 253, 0)'
                  : 'rgba(245, 128, 62, 0)'
            }
          ]
        }
      }
    }
  ],
  grid: {
    bottom: '2%',
    top: '2%',
    right: '0',
    left: '0px'
  }
});

const SingleItem = ({ singleData }) => {
  return (
    <Col md={6} className={singleData.className}>
      <Row className="g-0">
        <Col xs={6}>
          <img src={singleData.img} alt="" width="39" className="mt-1" />
          <h2 className="mt-2 mb-1 text-700 fw-normal">
            {singleData.count}
            <Badge
              pill
              bg="transparent"
              className={`text-${singleData.color} fs--1 px-2`}
            >
              <FontAwesomeIcon icon={singleData.icon} className="me-1" />
              {singleData.percentage}
            </Badge>
          </h2>
          <h6 className="mb-0">{singleData.title}</h6>
        </Col>
        <Col xs={6} className="d-flex align-items-center px-0">
          <BasicECharts
            echarts={echarts}
            options={getOptions(singleData)}
            className="w-100 h-50"
          />
        </Col>
      </Row>
    </Col>
  );
};

SingleItem.propTypes = {
  singleData: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chartColor: PropTypes.string,
    icon: PropTypes.string,
    dataArray: PropTypes.array,
    className: PropTypes.string
  })
};

const TicketStatus = ({ data }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Row className="g-0">
          {data.map(item => (
            <SingleItem key={item.title} singleData={item} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

TicketStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TicketStatus;

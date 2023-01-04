import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import { PieChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import { getColor } from 'helpers/utils';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import BasicECharts from 'components/common/BasicEChart';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer
]);

const getOptions = (data, radius) => ({
  color: [
    getColor(data[0].color),
    getColor(data[1].color),
    getColor(data[2].color)
  ],

  tooltip: {
    padding: [7, 10],
    transitionDuration: 0,
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    formatter: params =>
      `<strong>${params.data.name}:</strong> ${params.percent}%`
  },
  series: [
    {
      name: '26M',
      type: 'pie',
      radius,
      avoidLabelOverlap: false,
      emphasis: {
        scale: false
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: getColor('gray-100')
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontSize: 23,
        color: getColor('dark')
      },
      data
    }
  ]
});

const MarketShareItem = ({ item, index, total }) => {
  const { name, color, value } = item;

  const percentage = ((value * 100) / total).toFixed(0);
  return (
    <Flex
      alignItems="center"
      justifyContent="between"
      className={`fw-semi-bold fs--2 ${index == 0 && 'mt-3'}`}
    >
      <p className="mb-1">
        <FontAwesomeIcon
          icon="circle"
          className={`me-2 text-${color.split('-')[1] || color || 'text-info'}`}
        />
        {name}
      </p>
      <div className="d-xxl-none">{percentage}%</div>
    </Flex>
  );
};

const MarketShare = ({ data, radius }) => {
  const total = data.reduce((acc, val) => val.value + acc, 0);
  return (
    <Card className="h-md-100">
      <Card.Body>
        <Row className="justify-content-between g-0">
          <Col xs={5} sm={6} xxl className="pe-2">
            <h6 className="mt-1">Market Share</h6>

            {data.map((item, index) => (
              <MarketShareItem
                item={item}
                index={index}
                key={index}
                total={total}
              />
            ))}
          </Col>
          <Col xs="auto">
            <div className="ps-0">
              <BasicECharts
                echarts={echarts}
                options={getOptions(data, radius)}
                style={{ width: '6.625rem', height: '6.625rem' }}
              />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

MarketShareItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

MarketShare.propTypes = {
  data: PropTypes.array.isRequired,
  radius: PropTypes.array.isRequired
};

export default MarketShare;

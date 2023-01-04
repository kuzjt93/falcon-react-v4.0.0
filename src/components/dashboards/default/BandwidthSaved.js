import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Flex from 'components/common/Flex';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { GaugeChart } from 'echarts/charts';
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
import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  GaugeChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = data => ({
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '90%',
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: getColor('primary')
        }
      },
      axisLine: {
        lineStyle: {
          width: 8,
          color: [[1, getColor('gray-200')]]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: [
        {
          value: data,
          detail: {
            offsetCenter: ['7%', '4%']
          }
        }
      ],
      detail: {
        width: 50,
        height: 14,
        fontSize: 28,
        fontWeight: 500,
        fontFamily: 'poppins',
        color: getColor('gray-500'),
        formatter: '{value}%'
      }
    }
  ]
});

const BandwidthSaved = ({ bodyClassName }) => {
  const [total] = useState(38.44);
  const [saved] = useState(35.75);

  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Bandwidth Saved"
        titleTag="h6"
        className="py-2"
        light
        endEl={<CardDropdown />}
      />
      <Card.Body
        className={classNames(bodyClassName, 'h-100')}
        as={Flex}
        direction="column"
        alignItems="between"
      >
        <ReactEChartsCore
          echarts={echarts}
          option={getOptions(93)}
          style={{ height: '10.3rem', widht: '10.3rem' }}
        />
        <div className="text-center mt-3">
          <h6 className="fs-0 mb-1">
            <FontAwesomeIcon
              icon="check"
              transform="shrink-2"
              className="text-success me-1"
            />
            {saved} GB saved
          </h6>
          <p className="fs--1 mb-0">{total} GB total bandwidth</p>
        </div>
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Last 2 Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Link className="fs--1 font-sans-serif" to="#!">
              Help
            </Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

BandwidthSaved.propTypes = {
  bodyClassName: PropTypes.string
};

export default BandwidthSaved;

import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import { dealForecastData } from 'data/dashboard/crm';
import classNames from 'classnames';
import Flex from 'components/common/Flex';

const DealForecastBar = () => {
  const total = dealForecastData.reduce((acc, data) => acc + data.amount, 0);

  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Deal Forecast"
        titleTag="h6"
        className="border-200 border-bottom py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body as={Flex} alignItems="center">
        <div className="w-100">
          <h3 className="text-700 mb-6">${total.toLocaleString()}</h3>
          <ProgressBar
            className="font-sans-serif fs--1 fw-medium mt-xxl-auto rounded-3 overflow-visible"
            style={{ height: 20 }}
          >
            {dealForecastData.map((item, index) => (
              <ProgressBar
                variant={item.variant}
                now={(item.amount / total) * 100}
                key={item.id}
                className={classNames('overflow-visible position-relative', {
                  'rounded-end rounded-pill': index === 0,
                  'rounded-start rounded-pill':
                    index === dealForecastData.length - 1,
                  ' border-end border-white border-2':
                    index !== dealForecastData.length - 1
                })}
                label={
                  <span
                    className="text-700 position-absolute"
                    style={{ top: -30 }}
                  >
                    ${(item.amount / 1000).toFixed(1)}k
                  </span>
                }
              />
            ))}
          </ProgressBar>
          <Row className="fs--1 fw-semi-bold text-500 mt-3 g-0">
            {dealForecastData.map((item, index) => (
              <Col
                xs="auto"
                key={index}
                as={Flex}
                alignItems="center"
                className="pe-3"
              >
                <span className={`dot bg-${item.variant}`}></span>
                <span>{item.title}</span>
                <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                  ({((item.amount / total) * 100).toFixed(1)}%)
                </span>
              </Col>
            ))}
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DealForecastBar;

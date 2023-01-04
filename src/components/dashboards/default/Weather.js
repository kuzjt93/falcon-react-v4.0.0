import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import weatherIcon from 'assets/img/icons/weather-icon.png';
import Flex from 'components/common/Flex';

const Weather = ({
  data: {
    city,
    condition,
    precipitation,
    temperature,
    highestTemperature,
    lowestTemperature
  },
  ...rest
}) => (
  <Card {...rest} className="h-100">
    <FalconCardHeader
      title="Weather"
      light={false}
      titleTag="h6"
      className="pb-0"
      endEl={<CardDropdown />}
    />
    <Card.Body className="pt-2">
      <Row className="g-0 h-100 align-items-center">
        <Col as={Flex} alignItems="center">
          <img className="me-3" src={weatherIcon} alt="" height="60" />
          <div>
            <h6 className="mb-2">{city}</h6>
            <div className="fs--2 fw-semi-bold">
              <div className="text-warning">{condition}</div>
              Precipitation: {precipitation}
            </div>
          </div>
        </Col>
        <Col xs="auto" className="text-center ps-2">
          <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1">
            {temperature}°
          </div>
          <div className="fs--1 text-800">
            {highestTemperature}° / {lowestTemperature}°
          </div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

Weather.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Weather;

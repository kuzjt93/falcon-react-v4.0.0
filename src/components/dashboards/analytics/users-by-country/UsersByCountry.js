import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/FalconLink';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import UsersByCountryChart from './UsersByCountryChart';
import WorldMap from './WorldMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';

const UsersByCountry = ({ chartData, mapData }) => {
  const chartRef = useRef(null);
  const handleMapReset = () => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'restore'
    });
  };
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Users By Country"
        titleTag="h6"
        className="py-2"
        light
        endEl={
          <Flex>
            <div className="btn-reveal-trigger">
              <Button
                variant="link"
                size="sm"
                className="btn-reveal"
                type="button"
                onClick={handleMapReset}
              >
                <FontAwesomeIcon icon="sync-alt" />
              </Button>
            </div>
            <CardDropdown />
          </Flex>
        }
      />
      <Card.Body>
        <WorldMap data={mapData} ref={chartRef} style={{ height: '12.5rem' }} />
        <UsersByCountryChart data={chartData} />
      </Card.Body>

      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="Browser Overview" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

UsersByCountry.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.array).isRequired,
  mapData: WorldMap.propTypes.data.isRequired
};

export default UsersByCountry;

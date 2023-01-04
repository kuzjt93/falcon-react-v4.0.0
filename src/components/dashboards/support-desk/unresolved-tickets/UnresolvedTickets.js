import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { Card, Col, Form, Row } from 'react-bootstrap';
import UnresolvedTicktsChart from './UnresolvedTicktsChart';
import PropTypes from 'prop-types';

const UnresolvedTickets = ({ data }) => {
  const chartRef = useRef(null);
  const handleLegend = (event, name) => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: name
    });
  };
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Unresolved Tickets by Priority"
        titleTag="h6"
        className="border-200 border-bottom py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="py-0">
        <Row>
          <Col
            md="auto"
            className="border-md-end border-md-200 pt-3 pt-md-0 d-md-flex align-items-center"
          >
            <Row className="flex-md-column px-3">
              <Col
                xs="auto"
                className="border-end border-md-end-0 border-md-bottom pb-md-3 mb-md-3 ps-0 ps-md-3 pe-x1 pe-md-3 me-1 me-md-0"
              >
                <div className="d-flex align-items-center mb-n1">
                  <Form.Check.Label
                    htmlFor="urgent"
                    className="fs-0 mb-n1 text-700 cursor-pointer "
                  >
                    14
                  </Form.Check.Label>
                  <Form.Check.Input
                    onChange={event => handleLegend(event, 'Urgent')}
                    type="checkbox"
                    id="urgent"
                    defaultChecked
                    className="small-dot mt-0 shadow-none remove-checked-icon rounded-circle cursor-pointer"
                  />
                </div>
                <Form.Check.Label
                  htmlFor="urgent"
                  className="fs--2 mb-0 text-700 cursor-pointer"
                >
                  Urgent
                </Form.Check.Label>
              </Col>
              <Col
                xs="auto"
                className="border-end border-md-end-0 border-md-bottom pb-md-3 mb-md-3 pe-x1 pe-md-3 me-1 me-md-0"
              >
                <div className="d-flex align-items-center mb-n1">
                  <Form.Check.Label
                    htmlFor="high"
                    className="fs-0 mb-n1 text-700 cursor-pointer "
                  >
                    16
                  </Form.Check.Label>
                  <Form.Check.Input
                    onChange={event => handleLegend(event, 'High')}
                    type="checkbox"
                    id="high"
                    defaultChecked
                    className="small-dot mt-0 shadow-none remove-checked-icon rounded-circle cursor-pointer form-check-input-info"
                  />
                </div>
                <Form.Check.Label
                  htmlFor="high"
                  className="fs--2 mb-0 text-700 cursor-pointer"
                >
                  High
                </Form.Check.Label>
              </Col>
              <Col
                xs="auto"
                className="border-end border-md-end-0 border-md-bottom pb-md-3 mb-md-3 pe-x1 pe-md-3 me-1 me-md-0"
              >
                <div className="d-flex align-items-center mb-n1">
                  <Form.Check.Label
                    htmlFor="medium"
                    className="fs-0 mb-n1 text-700 cursor-pointer "
                  >
                    53
                  </Form.Check.Label>
                  <Form.Check.Input
                    onChange={event => handleLegend(event, 'Medium')}
                    type="checkbox"
                    id="medium"
                    defaultChecked
                    className="small-dot mt-0 shadow-none remove-checked-icon rounded-circle cursor-pointer bg-priority-medium"
                  />
                </div>
                <Form.Check.Label
                  htmlFor="medium"
                  className="fs--2 mb-0 text-700 cursor-pointer"
                >
                  Medium
                </Form.Check.Label>
              </Col>
              <Col xs="auto" className="pe-0">
                <div className="d-flex align-items-center mb-n1">
                  <Form.Check.Label
                    htmlFor="low"
                    className="fs-0 mb-n1 text-700 cursor-pointer "
                  >
                    25
                  </Form.Check.Label>
                  <Form.Check.Input
                    onChange={event => handleLegend(event, 'Low')}
                    type="checkbox"
                    id="low"
                    defaultChecked
                    className="small-dot mt-0 shadow-none remove-checked-icon rounded-circle cursor-pointer bg-priority-low"
                  />
                </div>
                <Form.Check.Label
                  htmlFor="low"
                  className="fs--2 mb-0 text-700 cursor-pointer"
                >
                  Low
                </Form.Check.Label>
              </Col>
            </Row>
          </Col>
          <Col md="auto" className="echart-unresolved-tickets-container">
            <UnresolvedTicktsChart data={data} ref={chartRef} />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-center border-top border-200 p-0">
        <a href="#!" className="btn btn-link btn-sm px-0 fw-medium py-2">
          View all
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </a>
      </Card.Footer>
    </Card>
  );
};

UnresolvedTickets.propTypes = {
  data: PropTypes.array.isRequired
};

export default UnresolvedTickets;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import React, { useRef } from 'react';
import { Badge, Card, Col, Form, Row } from 'react-bootstrap';
import TicketVolumeChart from './TicketVolumeChart';
import { ticketVolume } from 'data/support-desk/reportsData';
import PropTypes from 'prop-types';
import FalconLink from 'components/common/FalconLink';

const FormCheck = ({ title, id, inputClass, checkBoxClass, handleLegend }) => {
  return (
    <Form.Check
      className={classNames(checkBoxClass, 'd-flex align-items-center mb-0')}
    >
      <Form.Check.Input
        onChange={event => handleLegend(event, title)}
        type="checkbox"
        id={id}
        defaultChecked
        className={classNames(
          inputClass,
          'dot mt-0 shadow-none remove-checked-icon rounded-circle cursor-pointer'
        )}
      />
      <Form.Check.Label
        htmlFor={id}
        className="form-check-label lh-base mb-0 text-700 fw-normal font-base cursor-pointer"
      >
        {title}
      </Form.Check.Label>
    </Form.Check>
  );
};

FormCheck.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  checkBoxClass: PropTypes.string,
  handleLegend: PropTypes.func
};

const TicketsCategory = ({ title, number, percentage, icon, badgeColor }) => {
  return (
    <div>
      <h6 className="fs-0 d-flex align-items-center text-700 mb-1">
        {number}
        <Badge pill bg="transparent" className={classNames(badgeColor, 'px-0')}>
          <FontAwesomeIcon icon={icon} className="fs--2 ms-2 me-1" />
          {percentage}
        </Badge>
      </h6>
      <h6 className="fs--2 text-600 mb-0 text-nowrap">{title}</h6>
    </div>
  );
};

TicketsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  badgeColor: PropTypes.string
};

const TicketVolume = () => {
  const chartRef = useRef(null);
  const handleLegend = (event, name) => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: name
    });
  };
  return (
    <Card className="mt-3">
      <Card.Header className="border-bottom">
        <Row className="flex-between-center gy-2">
          <Col xs="auto">
            <h6 className="mb-0 me-x1">Trends in Ticket Volume</h6>
          </Col>
          <Col xs="auto">
            <Form.Select size="sm" defaultValue="Monthly">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row className="flex-between-center mx-0 gy-4">
          <Col lg="auto" className="px-0 me-5">
            <Row className="g-md-0">
              <Col xs="auto" className="d-md-flex">
                <FormCheck
                  title="On Hold Tickets"
                  id="onHoldTickets"
                  checkBoxClass="me-md-3"
                  handleLegend={handleLegend}
                />
                <FormCheck
                  title="Open Tickets"
                  id="openTickets"
                  inputClass="open-tickets"
                  checkBoxClass="mt-n1 mt-md-0 me-md-3"
                  handleLegend={handleLegend}
                />
              </Col>
              <Col xs="auto" className="d-md-flex">
                <FormCheck
                  title="Due Tickets"
                  id="dueTickets"
                  inputClass="due-tickets-volume"
                  checkBoxClass="me-md-3"
                  handleLegend={handleLegend}
                />
                <FormCheck
                  title="Unassigned Tickets"
                  id="unassignedTickets"
                  inputClass="unassigned-tickets-volume"
                  checkBoxClass="mt-n1 mt-md-0 me-md-0"
                  handleLegend={handleLegend}
                />
              </Col>
            </Row>
          </Col>
          <Col lg="auto" className="scrollbar overflow-y-hidden px-0">
            <Flex className="white-space-nowrap justify-content-xl-end w-100">
              <div className="d-flex align-items-center">
                <TicketsCategory
                  title="Total On Hold Tickets"
                  number="125"
                  percentage="5.3%"
                  icon="caret-up"
                  badgeColor="text-success"
                />
                <div
                  className="bg-200 mx-3"
                  style={{ height: '24px', width: '1px' }}
                ></div>
              </div>
              <div className="d-flex align-items-center">
                <TicketsCategory
                  title="Total Open Tickets"
                  number="100"
                  percentage="3.20%"
                  icon="caret-up"
                  badgeColor="text-primary"
                />
                <div
                  className="bg-200 mx-3"
                  style={{ height: '24px', width: '1px' }}
                ></div>
              </div>
              <div className="d-flex align-items-center">
                <TicketsCategory
                  title="Total Due Tickets"
                  number="53"
                  percentage="2.3%"
                  icon="caret-down"
                  badgeColor="text-warning"
                />
                <div
                  className="bg-200 mx-3"
                  style={{ height: '24px', width: '1px' }}
                ></div>
              </div>
              <TicketsCategory
                title="Total Unassigned Tickets"
                number="136"
                percentage="3.12%"
                icon="caret-up"
                badgeColor="text-danger"
              />
            </Flex>
          </Col>
        </Row>
        <TicketVolumeChart data={ticketVolume} ref={chartRef} />
      </Card.Body>
      <Card.Footer className="text-center bg-light py-2">
        <FalconLink title="View all report" className="px-0 fw-medium" />
      </Card.Footer>
    </Card>
  );
};

export default TicketVolume;

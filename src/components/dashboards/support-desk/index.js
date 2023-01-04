import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  statusData,
  unresolvedTickets,
  numbersOfTickets,
  tickets
} from 'data/dashboard/support-desk';
import Greetings from './Greetings';
import TicketStatus from './TicketStatus';
import UnresolvedTickets from './unresolved-tickets/UnresolvedTickets';
import NumberOfTickets from './number-of-tickets/NumberOfTickets';
import CustomerSatisfaction from './customer-satisfaction/CustomerSatisfaction';
import ToDoList from './ToDoList';
import UnsolvedTickets from './unsolved-tickets/UnsolvedTickets';

const SupportDesk = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={6}>
          <Row className="g-0 h-100">
            <Col xs={12} className="mb-3">
              <Greetings />
            </Col>
            <Col>
              <TicketStatus data={statusData} />
            </Col>
          </Row>
        </Col>
        <Col xxl={6}>
          <UnresolvedTickets data={unresolvedTickets} />
        </Col>
      </Row>
      <Row className="g-3">
        <Col xxl={8}>
          <NumberOfTickets data={numbersOfTickets} />
        </Col>
        <Col md={6} xxl={4}>
          <CustomerSatisfaction />
        </Col>
        <Col md={6} xxl={3}>
          <ToDoList />
        </Col>
        <Col xxl={9}>
          <UnsolvedTickets data={tickets} />
        </Col>
      </Row>
    </>
  );
};

export default SupportDesk;

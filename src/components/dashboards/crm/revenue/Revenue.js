import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import RevenueChart from './RevenueChart';
import { revenueChartData } from 'data/dashboard/crm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ item }) => {
  return (
    <Nav.Item as="li">
      <Nav.Link
        className="mb-0 py-3 cursor-pointer"
        eventKey={item.toLowerCase()}
      >
        {item}
      </Nav.Link>
    </Nav.Item>
  );
};

const Revenue = () => {
  const [navItems] = useState(['Revenue', 'Users', 'Deals', 'Profit']);
  return (
    <Card className="mt-3">
      <Tab.Container id="audience-tab" defaultActiveKey="users">
        <Card.Header
          as={Flex}
          justifyContent="between"
          alignItems="center"
          className="ps-0 py-0 border-bottom"
        >
          <Nav
            as="ul"
            className="nav-tabs border-0 flex-nowrap chart-tab tab-active-caret"
          >
            {navItems.map(item => (
              <NavItem item={item} key={item} />
            ))}
          </Nav>
        </Card.Header>

        <Card.Body>
          <Row className="g-1">
            <Col xxl={3}>
              <Row className="g-0 my-2">
                <Col md={6} xxl={12}>
                  <div className="border-xxl-bottom border-xxl-200 mb-2">
                    <h2 className="text-primary">$37,950</h2>
                    <p className="fs--2 text-500 fw-semi-bold mb-0">
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-primary me-2"
                      />
                      Closed Amount
                    </p>
                    <p className="fs--2 text-500 fw-semi-bold">
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-warning me-2"
                      />
                      Revenue Goal
                    </p>
                  </div>
                  <Form.Check
                    inline
                    type="radio"
                    id="inbound"
                    label="Inbound"
                    name="bound"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    id="outbound"
                    label="Outbound"
                    defaultChecked
                    name="bound"
                  />
                </Col>
                <Col md={6} xxl={12} className="py-2">
                  <Row className="mx-0">
                    <Col xs={6} className="border-end border-bottom py-3">
                      <h5 className="fw-normal text-600">$4.2k</h5>
                      <h6 className="text-500 mb-0">Email</h6>
                    </Col>
                    <Col xs={6} className="border-bottom py-3">
                      <h5 className="fw-normal text-600">$5.6k</h5>
                      <h6 className="text-500 mb-0">Social</h6>
                    </Col>
                    <Col xs={6} className="border-end py-3">
                      <h5 className="fw-normal text-600">$6.7k</h5>
                      <h6 className="text-500 mb-0">Call</h6>
                    </Col>
                    <Col xs={6} className="py-3">
                      <h5 className="fw-normal text-600">$2.3k</h5>
                      <h6 className="text-500 mb-0">Other</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xxl={9}>
              <Tab.Content>
                <Tab.Pane unmountOnExit eventKey="revenue">
                  <RevenueChart data={revenueChartData.dataset.revenue} />
                </Tab.Pane>
                <Tab.Pane unmountOnExit eventKey="users">
                  <RevenueChart data={revenueChartData.dataset.users} />
                </Tab.Pane>
                <Tab.Pane unmountOnExit eventKey="deals">
                  <RevenueChart data={revenueChartData.dataset.deals} />
                </Tab.Pane>
                <Tab.Pane unmountOnExit eventKey="profit">
                  <RevenueChart data={revenueChartData.dataset.profit} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default Revenue;

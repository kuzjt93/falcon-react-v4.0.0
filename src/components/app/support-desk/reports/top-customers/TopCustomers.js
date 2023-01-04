import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import React, { useState } from 'react';
import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { topCustomerData } from 'data/support-desk/reportsData';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoftBadge from 'components/common/SoftBadge';
import TopCustomerChart from './TopCustomerChart';
import FalconLink from 'components/common/FalconLink';

const NavItem = ({ item, index }) => {
  return (
    <Nav.Item as="li" className={index !== 6 && 'border-bottom'}>
      <Nav.Link className="p-x1 mb-0" eventKey={item.toLowerCase()}>
        {item}
      </Nav.Link>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

const TabItem = ({ percentage, count, data }) => {
  return (
    <>
      <Flex alignItems="center" className="gap-2 mb-4">
        <h4 className="text-primary mb-0">{percentage}</h4>
        <SoftBadge pill>
          <FontAwesomeIcon icon="caret-up" className="me-1" />
          <span>{count}</span>
        </SoftBadge>
      </Flex>
      <TopCustomerChart data={data} />
    </>
  );
};

TabItem.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  data: PropTypes.array.isRequired
};

const TopCustomers = () => {
  const [navItems] = useState([
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN'
  ]);
  return (
    <Card className="mt-3">
      <FalconCardHeader
        title="Analysis of the Top Customers"
        titleTag="h6"
        className="py-2 bg-light"
        endEl={<CardDropdown />}
      />
      <Card.Body className="ps-0 py-0">
        <Flex>
          <Tab.Container id="top-customer-tab" defaultActiveKey="mon">
            <Nav
              as="ul"
              className="nav-tabs tab-active-caret top-customers-tab border-0 border-end d-inline-block text-center"
            >
              {navItems.map((item, index) => (
                <NavItem item={item} index={index} key={index} />
              ))}
            </Nav>
            <Tab.Content className="ps-x1 pt-x1 w-100">
              <Tab.Pane unmountOnExit eventKey="mon">
                <TabItem
                  percentage="65.09%"
                  count="13.6%"
                  data={topCustomerData.monday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="tue">
                <TabItem
                  percentage="78.35%"
                  count="8.3%"
                  data={topCustomerData.tuesday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="wed">
                <TabItem
                  percentage="45.45%"
                  count="5.12%"
                  data={topCustomerData.wednesday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="thu">
                <TabItem
                  percentage="12.19%"
                  count="2.03%"
                  data={topCustomerData.thursday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="fri">
                <TabItem
                  percentage="80.09%"
                  count="11.6%"
                  data={topCustomerData.friday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="sat">
                <TabItem
                  percentage="55.05%"
                  count="5.55%"
                  data={topCustomerData.saturday}
                />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="sun">
                <TabItem
                  percentage="65.09%"
                  count="13.6%"
                  data={topCustomerData.sunday}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Flex>
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
            <FalconLink title="View all reports" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default TopCustomers;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inDepthItems } from 'data/support-desk/reportsData';
import React from 'react';
import { Card, Col, Form, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import SimpleBarReact from 'simplebar-react';
import PropTypes from 'prop-types';
import FalconLink from 'components/common/FalconLink';

const InDepthItem = ({ item, status }) => {
  return (
    <Row className="mt-2">
      <Col xs={3} sm={2} md={3} lg={2}>
        <p className="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">
          {item.name}
        </p>
      </Col>
      <Col xs={9} sm={10} md={9} lg={10} className="d-flex align-items-center">
        <ProgressBar
          now={
            status === 'created'
              ? item.progressbarWidth[0]
              : status === 'resolved'
              ? item.progressbarWidth[1]
              : status === 'reopened'
              ? item.progressbarWidth[2]
              : item.progressbarWidth[3]
          }
          className="w-100 animated-progress-bar"
          style={{
            height: '6px',
            '--falcon-progressbar-width': `${
              status === 'created'
                ? item.progressbarWidth[0]
                : status === 'resolved'
                ? item.progressbarWidth[1]
                : status === 'reopened'
                ? item.progressbarWidth[2]
                : item.progressbarWidth[3]
            }%`
          }}
        />
        <p className="mb-0 fs--1 ps-3 fw-semi-bold text-600">
          {status === 'created'
            ? item.progressbarWidth[0]
            : status === 'resolved'
            ? item.progressbarWidth[1]
            : status === 'reopened'
            ? item.progressbarWidth[2]
            : item.progressbarWidth[3]}
        </p>
      </Col>
    </Row>
  );
};

InDepthItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    progressbarWidth: PropTypes.array.isRequired
  }),
  status: PropTypes.string.isRequired
};

const TabItem = ({ status }) => {
  return (
    <>
      <Row className="mx-0 border-bottom border-dashed">
        <Col
          md={6}
          className="p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed"
        >
          <h6 className="fs--1 mb-3">Tickets {status} Split by Source</h6>
          {inDepthItems.slice(0, 4).map((item, index) => (
            <InDepthItem item={item} key={index} status={status} />
          ))}
        </Col>
        <Col md={6} className="p-x1">
          <h6 className="fs--1 mb-3">Tickets {status} Split by Priority</h6>
          {inDepthItems.slice(4, 8).map((item, index) => (
            <InDepthItem item={item} key={index} status={status} />
          ))}
        </Col>
      </Row>
      <Row className="mx-0">
        <Col
          md={6}
          className="p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed"
        >
          <h6 className="fs--1 mb-3">Tickets {status} Split by Status</h6>
          {inDepthItems.slice(8, 9).map((item, index) => (
            <InDepthItem item={item} key={index} status={status} />
          ))}
        </Col>
        <Col md={6} className="p-x1">
          <h6 className="fs--1 mb-3">Tickets {status} Split by Category</h6>
          {inDepthItems.slice(9, 10).map((item, index) => (
            <InDepthItem item={item} key={index} status={status} />
          ))}
        </Col>
      </Row>
    </>
  );
};

TabItem.propTypes = {
  status: PropTypes.string.isRequired
};

const IndepthHelpDesk = () => {
  return (
    <Card className="mt-3">
      <Tab.Container defaultActiveKey="tickets-created">
        <SimpleBarReact>
          <Card.Header className="p-0 bg-light">
            <Nav className="nav-tabs tab-tickets-status flex-nowrap border-0">
              <Nav.Item className="text-nowrap">
                <Nav.Link
                  eventKey="tickets-created"
                  className="mb-0 d-flex align-items-center gap-2 py-3 px-x1"
                >
                  <FontAwesomeIcon icon="ticket-alt" className="text-600" />
                  <h6 className="mb-0 text-600">
                    Tickets Created
                    <span> (25)</span>
                  </h6>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-nowrap">
                <Nav.Link
                  eventKey="tickets-resolved"
                  className="mb-0 d-flex align-items-center gap-2 py-3 px-x1"
                >
                  <FontAwesomeIcon icon="check" className="text-600" />
                  <h6 className="mb-0 text-600">Tickets Resolved</h6>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-nowrap">
                <Nav.Link
                  eventKey="tickets-reopened"
                  className="mb-0 d-flex align-items-center gap-2 py-3 px-x1"
                >
                  <FontAwesomeIcon
                    icon="envelope-open-text"
                    className="text-600"
                  />
                  <h6 className="mb-0 text-600">Tickets Reopened</h6>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-nowrap">
                <Nav.Link
                  eventKey="tickets-unsolved"
                  className="mb-0 d-flex align-items-center gap-2 py-3 px-x1"
                >
                  <FontAwesomeIcon
                    icon="exclamation-triangle"
                    className="text-600"
                  />
                  <h6 className="mb-0 text-600">Tickets Unsolved</h6>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
        </SimpleBarReact>
        <Card.Body className="p-0">
          <Tab.Content>
            <Tab.Pane eventKey="tickets-created">
              <TabItem status="created" />
            </Tab.Pane>
            <Tab.Pane eventKey="tickets-resolved">
              <TabItem status="resolved" />
            </Tab.Pane>
            <Tab.Pane eventKey="tickets-reopened">
              <TabItem status="reopened" />
            </Tab.Pane>
            <Tab.Pane eventKey="tickets-unsolved">
              <TabItem status="unsolved" />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
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
            <FalconLink title="View all" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default IndepthHelpDesk;

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import Flex from 'components/common/Flex';
import FalconLink from 'components/common/FalconLink';
import SessionByBrowserChart from './SessionByBrowserChart';
import TableRow from './TableRow';

const SessionByBrowser = ({ data }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Session By Browser"
        titleTag="h6"
        className="py-2"
        light
        endEl={<CardDropdown />}
      />
      <Card.Body
        as={Flex}
        direction="column"
        justifyContent="between"
        className="py-0"
      >
        <div className="my-auto py-5 py-md-5">
          <SessionByBrowserChart data={data} />
        </div>
        <div className="border-top">
          <Table size="sm" className="mb-0">
            <tbody>
              {data.map(item => (
                <TableRow key={item.label} data={item} />
              ))}
            </tbody>
          </Table>
        </div>
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

SessionByBrowser.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(TableRow.propTypes.data)).isRequired
};

export default SessionByBrowser;

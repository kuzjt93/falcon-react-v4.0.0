import React from 'react';
import { reports } from 'data/support-desk/quickLinksData';
import { Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';

const ReportsItem = ({ report }) => {
  return (
    <Col lg={6} xxl={4}>
      <Flex
        alignItems="center"
        className="px-4 py-x1 bg-light rounded-3 border position-relative"
      >
        <img src={report.img} alt="" width="39" />
        <div className="ms-3 my-x1">
          <h5 className="fs-0 fw-semi-bold mb-2">
            <a href="#!" className="text-900 hover-primary stretched-link">
              {report.title}
            </a>
          </h5>
          <h6 className="mb-0 text-600">{report.description}</h6>
        </div>
      </Flex>
    </Col>
  );
};

ReportsItem.propTypes = {
  report: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

const Reports = () => {
  return (
    <Card>
      <Card.Header className="bg-light">
        <h6 className="mb-0">Reports</h6>
      </Card.Header>
      <Card.Body>
        <h5 className="fs-0 mb-2">Analysis of the Helpdesk</h5>
        <Row className="g-3">
          {reports.analysis.map((report, index) => (
            <ReportsItem key={index} report={report} />
          ))}
        </Row>
        <h5 className="fs-0 mb-2 mt-5">Customer Satisfaction</h5>
        <Row className="g-3">
          {reports.customerSatisfaction.map((report, index) => (
            <ReportsItem key={index} report={report} />
          ))}
        </Row>
        <h5 className="fs-0 mb-2 mt-5">Productivity</h5>
        <Row className="g-3">
          {reports.productivity.map((report, index) => (
            <ReportsItem key={index} report={report} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Reports;

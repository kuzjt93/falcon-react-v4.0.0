import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import TotalSalesChart from './TotalSalesChart';

const TotalSales = ({ data }) => {
  const chartRef = useRef(null);

  const handleLegendToggle = name => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name
    });
  };

  return (
    <Card>
      <Card.Header>
        <Row className="flex-between-center g-0">
          <Col xs="auto">
            <h6 className="mb-0">Total Sales</h6>
          </Col>
          <Col xs="auto" className="d-flex">
            <Form.Check
              type="checkbox"
              id="ecommerceLastMonth"
              className="mb-0 d-flex"
            >
              <Form.Check.Input
                type="checkbox"
                className="form-check-input-primary"
                onClick={() => handleLegendToggle('lastMonth')}
                defaultChecked
              />
              <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                Last Month:
                <span className="text-dark d-none d-md-inline">
                  {' '}
                  $32,502.00
                </span>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check
              type="checkbox"
              id="ecommercePrevYear"
              className="mb-0 d-flex ps-0 ps-md-3"
            >
              <Form.Check.Input
                type="checkbox"
                className="ms-2 form-check-input-warning opacity-75"
                onClick={() => handleLegendToggle('previousYear')}
                defaultChecked
              />
              <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                Prev Year:
                <span className="text-dark d-none d-md-inline">
                  {' '}
                  $46,018.00
                </span>
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <Col xs="auto">
            <CardDropdown />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pe-xxl-0">
        <TotalSalesChart
          data={data}
          ref={chartRef}
          style={{ height: '18.625rem' }}
        />
      </Card.Body>
    </Card>
  );
};

TotalSales.propTypes = {
  data: PropTypes.shape({
    lastMonth: PropTypes.array,
    previousYear: PropTypes.array
  })
};

export default TotalSales;

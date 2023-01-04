import React from 'react';
import { Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FalconLink from 'components/common/FalconLink';
import FalconCardHeader from 'components/common/FalconCardHeader';
import MarketingExpensesChart from './MarketingExpensesChart';
import MarketingExpensesList from './MarketingExpensesList';

const MarketingExpenses = ({ listData }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Marketing Expenses"
        titleTag="h6"
        className="bg-light py-2"
        endEl={
          <FalconLink
            title="Full Report"
            icon="external-link-alt"
            className="px-0 fw-medium"
          />
        }
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <MarketingExpensesChart />
        <MarketingExpensesList data={listData} />
      </Card.Body>

      <Card.Footer className="bg-light py-2 d-flex">
        <div className="ms-auto">
          <Form.Select size="sm" className="me-2">
            <option>Last 7 days</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </Form.Select>
        </div>
      </Card.Footer>
    </Card>
  );
};

MarketingExpenses.propTypes = {
  listData: PropTypes.shape({
    digitalMarketing: PropTypes.arrayOf(PropTypes.object),
    offlineMarketing: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default MarketingExpenses;

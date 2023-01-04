import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { Link } from 'react-router-dom';
import AdvanceTableSearchBox from 'components/common/advance-table/AdvanceTableSearchBox';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const columns = [
  {
    accessor: 'path',
    Header: 'Page Path',
    Cell: rowData => (
      <Link to="#!" className="text-primary fw-semi-bold">
        {rowData.row.original.path}
      </Link>
    )
  },
  {
    accessor: 'views',
    Header: 'Page Views',
    headerProps: {
      className: 'text-end'
    },
    cellProps: {
      className: 'text-end'
    }
  },
  {
    accessor: 'time',
    Header: 'Avg Time on Page',
    headerProps: {
      className: 'text-end'
    },
    cellProps: {
      className: 'text-end'
    }
  },
  {
    accessor: 'exitRate',
    Header: 'Exit Rate',
    headerProps: {
      className: 'text-end'
    },
    cellProps: {
      className: 'text-end'
    }
  }
];

const TopPages = ({ tableData, perPage = 8 }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={tableData}
      sortable
      pagination
      perPage={perPage}
    >
      <Card className="h-100">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={6} lg={7}>
              <h6 className="mb-0 text-nowrap py-2 py-xl-0">
                What are my top pages today?
              </h6>
            </Col>
            <Col xs="auto" sm={6} lg={5}>
              <AdvanceTableSearchBox table placeholder="Search for a page" />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <Card.Footer>
          <AdvanceTableFooter
            rowCount={tableData.length}
            table
            rowInfo
            navButtons
          />
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

TopPages.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      exitRate: PropTypes.string.isRequired
    })
  ).isRequired,
  perPage: PropTypes.number
};

export default TopPages;

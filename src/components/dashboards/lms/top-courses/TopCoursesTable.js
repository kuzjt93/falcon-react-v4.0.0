import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardDropdown from 'components/common/CardDropdown';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';

const columns = [
  {
    accessor: 'title',
    Header: 'Course Title',
    headerProps: { className: 'pe-1 fw-medium' },
    Cell: rowData => {
      const { title } = rowData.row.original;
      return <Link to="/e-learning/course/course-details">{title}</Link>;
    }
  },
  {
    accessor: 'trainer',
    Header: 'Trainer',
    headerProps: {
      className: 'pe-7 fw-medium'
    },
    Cell: rowData => {
      const { trainer } = rowData.row.original;
      return (
        <Link to="/e-learning/trainer-profile" className="text-800">
          {trainer}
        </Link>
      );
    }
  },
  {
    accessor: 'published',
    Header: 'Published on',
    headerProps: {
      className: 'text-end fw-medium'
    },
    cellProps: {
      className: 'text-end'
    }
  },
  {
    accessor: 'enrolled',
    Header: 'Enrolled',
    headerProps: {
      className: 'text-end fw-medium'
    },
    cellProps: {
      className: 'text-end'
    }
  },
  {
    accessor: 'price',
    Header: 'Price',
    headerProps: {
      className: 'text-end fw-medium'
    },
    cellProps: {
      className: 'text-end'
    }
  },
  {
    accessor: 'none',
    Header: '',
    disableSortBy: true,
    cellProps: {
      className: 'text-end'
    },
    Cell: () => {
      return (
        <CardDropdown iconClassName="fs--1" drop="start">
          <div className="py-2">
            <Dropdown.Item href="#!">View</Dropdown.Item>
            <Dropdown.Item href="#!">Edit</Dropdown.Item>
            <Dropdown.Item href="#!">Refund</Dropdown.Item>
            <Dropdown.Divider as="div" />
            <Dropdown.Item href="#!" className="text-warning">
              Archive
            </Dropdown.Item>
            <Dropdown.Item href="#!" className="text-danger">
              Delete
            </Dropdown.Item>
          </div>
        </CardDropdown>
      );
    }
  }
];

const TopCoursesTable = ({ tableData }) => {
  const [data] = useState(tableData);
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      sortable
      rowCount={data.length}
    >
      <AdvanceTable
        table
        headerClassName="bg-200 text-900 text-nowrap align-middle font-sans-serif"
        rowClassName="btn-reveal-trigger text-nowrap align-middle"
        tableProps={{
          className: 'fs--1 fw-semi-bold mb-0 overflow-hidden'
        }}
      />
    </AdvanceTableWrapper>
  );
};

TopCoursesTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TopCoursesTable;

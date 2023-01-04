import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Dropdown, ProgressBar } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';

const columns = [
  {
    accessor: 'title',
    Header: 'Course Title',
    cellProps: {
      className: 'white-space-nowrap',
      style: { maxWidth: '23rem' }
    },
    Cell: rowData => (
      <Flex alignItems="center" className="gap-3 position-relative">
        <img
          className="rounded-1 border border-200"
          src={rowData.row.original.image}
          width={60}
          alt={rowData.row.original.title}
        />
        <Link
          className="text-truncate stretched-link"
          to="/e-learning/course/course-details"
        >
          {rowData.row.original.title}
        </Link>
      </Flex>
    )
  },
  {
    accessor: 'trainer',
    Header: 'Trainer',
    headerProps: {
      className: 'fw-medium'
    },
    Cell: rowData => (
      <Link className="text-800" to="/e-learning/trainer-profile">
        {rowData.row.original.trainer}
      </Link>
    )
  },
  {
    accessor: 'enrollmentDate',
    Header: 'Enrollment',
    headerProps: {
      className: 'fw-medium'
    }
  },
  {
    accessor: 'worked',
    Header: 'Worked',
    headerProps: {
      className: 'fw-medium'
    }
  },
  {
    accessor: 'progress',
    Header: 'Progress',
    headerProps: {
      className: 'fw-medium'
    },
    Cell: rowData => (
      <ProgressBar
        className="me-3 bg-200 rounded-pill"
        now={rowData.row.original.progress}
        style={{ width: 80, height: 5 }}
      />
    )
  },
  {
    accessor: 'price',
    Header: 'Price',
    headerProps: {
      className: 'fw-medium text-end'
    },
    cellProps: {
      className: 'text-end'
    },
    Cell: rowData => `${rowData.row.original.price}`
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

const EnrolledCourses = ({ tableData, perPage = 6 }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={tableData}
      sortable
      pagination
      perPage={perPage}
    >
      <Card className="h-100">
        <Card.Header className="d-flex flex-between-center">
          <h6 className="mb-0">Enrolled Courses</h6>
          <div>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="filter"
              className="me-2"
            >
              <span className="d-none d-sm-inline-block">Filter</span>
            </IconButton>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="expand-arrows-alt"
            >
              <span className="d-none d-sm-inline-block">Expand</span>
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-light text-900 fw-medium font-sans-serif white-space-nowrap"
            rowClassName="btn-reveal-trigger align-middle white-space-nowrap"
            tableProps={{
              className: 'fs--1 mb-0 overflow-hidden fw-semi-bold'
            }}
          />
        </Card.Body>
        <FalconCardFooterLink title="Show all enrollments" size="sm" />
      </Card>
    </AdvanceTableWrapper>
  );
};

EnrolledCourses.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      trainer: PropTypes.string.isRequired,
      enrollmentDate: PropTypes.string.isRequired,
      worked: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  perPage: PropTypes.number
};

export default EnrolledCourses;

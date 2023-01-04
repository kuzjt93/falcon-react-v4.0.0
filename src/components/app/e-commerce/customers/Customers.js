import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { customersData } from 'data/ecommerce/customersData';
import CardDropdown from 'components/common/CardDropdown';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import Avatar from 'components/common/Avatar';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import CustomersTableHeader from './CustomersTableHeader';
import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';

const columns = [
  {
    accessor: 'name',
    Header: 'Name',
    headerProps: { className: 'pe-1' },
    cellProps: {
      className: 'py-2'
    },
    Cell: rowData => {
      const { name, avatar } = rowData.row.original;
      return (
        <Link to="/e-commerce/customer-details">
          <Flex alignItems="center">
            {avatar.img ? (
              <Avatar src={avatar.img} size="xl" className="me-2" />
            ) : (
              <Avatar size="xl" name={avatar.name} className="me-2" />
            )}
            <div className="flex-1">
              <h5 className="mb-0 fs--1">{name}</h5>
            </div>
          </Flex>
        </Link>
      );
    }
  },
  {
    accessor: 'email',
    Header: 'Email',
    Cell: rowData => {
      const { email } = rowData.row.original;
      return <a href={`mailto:${email}`}>{email}</a>;
    }
  },
  {
    accessor: 'phone',
    Header: 'Phone',
    Cell: rowData => {
      const { phone } = rowData.row.original;
      return <a href={`tel:${phone}`}>{phone}</a>;
    }
  },
  {
    accessor: 'address',
    Header: 'Billing Address',
    headerProps: { style: { minWidth: '200px' }, className: 'ps-5' },
    cellProps: { className: 'ps-5' }
  },
  {
    accessor: 'joined',
    Header: 'Joined'
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
        <CardDropdown iconClassName="fs--1">
          <div className="py-2">
            <Dropdown.Item href="#!">Edit</Dropdown.Item>
            <Dropdown.Item href="#!">Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      );
    }
  }
];

const Customers = () => {
  const [customers] = useState(customersData);
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={customers}
      selection
      sortable
      pagination
      perPage={10}
    >
      <Card className="mb-3">
        <Card.Header>
          <CustomersTableHeader table />
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              size: 'sm',
              striped: true,
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <Card.Footer>
          <AdvanceTablePagination table />
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

export default Customers;

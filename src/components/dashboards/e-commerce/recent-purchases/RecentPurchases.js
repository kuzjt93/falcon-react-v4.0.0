import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoftBadge from 'components/common/SoftBadge';
import { Link } from 'react-router-dom';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { recentPurchaseTableData } from 'data/dashboard/ecom';
import RecentPurchasesHeader from './RecentPurchasesHeader';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const columns = [
  {
    accessor: 'customer',
    Header: 'Customer',
    headerProps: { className: 'pe-1' },
    cellProps: {
      className: 'fw-semi-bold'
    },
    Cell: rowData => {
      const { customer } = rowData.row.original;
      return <Link to="/e-commerce/customer-details">{customer}</Link>;
    }
  },
  {
    accessor: 'email',
    Header: 'Email',
    headerProps: { className: 'pe-7' }
  },
  {
    accessor: 'product',
    Header: 'Product'
  },
  {
    accessor: 'payment',
    Header: 'Payment',

    headerProps: { className: 'text-center' },
    cellProps: {
      className: 'fs-0'
    },
    Cell: rowData => {
      const { status } = rowData.row.original;
      return (
        <SoftBadge pill bg={status.type} className="d-block">
          {status.content}
          <FontAwesomeIcon
            icon={status.icon}
            transform="shrink-2"
            className="ms-1"
          />
        </SoftBadge>
      );
    }
  },
  {
    accessor: 'amount',
    Header: 'Amount',
    headerProps: {
      className: 'text-end'
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
      className: 'text-end py-2'
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

const RecentPurchases = () => {
  const [data] = useState(recentPurchaseTableData);
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      selection
      sortable
      pagination
      perPage={7}
      rowCount={data.length}
    >
      <Card>
        <Card.Header>
          <RecentPurchasesHeader table />
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="btn-reveal-trigger text-nowrap align-middle"
            tableProps={{
              size: 'sm',
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <Card.Footer>
          <AdvanceTableFooter rowCount={data.length} table rowInfo navButtons />
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

export default RecentPurchases;

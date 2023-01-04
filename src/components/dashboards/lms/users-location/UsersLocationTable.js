import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import SoftBadge from 'components/common/SoftBadge';

const columns = [
  {
    accessor: 'country',
    Header: 'Country',
    cellProps: { className: 'py-3' },
    headerProps: { style: { width: '40%' } },
    Cell: rowData => {
      const { country } = rowData.row.original;
      return <Link to="#!">{country}</Link>;
    }
  },
  {
    accessor: 'users',
    Header: 'User Count',
    cellProps: { className: 'text-end' },
    headerProps: { className: 'text-end' }
  },
  {
    accessor: 'revenue',
    Header: 'Revenue',
    cellProps: { className: 'text-end' },
    headerProps: { className: 'text-end' }
  },
  {
    accessor: 'language',
    Header: 'Language Support',
    cellProps: { className: 'text-end' },
    headerProps: { className: 'text-end' },
    Cell: rowData => {
      return (
        <SoftBadge
          pill
          bg={rowData.row.original.variant}
          className="me-2 fs--2 fw-medium"
        >
          {rowData.row.original.status}
        </SoftBadge>
      );
    }
  }
];

const UsersLocationTable = ({ data }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      sortable
      pagination
      perPage={4}
    >
      <div className="mx-ncard mt-3">
        <AdvanceTable
          table
          headerClassName="bg-200 text-800 text-nowrap align-middle font-sans-serif"
          rowClassName="align-middle white-space-nowrap fw-semi-bold"
          tableProps={{
            className: 'fs--1 mb-0'
          }}
        />
      </div>
    </AdvanceTableWrapper>
  );
};

UsersLocationTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default UsersLocationTable;

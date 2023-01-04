import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';

const columns = [
  {
    accessor: 'country',
    Header: 'Country',
    cellProps: {
      className: 'py-3'
    },
    Cell: rowData => (
      <Link to="#!">
        <Flex alignItems="center">
          <img src={rowData.data[rowData.row.index].flag} alt="..." />
          <p className="mb-0 ps-3 country text-700">
            {rowData.data[rowData.row.index].country}
          </p>
        </Flex>
      </Link>
    )
  },
  {
    accessor: 'sessions',
    Header: 'Sessions',
    cellProps: {
      className: 'fw-semi-bold'
    }
  },
  {
    accessor: 'users',
    Header: 'Users'
  },
  {
    accessor: 'percentage',
    Header: 'Percentage',
    disableSortBy: true,
    headerProps: {
      className: 'text-end',
      style: {
        width: '9.625rem'
      }
    },
    Cell: rowData => (
      <Flex alignItems="center" justifyContent="end">
        <p className="mb-0 me-2">
          {rowData.data[rowData.row.index].percentage}%
        </p>
        <ProgressBar
          now={rowData.data[rowData.row.index].percentage}
          style={{ height: '0.3125rem', width: '3.8rem' }}
        />
      </Flex>
    )
  }
];

const LocationBySessionTable = ({ data }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      sortable
      pagination
      perPage={3}
    >
      <div className="mx-ncard mt-3">
        <AdvanceTable
          table
          headerClassName="bg-200 text-800 text-nowrap align-middle"
          rowClassName="align-middle white-space-nowrap"
          tableProps={{
            className: 'fs--1 mb-0'
          }}
        />
      </div>
    </AdvanceTableWrapper>
  );
};

LocationBySessionTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default LocationBySessionTable;

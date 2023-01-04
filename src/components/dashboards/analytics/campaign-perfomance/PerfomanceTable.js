import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import SimpleBarReact from 'simplebar-react';

const PerfomanceTableRow = ({ campaigns, cost, revenue }) => {
  return (
    <tr>
      <td className="text-truncate">{campaigns}</td>
      <td className="text-truncate text-end">${cost}</td>
      <td className="text-truncate text-end">${revenue}</td>
    </tr>
  );
};

PerfomanceTableRow.propTypes = {
  campaigns: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired
};

const PerfomanceTable = ({ data }) => {
  return (
    <SimpleBarReact>
      <Table className="fs--1 mb-0 overflow-hidden">
        <thead className="bg-100 text-800">
          <tr>
            <th className="text-nowrap">Top Campaigns</th>
            <th className="text-nowrap text-end">Cost</th>
            <th className="text-nowrap text-end">Revenue from Ads</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <PerfomanceTableRow
              key={item.id}
              campaigns={item.campaigns}
              cost={item.cost}
              revenue={item.revenue}
            />
          ))}
        </tbody>
      </Table>
    </SimpleBarReact>
  );
};

PerfomanceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(PerfomanceTableRow.propTypes))
    .isRequired
};

export default PerfomanceTable;

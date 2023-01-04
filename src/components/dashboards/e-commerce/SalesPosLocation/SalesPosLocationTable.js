import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SalesPosLocationTable = () => {
  return (
    <Table size="sm" borderless className="font-sans-serif fw-medium fs--1">
      <tbody>
        <tr>
          <td>
            <FontAwesomeIcon
              className="fs--2 me-1 text-primary"
              icon="circle"
            />
            Allocated Budget
          </td>
          <td className=" text-end"> $13,325.98 </td>
          <td className=" text-end">
            <FontAwesomeIcon
              className={`fs--2 me-1 text-success`}
              icon="caret-up"
            />
            10%
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon
              className="fs--2 me-1 text-warning"
              icon="circle"
            />
            Actual Spending
          </td>
          <td className="text-end"> $12,348.46 </td>
          <td className="text-end">
            <FontAwesomeIcon
              className="fs--2 me-1 text-danger"
              icon="caret-down"
            />
            13%
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SalesPosLocationTable;

import React from 'react';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const getTotal = (data, key) =>
  data.reduce((acc, val) => acc + Number(val[key]), 0);

const DealForeCastTableRow = ({ item, isLast }) => {
  return (
    <tr>
      <td
        className={classNames(
          'align-middle font-sans-serif fw-medium text-nowrap',
          {
            'border-bottom-0': isLast
          }
        )}
      >
        <Link to="/e-commerce/customer-details">{item.owner}</Link>
      </td>
      <td
        className={classNames('align-middle text-center', {
          'border-bottom-0': isLast
        })}
      >
        {item.qualifiedItem}
      </td>
      <td
        className={classNames('align-middle text-center', {
          'border-bottom-0': isLast
        })}
      >
        {item.appointment}
      </td>
      <td
        className={classNames('align-middle text-center', {
          'border-bottom-0': isLast
        })}
      >
        {item.contactSent}
      </td>
      <td
        className={classNames('align-middle text-end', {
          'border-bottom-0': isLast
        })}
      >
        {item.closedWon}
      </td>
    </tr>
  );
};
const DealForeCastTable = ({ data }) => {
  return (
    <SimpleBarReact>
      <Table className="fs--1 mb-0">
        <thead className="bg-200 text-800">
          <tr>
            <th className="text-nowrap">Owner</th>
            <th className="text-nowrap text-center">Qualified to buy</th>
            <th className="text-nowrap text-center">Appointment</th>
            <th className="text-nowrap text-center">Contact sent</th>
            <th className="text-nowrap text-end">Closed won</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <DealForeCastTableRow
              key={item.id}
              item={item}
              isLast={data.length - 1 === index}
            />
          ))}
        </tbody>
        <tfoot className="bg-light">
          <tr className="text-700 fw-bold">
            <th>Total</th>
            <th className="text-center">${getTotal(data, 'qualifiedItem')}</th>
            <th className="text-center">${getTotal(data, 'appointment')}</th>
            <th className="text-center">${getTotal(data, 'contactSent')}</th>
            <th className="pe-x1 text-end">${getTotal(data, 'closedWon')}</th>
          </tr>
        </tfoot>
      </Table>
    </SimpleBarReact>
  );
};

DealForeCastTableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    owner: PropTypes.string.isRequired,
    qualifiedItem: PropTypes.number.isRequired,
    appointment: PropTypes.number.isRequired,
    closedWon: PropTypes.number.isRequired,
    contactSent: PropTypes.number.isRequired
  }),
  isLast: PropTypes.bool.isRequired
};

DealForeCastTable.propTypes = {
  data: PropTypes.arrayOf(DealForeCastTableRow.propTypes.item)
};

export default DealForeCastTable;

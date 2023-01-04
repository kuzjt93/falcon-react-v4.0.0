import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Image, Row, Table } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import SoftBadge from 'components/common/SoftBadge';
import SimpleBarReact from 'simplebar-react';
import FalconLink from 'components/common/FalconLink';

const TransactionItem = ({
  summary: { img, title, subtitle, status, amount, date },
  isLast
}) => {
  return (
    <tr className={classNames({ 'border-0': isLast })}>
      <td
        className={classNames('align-middle ps-0 text-nowrap', {
          'border-0': isLast
        })}
      >
        <Flex alignItems="center" className="position-relative">
          <Image src={img} alt={title} className="me-2" width={30} />
          <div className="flex-1">
            <Link to="#!" className="stretched-link">
              <h6 className="mb-0">{title}</h6>
            </Link>
            <p className="mb-0">{subtitle}</p>
          </div>
        </Flex>
      </td>
      <td
        className={classNames('align-middle px-4', { 'border-0': isLast })}
        style={{ width: '1%' }}
      >
        <SoftBadge
          bg={classNames({
            success: status === 'Completed',
            warning: status === 'Pending',
            danger: status === 'Rejected'
          })}
          className="fs--1 w-100"
        >
          {status}
        </SoftBadge>
      </td>
      <td
        className={classNames('align-middle px-4 text-end text-nowrap', {
          'border-0': isLast
        })}
        style={{ width: '1%' }}
      >
        <h6 className="mb-0">{amount}</h6>
        <p className="fs--2 mb-0">{date}</p>
      </td>
      <td
        className={classNames('align-middle ps-4 pe-1', { 'border-0': isLast })}
        style={{ width: '130px', minWidth: '130px' }}
      >
        <Form.Select size="sm" className="px-2 bg-transparent">
          <option value="action">Action</option>
          <option value="archive">Archive</option>
          <option value="delete">Delete</option>
        </Form.Select>
      </td>
    </tr>
  );
};

const TransactionSummary = ({ data: transactions }) => {
  return (
    <Card className="overflow-hidden">
      <FalconCardHeader
        title="Transaction Summary"
        titleTag="h6"
        className="py-2"
        light
        endEl={<CardDropdown />}
      />
      <Card.Body className="py-0">
        <SimpleBarReact>
          <Table className="table-dashboard mb-0 fs--1">
            <tbody>
              {transactions.map((item, index) => (
                <TransactionItem
                  key={item.id}
                  index={index}
                  isLast={index === transactions.length - 1}
                  summary={item}
                />
              ))}
            </tbody>
          </Table>
        </SimpleBarReact>
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm">
              <option value="last 7 days">Last 7 days</option>
              <option value="last month">Last Month</option>
              <option value="last year">Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="View All" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

TransactionItem.propTypes = {
  summary: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    date: PropTypes.string.isRequired
  }),
  isLast: PropTypes.bool.isRequired
};

TransactionSummary.propTypes = {
  data: PropTypes.arrayOf(TransactionItem.propTypes.summary)
};

export default TransactionSummary;

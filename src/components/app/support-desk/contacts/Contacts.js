import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { contacts } from 'data/support-desk/contactsData';
import React, { useState } from 'react';
import { Card, Col, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactsHeader from './ContactsHeader';
import ContactsFilteringForm from './ContactsFilteringForm';
import { useBreakpoints } from 'hooks/useBreakpoints';

const columns = [
  {
    accessor: 'name',
    Header: 'Name',
    headerProps: { className: 'ps-2', style: { height: '46px' } },
    cellProps: {
      className: 'white-space-nowrap pe-5 ps-2 py-2'
    },
    Cell: rowData => {
      const { name, avatar } = rowData.row.original;
      return (
        <Flex alignItems="center" className="position-relative py-1">
          {avatar.img ? (
            <Avatar src={avatar.img} size="xl" className="me-2" />
          ) : (
            <Avatar size="xl" name={avatar.name} className="me-2" />
          )}
          <h6 className="mb-0">
            <Link
              to="/support-desk/contact-details"
              className="stretched-link text-900"
            >
              {name}
            </Link>
          </h6>
        </Flex>
      );
    }
  },
  {
    accessor: 'phone',
    Header: 'Phone Number',
    headerProps: { className: 'pe-5 white-space-nowrap' },
    cellProps: { className: 'font-sans-serif white-space-nowrap' },
    Cell: rowData => {
      const { phone } = rowData.row.original;
      return (
        <a className="text-700" href={`tel:${phone.replace(/\s+/g, '')}`}>
          {phone}
        </a>
      );
    }
  },
  {
    accessor: 'report',
    Header: 'Name of the report',
    cellProps: {
      className: 'white-space-nowrap pe-5'
    },
    Cell: rowData => {
      const { report } = rowData.row.original;
      return <Link to="#!">{report}</Link>;
    }
  },
  {
    accessor: 'subscription',
    Header: 'Subscription',
    headerProps: { className: 'text-end white-space-nowrap' },
    cellProps: {
      className: 'font-sans-serif fs-0 text-end'
    },
    Cell: rowData => {
      const { subscription } = rowData.row.original;
      return subscription ? (
        <SoftBadge bg={subscription.type}>{subscription.content}</SoftBadge>
      ) : (
        <p className="mb-0 text-500 font-sans-serif fs--1">N/A</p>
      );
    }
  },
  {
    accessor: 'social',
    Header: 'Social',
    headerProps: { className: 'text-end' },
    cellProps: { className: 'ps-4 text-end' },
    Cell: rowData => {
      const { social } = rowData.row.original;
      return social ? (
        <a href="#!">{social}</a>
      ) : (
        <p className="mb-0 text-500">N/A</p>
      );
    }
  }
];

const Contacts = () => {
  const [show, setShow] = useState(false);
  const { breakpoints } = useBreakpoints();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row className="gx-3">
      <Col xxl={10} xl={9}>
        <AdvanceTableWrapper
          columns={columns}
          data={contacts}
          selection
          selectionColumnWidth={52}
          sortable
          pagination
          perPage={11}
          rowCount={contacts.length}
        >
          <Card>
            <Card.Header className="px-0">
              <ContactsHeader table handleShow={handleShow} />
            </Card.Header>
            <Card.Body className="p-0">
              <AdvanceTable
                table
                headerClassName="bg-light text-800 align-middle"
                rowClassName="btn-reveal-trigger align-middle"
                tableProps={{
                  size: 'sm',
                  className: 'fs--1 mb-0 overflow-hidden'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <AdvanceTablePagination table />
            </Card.Footer>
          </Card>
        </AdvanceTableWrapper>
      </Col>
      <Col xxl={2} xl={3}>
        {breakpoints.down('xl') ? (
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="dark__bg-card-dark"
          >
            <Offcanvas.Header closeButton className="bg-light">
              <h6 className="fs-0 mb-0 fw-semi-bold">Filter</h6>
            </Offcanvas.Header>
            <ContactsFilteringForm />
          </Offcanvas>
        ) : (
          <ContactsFilteringForm />
        )}
      </Col>
    </Row>
  );
};

export default Contacts;

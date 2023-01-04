import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import React, { useState } from 'react';
import { Card, Col, Offcanvas, Row } from 'react-bootstrap';
import { tickets } from 'data/dashboard/support-desk';
import { columns } from 'components/dashboards/support-desk/unsolved-tickets/TicketsLayout';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
import AllTicketsHeader from './AllTicketsHeader';
import TicketFilteringForm from './TicketFilteringForm';
import { useBreakpoints } from 'hooks/useBreakpoints';

const TableView = () => {
  const [show, setShow] = useState(false);
  const { breakpoints } = useBreakpoints();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row className="gx-3">
      <Col xxl={10} xl={9}>
        <AdvanceTableWrapper
          columns={columns}
          data={tickets}
          selection
          selectionColumnWidth={52}
          sortable
          pagination
          perPage={11}
          rowCount={tickets.length}
        >
          <Card>
            <Card.Header className="border-bottom border-200 px-0">
              <AllTicketsHeader
                table
                layout="table-view"
                handleShow={handleShow}
              />
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
            <TicketFilteringForm />
          </Offcanvas>
        ) : (
          <TicketFilteringForm />
        )}
      </Col>
    </Row>
  );
};

export default TableView;

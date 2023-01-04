import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { CardLayout } from 'components/dashboards/support-desk/unsolved-tickets/TicketsLayout';
import { tickets } from 'data/dashboard/support-desk';
import { useBreakpoints } from 'hooks/useBreakpoints';
import useBulkSelect from 'hooks/useBulkSelect';
import usePagination from 'hooks/usePagination';
import React, { useState } from 'react';
import { Button, Card, Col, Offcanvas, Row } from 'react-bootstrap';
import AllTicketsHeader from './AllTicketsHeader';
import TicketFilteringForm from './TicketFilteringForm';

const CardView = () => {
  const [show, setShow] = useState(false);
  const { breakpoints } = useBreakpoints();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ticketIds = tickets.map(ticket => ticket.id);
  const { selectedItems, isSelectedItem, toggleSelectedItem } =
    useBulkSelect(ticketIds);
  const [allTickets] = useState(tickets.slice(0, 21));
  const [primaryTickets, setPrimaryTickets] = useState(allTickets);
  const {
    paginationState: {
      data: paginatedTicket,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray
    },
    nextPage,
    prevPage,
    goToPage
  } = usePagination(primaryTickets, 7);

  const handleTicketsSearch = text => {
    const filteredTickets = allTickets.filter(
      ticket =>
        ticket.name.toLowerCase().includes(text.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(text.toLowerCase())
    );
    setPrimaryTickets(filteredTickets);
  };

  return (
    <Row className="gx-3">
      <Col xxl={10} xl={9}>
        <Card>
          <Card.Header className="border-bottom border-200 px-0">
            <AllTicketsHeader
              layout="card-view"
              handleShow={handleShow}
              selectedItems={selectedItems}
              handleTicketsSearch={handleTicketsSearch}
            />
          </Card.Header>
          <Card.Body className="bg-light">
            <CardLayout
              data={paginatedTicket}
              isSelectedItem={isSelectedItem}
              toggleSelectedItem={toggleSelectedItem}
            />
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center">
            <div>
              <Button
                variant="falcon-default"
                size="sm"
                className={classNames('me-2', { disabled: !canPreviousPage })}
                onClick={prevPage}
              >
                <FontAwesomeIcon icon="chevron-left" />
              </Button>
            </div>

            <ul className="pagination mb-0">
              {paginationArray.map(page => (
                <li
                  key={page}
                  className={classNames({ active: currentPage === page })}
                >
                  <Button
                    size="sm"
                    variant="falcon-default"
                    className="page me-2"
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </Button>
                </li>
              ))}
            </ul>
            <div>
              <Button
                variant="falcon-default"
                size="sm"
                className={classNames({ disabled: !canNextPage })}
                onClick={nextPage}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </Button>
            </div>
          </Card.Footer>
        </Card>
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

export default CardView;

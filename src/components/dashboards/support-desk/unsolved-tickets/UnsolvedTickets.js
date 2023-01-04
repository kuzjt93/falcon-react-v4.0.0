import React, { useState } from 'react';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import { Button, Card } from 'react-bootstrap';
import UnsolvedTicketsHeader from './UnsolvedTicketsHeader';
import { columns, CardLayout } from './TicketsLayout';
import PropTypes from 'prop-types';
import useBulkSelect from 'hooks/useBulkSelect';
import usePagination from 'hooks/usePagination';
import Flex from 'components/common/Flex';

const UnsolvedTickets = ({ data }) => {
  const [layout, setLayout] = useState('tableView');
  const ticketIds = data.map(ticket => ticket.id);
  const { selectedItems, isSelectedItem, toggleSelectedItem } =
    useBulkSelect(ticketIds);
  const [tickets] = useState(data.slice(0, 12));
  const [primaryTickets, setPrimaryTickets] = useState(tickets);
  const {
    paginationState: {
      data: paginatedTicket,
      totalItems,
      canNextPage,
      canPreviousPage,
      from,
      to
    },
    nextPage,
    prevPage
  } = usePagination(primaryTickets, 6);

  const handleTicketsSearch = text => {
    const filteredTickets = tickets.filter(
      ticket =>
        ticket.name.toLowerCase().includes(text.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(text.toLowerCase())
    );
    setPrimaryTickets(filteredTickets);
  };
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={paginatedTicket.length ? paginatedTicket : primaryTickets}
      selection
      selectionColumnWidth={52}
      sortable
    >
      <Card>
        <Card.Header className="border-bottom border-200 px-0">
          <UnsolvedTicketsHeader
            table
            setLayout={setLayout}
            layout={layout}
            selectedItems={selectedItems}
            handleTicketsSearch={handleTicketsSearch}
          />
        </Card.Header>
        {layout === 'tableView' ? (
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
        ) : (
          <Card.Body className="bg-light">
            <CardLayout
              data={paginatedTicket}
              isSelectedItem={isSelectedItem}
              toggleSelectedItem={toggleSelectedItem}
            />
          </Card.Body>
        )}
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <p className="mb-0 fs--1">
            <span className="d-none d-sm-inline-block me-2">
              {from} to {to} of {totalItems}
            </span>
          </p>
          <Flex>
            <Button
              size="sm"
              variant={canPreviousPage ? 'primary' : 'light'}
              disabled={!canPreviousPage}
              onClick={prevPage}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant={canNextPage ? 'primary' : 'light'}
              disabled={!canNextPage}
              onClick={nextPage}
              className="px-4 ms-2"
            >
              Next
            </Button>
          </Flex>
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

UnsolvedTickets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default UnsolvedTickets;

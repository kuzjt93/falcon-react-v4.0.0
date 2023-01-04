import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import IconButton from 'components/common/IconButton';
import React, { useContext } from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import InboxRow from './InboxRow';
import useBulkSelect from 'hooks/useBulkSelect';
import InboxFilterDropdown from './InboxFilterDropdown';
import { EmailContext } from 'context/Context';
import InboxFooter from './InboxFooter';
import usePagination from 'hooks/usePagination';
import EmailProvider from '../EmailProvider';

const InboxTitle = ({ className, children, ...rest }) => (
  <h5
    className={classNames(
      className,
      'fs-0 px-3 pt-3 pb-2 mb-0 border-bottom border-200'
    )}
    {...rest}
  >
    {children}
  </h5>
);

const ActionButton = ({
  tooltip,
  icon,
  handleClick,
  variant = 'falcon-default'
}) => (
  <OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>
    <Button variant={variant} onClick={handleClick} className="shdaow-none">
      <FontAwesomeIcon icon={icon} />
    </Button>
  </OverlayTrigger>
);

const InboxElement = () => {
  const {
    emailState: { emails, filters, currentFilter },
    emailDispatch
  } = useContext(EmailContext);
  const {
    paginationState: {
      data: paginatedEmails,
      totalItems,
      canNextPage,
      canPreviousPage,
      from,
      to
    },
    nextPage,
    prevPage
  } = usePagination(emails, 10);

  const unreadEmails = paginatedEmails.filter(email => !email.read);
  const otherEmails = paginatedEmails.filter(email => email.read);
  const emailIds = emails.map(email => email.id);

  const {
    selectedItems,
    isSelectedItem,
    isAllSelected,
    isIndeterminate,
    toggleSelectedItem,
    toggleIsAllSelected
  } = useBulkSelect(emailIds);

  const handleActionButtonClick = type => {
    emailDispatch({
      type,
      payload: selectedItems
    });
    toggleIsAllSelected();
  };

  return (
    <Card>
      <Card.Header>
        <Row className="align-items-center">
          <Col as={Flex} className="align-items-center">
            <Form.Check
              type="checkbox"
              id="inboxBulkSelect"
              className="mb-0 d-none d-sm-block form-check"
              checked={isAllSelected || isIndeterminate}
              onChange={() => toggleIsAllSelected()}
            />

            {selectedItems.length === 0 && (
              <>
                <IconButton
                  variant="falcon-default"
                  size="sm"
                  className="ms-sm-1"
                  icon="redo"
                  onClick={() => {
                    emailDispatch({ type: 'RESET' });
                  }}
                />
                <InboxFilterDropdown
                  filters={filters}
                  currentFilter={currentFilter}
                />
              </>
            )}
            {selectedItems.length > 0 && (
              <div className="ms-1">
                <ButtonGroup size="sm">
                  <ActionButton
                    tooltip="Archive"
                    icon="archive"
                    handleClick={() => handleActionButtonClick('ARCHIVE')}
                  />
                  <ActionButton
                    tooltip="Delete"
                    icon="trash-alt"
                    handleClick={() => handleActionButtonClick('DELETE')}
                  />
                  <ActionButton
                    tooltip="Mark as unread"
                    icon="envelope"
                    handleClick={() => handleActionButtonClick('READ')}
                  />
                  <ActionButton
                    tooltip="Snooze"
                    icon="clock"
                    handleClick={() => handleActionButtonClick('SNOOZE')}
                  />
                </ButtonGroup>
              </div>
            )}
          </Col>
          <Col xs="auto">
            <IconButton
              variant="falcon-primary"
              size="sm"
              icon="plus"
              as={Link}
              to="/email/compose"
              transform="shrink-3"
            >
              Compose
            </IconButton>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="fs--1 border-top border-200 p-0">
        {paginatedEmails.length > 0 ? (
          <>
            {unreadEmails.length > 0 && <InboxTitle>Unread</InboxTitle>}
            {unreadEmails.map(email => (
              <InboxRow
                email={email}
                key={email.id}
                isSelectedItem={isSelectedItem}
                toggleSelectedItem={toggleSelectedItem}
              />
            ))}
            <InboxTitle>Everything else</InboxTitle>
            {otherEmails.map(email => (
              <InboxRow
                email={email}
                key={email.id}
                isSelectedItem={isSelectedItem}
                toggleSelectedItem={toggleSelectedItem}
              />
            ))}
          </>
        ) : (
          <Alert variant="info" className="mb-0 rounded-0">
            <h5 className="alert-heading">Inbox empty!</h5>
            <hr />
            <p className="mb-0">Emails will be shown here automatically.</p>
          </Alert>
        )}
      </Card.Body>
      <InboxFooter
        totalItems={totalItems}
        from={from}
        to={to}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Card>
  );
};

const Inbox = () => {
  return (
    <EmailProvider>
      <InboxElement />
    </EmailProvider>
  );
};

InboxTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ActionButton.propTypes = {
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string
};

export default Inbox;

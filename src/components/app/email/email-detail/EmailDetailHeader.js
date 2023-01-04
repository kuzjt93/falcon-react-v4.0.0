import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { Card, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const ItemButton = ({ tootltip, icon, className, onClick }) => {
  return (
    <OverlayTrigger
      overlay={<Tooltip id="overlay-trigger-example">{tootltip}</Tooltip>}
    >
      <div className="d-inline-block">
        <IconButton
          variant="falcon-default"
          size="sm"
          icon={icon}
          className={className}
          onClick={onClick}
        />
      </div>
    </OverlayTrigger>
  );
};

const EmailDetailHeader = () => {
  const navigate = useNavigate();

  return (
    <Card className="mb-3">
      <Card.Body as={Flex} justifyContent="between">
        <div>
          <ItemButton
            tootltip="Back to inbox"
            icon="arrow-left"
            onClick={() => {
              navigate('/email/inbox');
            }}
          />
          <span className="mx-1 mx-sm-2 text-300">|</span>
          <ItemButton tootltip="Archive" icon="archive" />
          <ItemButton
            tootltip="Delete"
            icon="trash-alt"
            className="ms-1 ms-sm-2"
          />
          <ItemButton
            tootltip="Mark as unread"
            icon="envelope"
            className="ms-1 ms-sm-2"
          />
          <ItemButton tootltip="Snooze" icon="clock" className="ms-1 ms-sm-2" />
          <ItemButton
            tootltip="Print"
            icon="print"
            className="ms-1 ms-sm-2 d-none d-sm-inline-block"
          />
        </div>
        <Flex>
          <div className="d-none d-md-block">
            <small> 2 of 354</small>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="chevron-left"
              className="ms-2"
            />
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="chevron-right"
              className="ms-2"
            />
          </div>
          <Dropdown className="font-sans-serif" align="end">
            <Dropdown.Toggle
              variant="falcon-default"
              size="sm"
              className="text-600 dropdown-caret-none ms-2"
            >
              <FontAwesomeIcon icon="cog" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="py-2">
              <Dropdown.Item href="#/action-1">Configure inbox</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Themes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Send feedback</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Help</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Flex>
      </Card.Body>
    </Card>
  );
};

ItemButton.propTypes = {
  tootltip: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default EmailDetailHeader;

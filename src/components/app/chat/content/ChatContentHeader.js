import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { ChatContext } from 'context/Context';

const ChatContentHeader = ({ thread, setHideSidebar }) => {
  const { getUser, isOpenThreadInfo, setIsOpenThreadInfo } =
    useContext(ChatContext);
  const user = getUser(thread);

  return (
    <div className="chat-content-header">
      <Row className="flex-between-center">
        <Col xs={6} md={8} as={Flex} alignItems="center">
          <div
            className="pe-3 text-700 d-md-none contacts-list-show cursor-pointer"
            onClick={() => setHideSidebar(true)}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </div>
          <div className="min-w-0">
            <h5 className="mb-0 text-truncate fs-0">{user.name}</h5>
            <div className="fs--2 text-400">
              {user.status === 'status-online'
                ? 'Active on  chat'
                : 'Active 7h ago'}
            </div>
          </div>
        </Col>
        <Col xs="auto">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Start a Audio Call</Tooltip>}
          >
            <Button variant="falcon-primary" className="me-2" size="sm">
              <FontAwesomeIcon icon="phone" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Start a Video Call</Tooltip>}
          >
            <Button variant="falcon-primary" className="me-2" size="sm">
              <FontAwesomeIcon icon="video" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Conversation Information</Tooltip>}
          >
            <Button
              variant="falcon-primary"
              size="sm"
              onClick={() => setIsOpenThreadInfo(!isOpenThreadInfo)}
            >
              <FontAwesomeIcon icon="info" />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </div>
  );
};

ChatContentHeader.propTypes = {
  thread: PropTypes.object.isRequired,
  setHideSidebar: PropTypes.func.isRequired
};

export default ChatContentHeader;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import ChatThread from './ChatThread';
import SimpleBarReact from 'simplebar-react';
import ChatContactsSearch from './ChatContactSearch';
import classNames from 'classnames';
import { ChatContext } from 'context/Context';

const ChatSidebar = ({ hideSidebar }) => {
  const { threads } = useContext(ChatContext);
  return (
    <div className={classNames('chat-sidebar', { 'start-0': hideSidebar })}>
      <div className="contacts-list">
        <SimpleBarReact style={{ height: '100%', minWidth: '65px' }}>
          <Nav className="border-0">
            {threads.map((thread, index) => (
              <ChatThread thread={thread} index={index} key={thread.id} />
            ))}
          </Nav>
        </SimpleBarReact>
      </div>
      <ChatContactsSearch />
    </div>
  );
};

ChatSidebar.propTypes = {
  hideSidebar: PropTypes.bool
};

export default ChatSidebar;

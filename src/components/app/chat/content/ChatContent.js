import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';
import ChatContentHeader from './ChatContentHeader';
import threads from 'data/chat/threads';
import ChatContentBody from './ChatContentBody';
import MessageTextArea from './MessageTextArea';

const ChatContent = ({ setHideSidebar }) => {
  return (
    <Tab.Content className="card-chat-content">
      {threads.map((thread, index) => (
        <Tab.Pane key={index} eventKey={index} className="card-chat-pane">
          <ChatContentHeader thread={thread} setHideSidebar={setHideSidebar} />
          <ChatContentBody thread={thread} />
        </Tab.Pane>
      ))}
      <MessageTextArea />
    </Tab.Content>
  );
};

ChatContent.propTypes = {
  setHideSidebar: PropTypes.func.isRequired
};

export default ChatContent;

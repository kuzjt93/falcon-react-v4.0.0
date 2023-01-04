import Flex from 'components/common/Flex';
import { ChatContext } from 'context/Context';
import React, { useContext, useState } from 'react';
import { Card, Tab } from 'react-bootstrap';
import ChatProvider from './ChatProvider';
import ChatContent from './content/ChatContent';
import ChatSidebar from './sidebar/ChatSidebar';

const ChatTab = () => {
  const {
    setIsOpenThreadInfo,
    threadsDispatch,
    threads,
    setCurrentThread,
    setScrollToBottom
  } = useContext(ChatContext);
  const [hideSidebar, setHideSidebar] = useState(false);

  const handleSelect = e => {
    setHideSidebar(false);
    setIsOpenThreadInfo(false);
    const thread = threads.find(thread => thread.id === parseInt(e));
    setCurrentThread(thread);
    threadsDispatch({
      type: 'EDIT',
      id: thread.id,
      payload: { ...thread, read: true }
    });
    setScrollToBottom(true);
  };

  return (
    <Tab.Container
      id="left-tabs-example"
      defaultActiveKey="0"
      onSelect={handleSelect}
    >
      <Card className="card-chat overflow-hidden">
        <Card.Body as={Flex} className="p-0 h-100">
          <ChatSidebar hideSidebar={hideSidebar} />
          <ChatContent setHideSidebar={setHideSidebar} />
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

const Chat = () => {
  return (
    <ChatProvider>
      <ChatTab />
    </ChatProvider>
  );
};

export default Chat;

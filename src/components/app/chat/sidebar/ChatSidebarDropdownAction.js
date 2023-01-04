import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatSidebarDropdownAction = () => (
  <Dropdown className="dropdown-active-trigger dropdown-chat">
    <Dropdown.Toggle
      id="dropdown-button"
      className="hover-actions text-400 dropdown-caret-none fs-0 z-index-1 "
      variant="link"
      size="sm"
    >
      <FontAwesomeIcon icon="cog" transform="shrink-3 down-4" />
    </Dropdown.Toggle>

    <Dropdown.Menu className="py-2">
      <Dropdown.Item className="cursor-pointer">Mute</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="cursor-pointer">Archive</Dropdown.Item>
      <Dropdown.Item className="cursor-pointer text-danger">
        Delete
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="cursor-pointer">Mark as Unread</Dropdown.Item>
      <Dropdown.Item className="cursor-pointer">
        Something's Wrong
      </Dropdown.Item>
      <Dropdown.Item className="cursor-pointer">Ignore Messages</Dropdown.Item>
      <Dropdown.Item className="cursor-pointer">Block Messages</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default ChatSidebarDropdownAction;

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatContactsSearch = () => (
  <Form className="contacts-search-wrapper" onSubmit={e => e.preventDefault()}>
    <Form.Group className="mb-0 position-relative d-md-none d-lg-block w-100 h-100">
      <Form.Control
        className="chat-contacts-search border-0 h-100"
        placeholder="Search contacts ..."
        size="sm"
      />
      <FontAwesomeIcon icon="search" className="contacts-search-icon" />
    </Form.Group>
    <Button
      variant="transparent"
      size="sm"
      className="d-none d-md-inline-block d-lg-none"
      type="submit"
    >
      <FontAwesomeIcon icon="search" className="fs--1" />
    </Button>
  </Form>
);

export default ChatContactsSearch;

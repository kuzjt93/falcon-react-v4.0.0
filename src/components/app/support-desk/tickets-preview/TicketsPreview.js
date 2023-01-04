import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Conversation from './Conversation';
import PropertiesFilteringForm from './PropertiesFilteringForm';
import TicketsPreviewHeader from './TicketsPreviewHeader';
import ToDoList from 'components/dashboards/support-desk/ToDoList';
import ContactInfo from './ContactInfo';
const TicketsPreview = () => {
  return (
    <Row className="g-3">
      <Col xxl={9} xl={8}>
        <TicketsPreviewHeader />
        <Conversation />
      </Col>
      <Col xxl={3} xl={4}>
        <Row className="g-3 position-sticky top-0">
          <Col md={6} xl={12}>
            <PropertiesFilteringForm />
          </Col>
          <Col md={6} xl={12}>
            <ToDoList previewClassName="preview-todo-list" />
          </Col>
          <Col xs={12}>
            <ContactInfo />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TicketsPreview;

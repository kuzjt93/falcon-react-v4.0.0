import React, { useState } from 'react';
import { Card, Col, Nav, Offcanvas, Row, Tab } from 'react-bootstrap';
import ContactDetailsHeader from './ContactDetailsHeader';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Timeline from './Timeline';
import Tickets from './Tickets';
import Notes from './Notes';
import ContactProfile from './ContactProfile';
import { useBreakpoints } from 'hooks/useBreakpoints';
import ToDoList from './ToDoList';
import IconButton from 'components/common/IconButton';

const ContactDetails = () => {
  const [show, setShow] = useState(false);
  const { breakpoints } = useBreakpoints();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <ContactDetailsHeader handleShow={handleShow} />
      <Row className="g-3">
        <Col xxl={3} xl={4} className="order-xl-1">
          <div className="position-xl-sticky top-0">
            <ContactProfile />
            {breakpoints.down('xl') ? (
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className="dark__bg-card-dark"
              >
                <Offcanvas.Header closeButton className="bg-light">
                  <h6 className="fs-0 mb-0 fw-semi-bold">To-do List</h6>
                </Offcanvas.Header>
                <Offcanvas.Body className="scrollbar scrollbar-none-xl p-0">
                  <IconButton
                    variant="falcon-default"
                    size="sm"
                    icon="plus"
                    transform="shrink-3"
                    className="ms-x1 my-x1"
                  >
                    <span>Add</span>
                  </IconButton>
                  <div className="border-bottom border-xl-0 border-200"></div>
                  <ToDoList />
                </Offcanvas.Body>
              </Offcanvas>
            ) : (
              <ToDoList />
            )}
          </div>
        </Col>
        <Col xxl={9} xl={8}>
          <Card>
            <Tab.Container defaultActiveKey="timeline">
              <SimpleBar>
                <Card.Header className="p-0 border-bottom">
                  <Nav className="nav-tabs border-0 flex-nowrap tab-contact-details">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="timeline"
                        className="d-flex align-items-center py-3 px-x1 mb-0"
                      >
                        <FontAwesomeIcon
                          icon="stream"
                          className="text-600 tab-icon"
                        />
                        <h6 className="text-600 mb-0 ms-1">Timeline</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="tickets"
                        className="d-flex align-items-center py-3 px-x1 mb-0"
                      >
                        <FontAwesomeIcon
                          icon="ticket-alt"
                          className="text-600"
                        />
                        <h6 className="text-600 mb-0 ms-1">Tickets</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="notes"
                        className="d-flex align-items-center py-3 px-x1 mb-0"
                      >
                        <FontAwesomeIcon icon="file-alt" className="text-600" />
                        <h6 className="text-600 mb-0 ms-1">Notes</h6>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
              </SimpleBar>
              <Card.Body className="bg-light">
                <Tab.Content>
                  <Tab.Pane eventKey="timeline">
                    <Timeline />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tickets">
                    <Tickets />
                  </Tab.Pane>
                  <Tab.Pane eventKey="notes">
                    <Notes />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Tab.Container>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactDetails;

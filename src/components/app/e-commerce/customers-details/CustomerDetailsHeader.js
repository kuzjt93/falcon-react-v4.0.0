import React, { useContext } from 'react';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import AppContext from 'context/Context';

const CustomerDetailsHeader = () => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <Card className="mb-3">
      <Card.Header>
        <Row>
          <Col>
            <h5 className="mb-2">
              Tony Robbins (<a href="mailto:tony@gmail.com">tony@gmail.com</a>)
            </h5>
            <IconButton
              iconClassName="fs--2 me-1"
              variant="falcon-default"
              size="sm"
              icon="plus"
            >
              Add note
            </IconButton>
            <Dropdown className="d-inline-block ms-2">
              <Dropdown.Toggle
                as={Button}
                variant="falcon-default"
                size="sm"
                className="dropdown-caret-none"
              >
                <FontAwesomeIcon icon="ellipsis-h" />
              </Dropdown.Toggle>

              <Dropdown.Menu align={isRTL ? 'end' : 'start'}>
                <Dropdown.Item as={Link} to="#!">
                  Edit
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#!">
                  Report
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#!">
                  Archive
                </Dropdown.Item>
                <Dropdown.Divider as="div" />
                <Dropdown.Item as={Link} to="#!" className="text-danger">
                  Delete user
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto">
            <h6 className="text-uppercase text-600">
              Customer
              <FontAwesomeIcon icon="user" className="ms-2" />
            </h6>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="border-top">
        <Flex>
          <FontAwesomeIcon
            icon="user"
            className="text-success me-2"
            transform="down-5"
          />
          <div className="flex-1">
            <p className="mb-0">Customer was created</p>
            <p className="fs--1 mb-0 text-600">Jan 12, 11:13 PM</p>
          </div>
        </Flex>
      </Card.Body>
    </Card>
  );
};

export default CustomerDetailsHeader;

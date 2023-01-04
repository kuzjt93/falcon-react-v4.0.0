import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';

const CoursePricing = ({
  register,
  isOpenScheduleModal,
  setIsOpenScheduleModal
}) => {
  return (
    <>
      <Card className="mb-3 mb-lg-0">
        <Card.Header as="h5">Set Pricing</Card.Header>
        <Card.Body className="bg-light">
          <Row className="gx-2 gy-3">
            <Col xs="12">
              <Form.Group controlId="courseTitle">
                <Form.Label>
                  Base Price
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="basePriceTooltip">
                        Course regular price
                      </Tooltip>
                    }
                  >
                    <span className="ms-2 text-primary fs--1">
                      <FontAwesomeIcon icon="question-circle" />
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="basePrice"
                  required
                  {...register('basePrice')}
                />
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group controlId="courseTitle">
                <Form.Label>
                  Discounted Price
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="basePriceTooltip">
                        Course discounted price
                      </Tooltip>
                    }
                  >
                    <span className="ms-2 text-primary fs--1">
                      <FontAwesomeIcon icon="question-circle" />
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="discountedPrice"
                  required
                  {...register('discountedPrice')}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-end">
            <Button
              variant="link"
              size="sm"
              className="fw-medium fs--1"
              onClick={() => {
                setIsOpenScheduleModal(!isOpenScheduleModal);
              }}
            >
              Schedule Discount
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

CoursePricing.propTypes = {
  register: PropTypes.func.isRequired,
  isOpenScheduleModal: PropTypes.bool,
  setIsOpenScheduleModal: PropTypes.func.isRequired
};

export default CoursePricing;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { faqs as faqsData } from 'data/faqs';
import AskQuestionModal from './AskQuestionModal';

const FaqAltItem = ({ faq }) => {
  return (
    <>
      <h5 className="fs-0">{faq.title}</h5>
      <p className="fs--1">{faq.description}</p>
    </>
  );
};

const FaqAlt = () => {
  const [faqs] = useState(faqsData);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">Frequently asked questions</h5>
      </Card.Header>
      <Card.Body className="bg-light pb-0">
        <Row>
          <Col lg={6}>
            {faqs.slice(0, Math.floor(faqs.length / 2)).map(faq => (
              <FaqAltItem key={faq.id} faq={faq} />
            ))}
          </Col>
          <Col lg={6}>
            {faqs.slice(Math.floor(faqs.length / 2)).map(faq => (
              <FaqAltItem key={faq.id} faq={faq} />
            ))}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="py-3">
        <div className="text-center">
          <h6 className="fs-0 fw-normal">Have more questions?</h6>
          <Button variant="falcon-primary" size="sm" onClick={handleModalShow}>
            Ask us anything
          </Button>
        </div>

        <AskQuestionModal show={showModal} handleClose={handleModalClose} />
      </Card.Footer>
    </Card>
  );
};

FaqAltItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default FaqAlt;

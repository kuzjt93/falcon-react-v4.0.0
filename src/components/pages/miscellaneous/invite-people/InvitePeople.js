import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import invite from 'assets/img/icons/spot-illustrations/41.png';
import gmail from 'assets/img/logos/gmail.png';
import { Link } from 'react-router-dom';
import IconButton from 'components/common/IconButton';
import InvitePeopleModal from './InvitePeopleModal';

const InvitePeople = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card>
        <Card.Body className="text-center py-5">
          <Row className="justify-content-center">
            <Col xs={7} md={5}>
              <img className="img-fluid" src={invite} alt="image" width="58%" />
            </Col>
          </Row>
          <h3 className="mt-3 fw-normal fs-2 mt-md-4 fs-md-3">
            Invite a friend, you both get $100
          </h3>
          <p className="lead mb-5">
            Invite your friends and start working together in seconds.{' '}
            <br className="d-none d-md-block" /> Everyone you invite will
            receive a welcome email.
          </p>
          <Row className="justify-content-center">
            <Col md={7}>
              <Form as={Row} className="g-2">
                <Col sm>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    aria-label="Recipient's username"
                  />
                </Col>
                <Col sm="auto">
                  <Button variant="primary" className="d-block w-100">
                    Send Invitation
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="bg-light text-center pt-4">
          <Row className="justify-content-center">
            <Col xs={11} sm={10}>
              <h4 className="fw-normal mb-0 fs-1 fs-md-2">
                More ways to <br className="d-sm-none" /> invite your friends
              </h4>

              <Row className="gx-2 my-4">
                <Col lg={4}>
                  <Button
                    variant="falcon-default"
                    className="d-block w-100 mb-2 mb-xl-0"
                  >
                    <img src={gmail} width="20" alt="icon" />
                    <span className="fw-medium ms-2">Invite from Gmail</span>
                  </Button>
                </Col>
                <Col lg={4}>
                  <IconButton
                    className="d-block w-100 mb-2 mb-xl-0"
                    iconClassName="me-2"
                    variant="falcon-default"
                    icon="link"
                    onClick={handleCopy}
                  >
                    Copy Link
                  </IconButton>
                </Col>
                <Col lg={4}>
                  <IconButton
                    className="d-block w-100 mb-xl-0"
                    variant="falcon-default"
                    icon={['fab', 'facebook-square']}
                    iconClassName="text-facebook me-2"
                    transform="grow-2"
                  >
                    Share on Facebook
                  </IconButton>
                </Col>
              </Row>

              <p className="mb-2 fs--1">
                Once you’ve invited friends, you can{' '}
                <Link to="#!">view the status of your referrals</Link>{' '}
                <br className="d-none d-lg-block d-xxl-none" /> or visit our{' '}
                <Link to="#!">Help Center</Link> if you have any questions.{' '}
              </p>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <InvitePeopleModal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default InvitePeople;

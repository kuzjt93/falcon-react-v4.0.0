import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Background from 'components/common/Background';
import bgImage from 'assets/img/icons/spot-illustrations/corner-5.png';
import connectCircle from 'assets/img/icons/connect-circle.png';

const ConnectCard = () => {
  return (
    <Card>
      <Background
        image={bgImage}
        className="bg-card"
        style={{
          borderTopRightRadius: '0.375rem',
          borderBottomRightRadius: '0.375rem'
        }}
      />
      <Card.Body className="position-relative">
        <Row className="g-2 align-items-sm-center">
          <Col xs="auto">
            <img src={connectCircle} alt="connectCircle" height={55} />
          </Col>
          <Col>
            <Row className="align-items-center">
              <Col className="pe-xl-8">
                <h5 className="fs-0 mb-3 mb-sm-0 text-primary">
                  Connect your domain to your website and get things done faster
                  with Falcon
                </h5>
              </Col>
              <Col xs="auto" className="ms-auto">
                <Button variant="falcon-primary">Connect</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ConnectCard;

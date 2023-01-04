import React from 'react';
import CountUp from 'react-countup';
import { Card, Col, Image, Row } from 'react-bootstrap';
import trainer from 'assets/img/e-learning/avatar/trainer.png';
import userPlus from 'assets/img/icons/user-plus.svg';
import users from 'assets/img/icons/users.svg';
import IconButton from 'components/common/IconButton';

const TrainerInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="g-3 align-items-center">
          <Col md={6} lg={12} className="text-center">
            <Image src={trainer} alt="trainer" fluid className="rounded-3" />
          </Col>
          <Col md={6} lg={12}>
            <Row className="row-cols-1 g-0">
              <Col className="text-center">
                <h4>Bill Finger</h4>
                <h5 className="mb-1 text-800 fs-0">Artist | Comic Writer</h5>
                <p className="mb-0 fs--1">
                  National Comics Publications, NY, USA
                </p>
              </Col>
              <Col className="mt-4 mt-md-5 mt-lg-4 order-md-1 order-lg-0">
                <IconButton
                  variant="falcon-default"
                  size="md"
                  icon="comment"
                  className="mb-2 w-100"
                  iconClassName="me-1"
                >
                  Message
                </IconButton>
                <IconButton
                  variant="primary"
                  size="md"
                  icon="heart"
                  className="w-100"
                  iconClassName="me-1"
                >
                  Follow
                </IconButton>
              </Col>
              <Col className="mt-4 mt-md-5 mt-lg-4">
                <Row className="text-center">
                  <Col xs={6}>
                    <Image src={userPlus} alt="" width={30} className="mb-2" />
                    <h4>
                      <CountUp
                        start={0}
                        end={79563}
                        duration={2.75}
                        className="text-700"
                        separator=","
                      />
                    </h4>
                    <h6 className="fw-normal mb-0">Following</h6>
                  </Col>
                  <Col xs={6}>
                    <Image src={users} alt="" width={30} className="mb-2" />
                    <h4>
                      <CountUp
                        start={0}
                        end={120302}
                        duration={2.75}
                        className="text-700"
                        separator=","
                      />
                    </h4>
                    <h6 className="fw-normal mb-0">Followers</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TrainerInfo;

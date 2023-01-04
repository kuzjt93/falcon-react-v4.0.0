import React, { useState } from 'react';
import Flex from 'components/common/Flex';
import { Card, Button, Row, Col } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailDetailHeader from './EmailDetailHeader';
import Avatar from 'components/common/Avatar';
import team1 from 'assets/img/team/1.jpg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import womensDay from 'assets/img/icons/spot-illustrations/international-women-s-day-2.png';
import IconGroup from 'components/common/icon/IconGroup';
import socialIcons from 'data/socialIcons';

const EmailDetail = () => {
  const [marked, setMarked] = useState(true);
  const [emailDetails] = useState({
    sender: {
      name: 'Emma Watson',
      avatarSrc: team1,
      time: '8:40 AM (9 hours ago)',
      email: 'emma@watson.com'
    },
    subject: 'Women work wonders… on your marketing skills'
  });
  return (
    <>
      <EmailDetailHeader />
      <Card>
        <Card.Header>
          <Row>
            <Col md as={Flex}>
              <Avatar src={emailDetails.sender.avatarSrc} size="2xl" />
              <div className="flex-1 ms-2">
                <h5 className="mb-0">{emailDetails.subject}</h5>
                <a
                  className="text-800 fs--1"
                  href={`mailto:${emailDetails.sender.email}`}
                >
                  <span className="fw-semi-bold">
                    {emailDetails.sender.name}
                  </span>
                  <span className="ms-1 text-500">
                    &lt;{emailDetails.sender.email}&gt;
                  </span>
                </a>
              </div>
            </Col>
            <Col
              md="auto"
              as={Flex}
              alignItems="center"
              className="ps-6 ps-md-3"
            >
              <small>{emailDetails.sender.time}</small>
              <FontAwesomeIcon
                onClick={() => setMarked(!marked)}
                icon={marked ? 'star' : ['far', 'star']}
                className={classNames(
                  'ms-2 fs--1',
                  { 'text-warning': marked, 'text-300': !marked },
                  'cursor-pointer'
                )}
              />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="bg-light">
          <Row className="justify-content-center">
            <Col lg={8} xxl={6}>
              <Card className="shadow-none mb-3">
                <img src={womensDay} alt="" className="card-img-top" />
                <Card.Body>
                  <h3 className="fw-semi-bold">
                    Happy International Women’s Day!
                  </h3>
                  <p>
                    On International Women’s Day, we at ThemeWagon want you to
                    discover the skills you can learn from our amazing women
                    digital marketing instructors.
                  </p>
                  <p>
                    That's not all, when you enroll in one of their courses, use
                    promo code:
                    <code> GirlPower20 </code>and get
                    <a href="#!" className="fw-semi-bold">
                      {' '}
                      20% off{' '}
                    </a>
                    as our Women's Day gift to you. This offer{' '}
                    <a href="#!" className="fw-semi-bold">
                      expires in 7 days
                    </a>{' '}
                    —so pick your course—and enroll today!
                  </p>
                  <div className="text-center">
                    <Button variant="success" size="lg" className="my-3">
                      Browse Courses
                    </Button>
                    <small className="d-block">
                      For any technical issues faced, please contact{' '}
                      <a href="#!">Customer Support</a>.
                    </small>
                  </div>
                </Card.Body>
              </Card>
              <div className="text-center">
                <IconGroup
                  icons={socialIcons}
                  className="justify-content-center"
                />
                <small>
                  If you wish to unsubscribe from all future emails, please{' '}
                  <a href="#!">click here</a>
                </small>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row className="justify-content-between">
            <Col>
              <IconButton
                as={Link}
                variant="falcon-default"
                size="sm"
                icon="reply"
                to="#!"
              >
                Reply
              </IconButton>
              <IconButton
                as={Link}
                variant="falcon-default"
                size="sm"
                className="ms-2"
                icon="location-arrow"
                to="#!"
              >
                Forward
              </IconButton>
            </Col>
            <Col xs="auto" as={Flex} alignItems="center">
              <small>2 of 354</small>
              <IconButton
                variant="falcon-default"
                size="sm"
                icon="chevron-left"
                className="ms-2"
              />
              <IconButton
                variant="falcon-default"
                size="sm"
                icon="chevron-right"
                className="ms-2"
              />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default EmailDetail;

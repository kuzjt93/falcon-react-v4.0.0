import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import trainer from 'assets/img/team/5-thumb.png';
import FalconCardHeader from 'components/common/FalconCardHeader';
import IconButton from 'components/common/IconButton';
import FalconLink from 'components/common/FalconLink';
import SoftBadge from 'components/common/SoftBadge';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';

const tags = [
  {
    id: 0,
    text: 4.95,
    icon: 'star',
    class: 'rounded-pill border py-2 px-3'
  },
  {
    id: 1,
    text: 35400,
    icon: 'graduation-cap',
    class: 'rounded-pill border py-2 px-3'
  },
  {
    id: 2,
    text: 15,
    icon: 'file-alt',
    class: 'rounded-pill border py-2 px-3'
  },
  {
    id: 3,
    text: 5700,
    icon: 'map-pin',
    class: 'rounded-pill border py-2 px-3'
  }
];

const CourseTrainer = () => {
  return (
    <Card className="mb-3">
      <FalconCardHeader
        title="Trainer"
        titleTag="h5"
        endEl={
          <IconButton
            variant="falcon-primary"
            size="sm"
            icon="user-plus"
            iconClassName="ms-1"
          >
            Follow
          </IconButton>
        }
      />
      <Card.Body className="bg-light">
        <Row className="g-4 text-center text-md-start">
          <Col md="auto">
            <Avatar size="4xl" src={trainer} />
          </Col>
          <Col>
            <h5 className="mb-2">
              <Link to="/e-learning/trainer-profile">Bill Finger</Link>
            </h5>
            <h6 className="fs--1 text-800 fw-normal mb-3">
              Artist | Professional Comic Writer
            </h6>
            <p className="fs--1 text-700">
              Finger, an aspiring writer and part-time shoe salesperson, joined
              Kane's fledgling studio in 1938. Finger was inducted into the Jack
              Kirby Hall of Fame in 1994 and the
              <strong> Will Eisner Award Hall of Fame</strong> in 1999 after
              death. Finger was named one of the awardees in the company's 50th
              anniversary edition <strong> Fifty Who Made DC </strong> Great in
              1985. In his honor, Comic-Con International created the
              <strong> Bill Finger Award for Excellence</strong> in Comic Book
              Writing in 2005. In 2014, Finger got a posthumous
              <strong> Inkpot Award. </strong>
            </p>
            <Flex
              wrap="wrap"
              justifyContent="center"
              className="gap-2 justify-content-md-start"
            >
              {tags.map(tag => (
                <SoftBadge
                  key={tag.id}
                  pill
                  bg="light"
                  className="border border-300 text-secondary py-2 px-3"
                >
                  <FontAwesomeIcon icon={tag.icon} className="me-2" />
                  New
                </SoftBadge>
              ))}
            </Flex>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-end py-2">
        <FalconLink
          title="View all his courses"
          to="/e-learning/trainer-profile"
          icon="external-link-alt"
          className="fw-medium"
        />
      </Card.Footer>
    </Card>
  );
};

export default CourseTrainer;

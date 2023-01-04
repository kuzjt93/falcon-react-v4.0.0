import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import CourseDetailsBg from 'assets/img/e-learning/course-details-bg.png';
import playicon from 'assets/img/icons/play.svg';
import beach from 'assets/video/beach.mp4';
import beachPoster from 'assets/video/beach.jpg';
import Background from 'components/common/Background';
import { Link } from 'react-router-dom';
import StarRating from 'components/common/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalVideoContent from '../../ModalVideoContent';

const CourseBanner = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const [showExcerpt, setShowExcerpt] = useState(false);
  return (
    <Card className="overflow-hidden light mb-3">
      <Card.Body className="bg-black">
        <Background image={CourseDetailsBg} className="rounded-3" />
        <Row>
          <Col xl={8} className="position-relative">
            <Row className="g-3 align-items-center">
              <Col lg={5}>
                <div className="position-relative text-center">
                  <Background
                    image={course.thumbnail.image}
                    className="rounded-1 overlay"
                  />
                  <div
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer position-relative d-block py-7 py-xl-8 py-xxl-7 text-center"
                  >
                    <Image src={playicon} alt="" width={60} />
                  </div>
                  <ModalVideoContent
                    show={showModal}
                    setShow={setShowModal}
                    attachment={{ image: beachPoster, src: beach }}
                  />
                </div>
              </Col>
              <Col lg={7}>
                <h6 className="fw-semi-bold text-400">
                  A course by{' '}
                  <Link to="/e-learning/trainer-profile" className="link-info">
                    Bill Finger
                  </Link>
                </h6>
                <h2 className="fw-bold text-white">{course.name}</h2>
                <p className="text-white fw-semi-bold fs--1">
                  <span className="me-1">{course.rating}</span>
                  <StarRating readonly rating={course.rating} />
                  <span className="text-info ms-2">
                    ({course.review.toLocaleString()} reviews)
                  </span>
                </p>
                <p className="mb-0 fw-medium text-400">
                  {showExcerpt
                    ? course.excerpt
                    : course.excerpt.substring(0, 152)}
                  ...
                  <Button
                    variant="link"
                    size="sm"
                    className="text-info p-0"
                    onClick={() => setShowExcerpt(!showExcerpt)}
                  >
                    See {showExcerpt ? 'less' : 'more'}
                  </Button>
                </p>
              </Col>
            </Row>
            <hr className="text-secondary text-opacity-50" />
            <ul className="list-unstyled d-flex flex-wrap gap-3 fs--1 fw-semi-bold text-300 mt-3 mb-0">
              <li>
                <FontAwesomeIcon
                  icon="graduation-cap"
                  className="text-white me-1"
                />
                7,302 Learners
              </li>
              <li>
                <FontAwesomeIcon
                  icon="user-graduate"
                  className="text-white me-1"
                />
                91% Completion
              </li>
              <li>
                <FontAwesomeIcon
                  icon="headphones"
                  className="text-white me-1"
                />
                English
              </li>
              <li>
                <FontAwesomeIcon
                  icon="closed-captioning"
                  className="text-white me-1"
                />
                English
              </li>
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

CourseBanner.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string,
    excerpt: PropTypes.string,
    rating: PropTypes.number,
    review: PropTypes.number,
    thumbnail: PropTypes.shape({
      image: PropTypes.string
    })
  })
};

export default CourseBanner;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from 'components/common/FalconCardHeader';
import IconButton from 'components/common/IconButton';
import StarRating from 'components/common/StarRating';
import FalconLink from 'components/common/FalconLink';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';

const CourseReviews = ({ data }) => {
  return (
    <Card className="mb-3">
      <FalconCardHeader
        title="Reviews"
        titleTag="h5"
        className="bg-light"
        endEl={
          <Flex className="gap-2">
            <IconButton
              variant="falcon-default"
              size="sm"
              iconAlign="right"
              icon="filter"
              iconClassName="ms-1 fs--2"
            >
              Filter
            </IconButton>
            <div>
              <Form.Select size="sm" defaultValue="">
                <option value="">Sort by</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
                <option value="name">Name</option>
              </Form.Select>
            </div>
          </Flex>
        }
      />
      <Card.Body className="py-0">
        {data.map((review, index) => (
          <Row
            key={review.id}
            className={classNames(
              'g-3 align-items-center text-center text-md-start py-3',
              {
                'border-bottom border-200': data.length - 1 !== index
              }
            )}
          >
            <Col md="auto">
              <Link to="#!">
                <Avatar size="3xl" src={review.avatar} />
              </Link>
            </Col>
            <Col>
              <Row>
                <Col xs={12}>
                  <h6 className="fs-0">
                    <Link to="#!" className="me-2">
                      {review.reviewer}
                    </Link>
                    <StarRating readonly rating={review.rating} />
                  </h6>
                </Col>
                <Col md={10}>
                  <p className="fs--1 text-800">{review.comment}</p>
                </Col>
                <Col xs={12}>
                  <Flex
                    direction="column"
                    alignItems="center"
                    className="flex-md-row gap-2 fs--2 text-600"
                  >
                    <h6 className="fs--2 text-600 mb-0">{review.date}</h6>
                    <p className="mb-0 ms-1">
                      {review.liked} people found this helpful
                    </p>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col md="auto" className="d-flex justify-content-center gap-2">
              <Button
                variant="falcon-default"
                type="button"
                size="sm"
                className="icon-item focus-bg-primary"
              >
                <FontAwesomeIcon icon="thumbs-up" className="fs--2" />
              </Button>
              <Button
                variant="falcon-default"
                type="button"
                size="sm"
                className="icon-item focus-bg-secondary"
              >
                <FontAwesomeIcon
                  icon="thumbs-up"
                  transform="rotate-180"
                  className="fs--2"
                />
              </Button>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="bg-light text-end py-2">
        <FalconLink
          title="See All Reviewes"
          to="#!"
          icon="external-link-alt"
          className="fw-medium"
        />
      </Card.Footer>
    </Card>
  );
};

CourseReviews.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CourseReviews;

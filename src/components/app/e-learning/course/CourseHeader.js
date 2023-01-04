import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Background from 'components/common/Background';
import corner6 from 'assets/img/illustrations/corner-6.png';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from 'hooks/useCourses';

const CourseHeader = ({ layout, setShowFilterOffcanvas }) => {
  const { handleSearch, handleIsAscClick, handleSortByChange, isAsc } =
    useCourses();
  return (
    <Card className="mb-3">
      <Card.Header className="position-relative">
        <h5 className="mb-0 mt-1">All Courses</h5>
        <Background image={corner6} className="d-none d-md-block bg-card" />
      </Card.Header>
      <Card.Body className="pt-0 pt-md-3">
        <Row className="g-3 align-items-center">
          <Col xs="auto" className="d-xl-none">
            <Button
              onClick={() => setShowFilterOffcanvas(true)}
              className="position-relative p-0"
              size="sm"
              variant="link"
            >
              <FontAwesomeIcon icon="filter" className="fs-0 text-700" />
            </Button>
          </Col>
          <Col>
            <Form className="position-relative">
              <Form.Control
                type="search"
                placeholder="Search..."
                size="sm"
                aria-label="Search"
                className="rounded search-input ps-4"
                onChange={({ target }) => handleSearch(target.value)}
              />
              <FontAwesomeIcon
                icon="search"
                className="fs--1 text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
              />
            </Form>
          </Col>
          <Col xs="auto" className="col-md">
            <Row className="g-0 justify-content-end">
              <Col
                xs="auto"
                className="position-md-static position-absolute top-0 end-0 me-3 mt-3 mt-md-0"
              >
                <Form as={Row} className="gx-2">
                  <Col xs="auto" className="d-none d-lg-block">
                    <small>Sort by:</small>
                  </Col>
                  <Col xs="auto">
                    <InputGroup size="sm">
                      <Form.Select
                        className="pe-5"
                        defaultValue="price"
                        style={{ maxWidth: '6.7rem' }}
                        onChange={({ target }) =>
                          handleSortByChange(target.value)
                        }
                      >
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="review">Review</option>
                      </Form.Select>
                      <InputGroup.Text
                        as={Button}
                        variant="link"
                        className="border border-300 text-700"
                        onClick={() => handleIsAscClick(!isAsc)}
                      >
                        <FontAwesomeIcon
                          icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form>
              </Col>
              <Col xs="auto" className="p-0">
                <Row className="g-2 align-items-center">
                  <Col xs="auto" className="d-none d-lg-block">
                    <small>View:</small>
                  </Col>
                  <Col xs="auto">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Course Grid</Tooltip>}
                    >
                      <Link
                        to="/e-learning/course/course-grid"
                        className={`me-3 ${
                          layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon="th"
                          transform="down-3"
                          className="fs-1"
                        />
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Course List</Tooltip>}
                    >
                      <Link
                        to="/e-learning/course/course-list"
                        className={`me-2 ${
                          layout === 'list' ? 'text-700' : 'text-400 hover-700'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon="list-ul"
                          transform="down-3"
                          className="fs-1 hover-700"
                        />
                      </Link>
                    </OverlayTrigger>
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

CourseHeader.propTypes = {
  layout: PropTypes.string,
  isAsc: PropTypes.bool,
  setIsAsc: PropTypes.func,
  setSortBy: PropTypes.func,
  setShowFilterOffcanvas: PropTypes.func,
  searchedText: PropTypes.string,
  handleSearch: PropTypes.func
};

export default CourseHeader;

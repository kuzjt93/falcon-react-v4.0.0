import React, { useContext, useEffect, useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { CourseContext } from 'context/Context';
import usePagination from 'hooks/usePagination';
import CourseGrid from '../course/CourseGrid';
import Flex from 'components/common/Flex';

const TrainerCourses = () => {
  const {
    coursesState: { courses },
    coursesDispatch
  } = useContext(CourseContext);

  const [sortBy, setSortBy] = useState('price');
  const [isAsc, setIsAsc] = useState(true);
  const [coursePerPage] = useState(6);

  const {
    paginationState: {
      data: paginatedCourses,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray
    },
    nextPage,
    prevPage,
    goToPage
  } = usePagination(courses, coursePerPage);

  useEffect(() => {
    coursesDispatch({
      type: 'SORT_COURSE',
      payload: {
        sortBy,
        order: isAsc ? 'asc' : 'desc'
      }
    });
  }, [sortBy, isAsc]);

  return (
    <Card>
      <Card.Header as={Flex} className="flex-between-center bg-light py-2">
        <h6 className="mb-0">Other Courses by Bill Finger</h6>
        <div>
          <InputGroup size="sm">
            <Form.Select
              className="pe-5"
              defaultValue="price"
              onChange={({ target }) => setSortBy(target.value)}
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="review">Review</option>
            </Form.Select>
            <InputGroup.Text
              as={Button}
              variant="link"
              className="border border-300 text-700"
              onClick={() => setIsAsc(!isAsc)}
            >
              <FontAwesomeIcon
                icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
              />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          {paginatedCourses.map(course => (
            <Col md={6} xxl={4} key={course.id}>
              <CourseGrid course={course} />
            </Col>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer as={Flex} justifyContent="end" className="bg-light py-2">
        <div>
          <OverlayTrigger placement="top" overlay={<Tooltip>Prev</Tooltip>}>
            <Button
              variant="falcon-default"
              size="sm"
              disabled={!canPreviousPage}
              onClick={prevPage}
              className="me-2"
              trigger="focus"
            >
              <FontAwesomeIcon icon="chevron-left" />
            </Button>
          </OverlayTrigger>
        </div>

        <ul className="pagination mb-0">
          {paginationArray.map(page => (
            <li
              key={page}
              className={classNames({ active: currentPage === page })}
            >
              <Button
                size="sm"
                variant="falcon-default"
                className="page me-2"
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">Next</Tooltip>}
          >
            <Button
              variant="falcon-default"
              size="sm"
              disabled={!canNextPage}
              onClick={nextPage}
              trigger="focus"
            >
              <FontAwesomeIcon icon="chevron-right" />
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default TrainerCourses;

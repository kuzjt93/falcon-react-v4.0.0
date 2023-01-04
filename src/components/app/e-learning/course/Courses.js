import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Offcanvas,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import AppContext, { CourseContext } from 'context/Context';
import usePagination from 'hooks/usePagination';
import CourseGrid from './CourseGrid';
import CourseList from './CourseList';
import CourseHeader from './CourseHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import CourseFilters from './CourseFilters';
import { useBreakpoints } from 'hooks/useBreakpoints';

const Courses = () => {
  const [showFilterOffcanvas, setShowFilterOffcanvas] = useState(false);
  const [coursePerPage, setCoursePerPage] = useState(6);
  const navigate = useNavigate();
  const { breakpoints } = useBreakpoints();
  const { courseLayout } = useParams();
  const {
    coursesState: { courses }
  } = useContext(CourseContext);

  const {
    config: { isNavbarVerticalCollapsed },
    setConfig
  } = useContext(AppContext);
  const coursesNavbarVerticalCollapsed = useRef(isNavbarVerticalCollapsed);

  const {
    paginationState: {
      data: paginatedCourses,
      totalItems,
      itemsPerPage,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray
    },
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  } = usePagination(courses, coursePerPage);

  const layout = courseLayout.split(/-/)[1];
  const isList = layout === 'list';
  const isGrid = layout === 'grid';

  useEffect(() => {
    isList || isGrid || navigate('/errors/404');
  }, []);

  useEffect(() => {
    setConfig('isNavbarVerticalCollapsed', true);

    return () => {
      setConfig(
        'isNavbarVerticalCollapsed',
        coursesNavbarVerticalCollapsed.current
      );
    };
  }, []);

  return (
    <>
      <Row className="g-3">
        {breakpoints.up('xl') && (
          <Col xl={3}>
            <CourseFilters />
          </Col>
        )}
        <Col xl={9}>
          {/* Courses Header */}
          <CourseHeader
            layout={layout}
            setShowFilterOffcanvas={setShowFilterOffcanvas}
          />
          {/* Courses */}
          <Row className="mb-3 g-3">
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map(course =>
                layout === 'list' ? (
                  <Col key={course.id} xs={12}>
                    <CourseList course={course} />
                  </Col>
                ) : (
                  <Col key={course.id} md={6} xxl={4}>
                    <CourseGrid course={course} />
                  </Col>
                )
              )
            ) : (
              <Card className="bg-transparent shadow-none">
                <Card.Body className="border-2 border-dashed border-400 border rounded text-center py-5">
                  <div className="fs--1">
                    <FontAwesomeIcon
                      icon="exclamation-triangle"
                      className="fs-6 mb-3"
                    />
                    <h5>No Courses Found!</h5>
                    <p className="mb-0">
                      Your search did not match any Courses. Please try again.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Row>
          {/* Course pagination */}
          {paginatedCourses.length > 0 && (
            <Card>
              <Card.Body>
                <Row className="g-3 flex-center justify-content-sm-between">
                  <Col xs="auto" as={Flex} alignItems="center">
                    <small className="d-none d-lg-block me-2">Show:</small>
                    <Form.Select
                      size="sm"
                      value={itemsPerPage}
                      onChange={({ target }) => {
                        setItemsPerPage(target.value);
                        setCoursePerPage(target.value);
                      }}
                      style={{ maxWidth: '4.875rem' }}
                    >
                      <option value={2}>2</option>
                      <option value={4}>4</option>
                      <option value={6}>6</option>
                      <option value={totalItems}>All</option>
                    </Form.Select>
                  </Col>
                  <Col xs="auto" as={Flex}>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Prev</Tooltip>}
                      >
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
                          className={classNames({
                            active: currentPage === page
                          })}
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
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {breakpoints.down('xl') && (
        <Offcanvas
          show={showFilterOffcanvas}
          onHide={() => setShowFilterOffcanvas(false)}
          placement="start"
          className="offcanvas offcanvas-filter-sidebar"
        >
          <CourseFilters isOffcanvas={true} setShow={setShowFilterOffcanvas} />
        </Offcanvas>
      )}
    </>
  );
};

export default Courses;

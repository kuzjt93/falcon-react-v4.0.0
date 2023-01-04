import React, { useContext, useEffect, useRef } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import waveBg from 'assets/img/illustrations/bg-wave.png';
import AppContext, { CourseContext } from 'context/Context';
import {
  courseContents,
  courseFeatures,
  courseLessons,
  courseRequirements,
  courseReviews
} from 'data/elearning/courseDetails';
import CourseBanner from './CourseBanner';
import CoursePricingPlan from './CoursePricingPlan';
import CourseFeatures from './CourseFeatures';
import CourseContents from './CourseContents';
import CourseRequirements from './CourseRequirements';
import CourseTrainer from './CourseTrainer';
import CourseReviews from './CourseReviews';
import SimilarCourses from './SimilarCourses';
import CourseLessonPlan from './CourseLessonPlan';
import { Navigate, useParams } from 'react-router-dom';

const Coursedetails = () => {
  const {
    config: { navbarPosition },
    setConfig
  } = useContext(AppContext);

  const {
    coursesState: { courses }
  } = useContext(CourseContext);

  const { courseId } = useParams();
  const prevNavbarPosition = useRef(navbarPosition);

  const course = courses.find(course => course.id === courseId);

  useEffect(() => {
    if (navbarPosition !== 'double-top') setConfig('navbarPosition', 'top');
    setConfig('disabledNavbarPosition', ['vertical', 'combo']);
  }, [navbarPosition]);

  useEffect(() => {
    return () => {
      setConfig('disabledNavbarPosition', []);
      setConfig('navbarPosition', prevNavbarPosition.current);
    };
  }, []);

  return course ? (
    <>
      <CourseBanner course={course} />
      <Row className="g-lg-3">
        <Col lg={8} className="order-1 order-lg-0">
          <CourseFeatures data={courseFeatures} />
          <CourseContents data={courseContents} />
          <CourseLessonPlan data={courseLessons} />
          <CourseRequirements data={courseRequirements} />
          <CourseTrainer />
          <CourseReviews data={courseReviews} />
          <SimilarCourses />
        </Col>
        <Col lg={4}>
          <div className="course-details-sticky-sidebar mb-lg-8 mt-xl-n10 pe-xl-4 pe-xxl-7">
            <CoursePricingPlan course={course} />
            <div className="d-none d-xl-block position-absolute z-index--1 top-0 end-0 text-end me-n2 me-xxl-4 mt-xl-6">
              <Image
                src={waveBg}
                alt=""
                style={{ maxWidth: '23.75rem' }}
                className="bg-card"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  ) : (
    <Navigate to={`/e-learning/course/course-details/${courses[0].id}`} />
  );
};

export default Coursedetails;

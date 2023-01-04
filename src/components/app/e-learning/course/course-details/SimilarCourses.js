import React from 'react';
import { Card } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/FalconLink';
import { courseData } from 'data/elearning/courseData';
import Slider from 'react-slick';
import CourseGrid from '../CourseGrid';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SimilarCourses = () => {
  return (
    <Card className="mb-3">
      <FalconCardHeader title="Similar Courses" titleTag="h6" />
      <Card.Body className="bg-light py-0">
        <Slider
          {...sliderSettings}
          className="full-height-slider slick-slider-arrow-inner"
        >
          {courseData.map(course => (
            <CourseGrid course={course} key={course.id} />
          ))}
        </Slider>
      </Card.Body>
      <Card.Footer className="text-end py-2">
        <FalconLink
          title="All courses"
          to="/e-learning/course/course-grid"
          icon="external-link-alt"
          className="fw-medium"
        />
      </Card.Footer>
    </Card>
  );
};

export default SimilarCourses;

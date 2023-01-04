import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Section from 'components/common/Section';
import Slider from 'react-slick';
import { isIterableArray } from 'helpers/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from 'data/testimonial/testimonialList';

const TestimonialItem = ({
  description,
  author,
  designation,
  companyImage,
  size
}) => {
  return (
    <div className="px-5 px-sm-6">
      <p className="fs-sm-1 fs-md-2 fst-italic text-dark">{description}</p>
      <p className="fs-0 text-600">
        - {author}, {designation}
      </p>
      <img className="w-auto mx-auto" src={companyImage} alt="" height={size} />
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const Testimonial = () => (
  <Section className="text-center bg-200">
    <Row className="justify-content-center">
      <Col xs={10} lg={9} xl={8}>
        <Slider {...settings}>
          {isIterableArray(testimonials) &&
            testimonials.map((testimonial, index) => (
              <TestimonialItem {...testimonial} key={index} />
            ))}
        </Slider>
      </Col>
    </Row>
  </Section>
);

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  companyImage: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Testimonial;

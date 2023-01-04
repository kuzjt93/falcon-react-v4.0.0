import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'helpers/createMarkup';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blogPostList, menuList1, menuList2 } from 'data/footer';
import { bgWhiteIcons } from 'data/socialIcons';
import { version } from 'config';

const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

const FooterList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link className="text-600" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = { list: PropTypes.array.isRequired };

const FooterBlogList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link className="text-600" to="#!">
            {blog.title}
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && (
            <span dangerouslySetInnerHTML={createMarkup('&starf;')} />
          )}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = { list: PropTypes.array.isRequired };

const FooterStandard = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Section bg="dark" className="pt-8 pb-4 light">
        <div
          className="position-absolute btn-back-to-top cursor-pointer bg-dark"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon="chevron-up"
            transform="rotate-45"
            className="text-600"
          />
        </div>
        <Row>
          <Col lg={4}>
            <FooterTitle>Our Mission</FooterTitle>
            <p className="text-600">
              Falcon enables front end developers to build custom streamlined
              user interfaces in a matter of hours, while it gives backend
              developers all the UI elements they need to develop their web
              app.And it's rich design can be easily integrated with backends
              whether your app is based on ruby on rails, laravel, express or
              any other server side system.
            </p>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col xs={6} md={3}>
                <FooterTitle>Company</FooterTitle>
                <FooterList list={menuList1} />
              </Col>
              <Col xs={6} md={3}>
                <FooterTitle>Product</FooterTitle>
                <FooterList list={menuList2} />
              </Col>
              <Col className="mt-5 mt-md-0">
                <FooterTitle>From the Blog</FooterTitle>
                <FooterBlogList list={blogPostList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <section className=" bg-dark py-0 text-center fs--1 light">
        <hr className="my-0 border-600 opacity-25" />
        <div className="container py-3">
          <Row className="justify-content-between">
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">
                Thank you for creating with Falcon{' '}
                <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
                <a
                  className="text-white opacity-85"
                  href="https://themewagon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ThemeWagon
                </a>
              </p>
            </Col>
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">v{version}</p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FooterStandard;

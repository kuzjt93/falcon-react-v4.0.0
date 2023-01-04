import React from 'react';
import PropTypes from 'prop-types';
import Background from 'components/common/Background';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthSplitLayout = ({ children, bgProps }) => {
  return (
    <Container fluid>
      <Row className="min-vh-100 bg-100">
        <Col xs={6} className="d-none d-lg-block position-relative">
          {bgProps && <Background {...bgProps} />}
        </Col>
        <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto py-5">
          <Row className="g-0 justify-content-center">
            <Col lg={9} xl={8} className="col-xxl-6">
              <Card>
                <Card.Header className="bg-shape bg-circle-shape text-center p-2">
                  <Link
                    className="text-white light font-sans-serif fw-bolder fs-4 z-index-1 position-relative"
                    to="/"
                  >
                    falcon
                  </Link>
                </Card.Header>
                <Card.Body className="p-4">{children}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

AuthSplitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bgProps: PropTypes.shape(Background.propTypes).isRequired
};

export default AuthSplitLayout;

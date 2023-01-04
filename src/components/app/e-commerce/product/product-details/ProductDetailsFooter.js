import React from 'react';
import { Tab, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRating from 'components/common/StarRating';
import createMarkup from 'helpers/createMarkup';

const ProductDetailsFooter = ({
  product: { desc, specification, reviews }
}) => {
  return (
    <div className="overflow-hidden mt-4">
      <Tab.Container defaultActiveKey="description">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              eventKey="description"
              className="ps-0 cursor-pointer outline-none"
            >
              Description
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="specifications"
              className="px-2 px-md-3 cursor-pointer outline-none"
            >
              Specifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="reviews"
              className="px-2 px-md-3 cursor-pointer outline-none"
            >
              Reviews
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div
              className="mt-3"
              dangerouslySetInnerHTML={createMarkup(desc)}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="specifications">
            <Table className="fs--1 mt-3">
              <tbody>
                {Object.keys(specification).map(spec => (
                  <tr key={spec}>
                    <td className="bg-100" style={{ width: '30%' }}>
                      {spec}
                    </td>
                    <td>{specification[spec]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <Row className="mt-3">
              <Col lg={6} className="mb-4 mb-lg-0">
                {reviews.map((review, index) => (
                  <div key={review.id}>
                    <div className="mb-1">
                      <StarRating
                        className="fs--1"
                        readonly
                        rating={review.rating}
                      />
                      <span className="ms-3 text-dark fw-semi-bold">
                        {review.title}
                      </span>
                    </div>
                    <p className="fs--1 mb-2 text-600">
                      By {review.author} • {review.date}
                    </p>
                    <p className="mb-0">{review.text}</p>
                    {!(index === reviews.length - 1) && <hr className="my-4" />}
                  </div>
                ))}
              </Col>
              <Col lg={6} className="ps-lg-5">
                <Form>
                  <h5 className="mb-3">Write your Review</h5>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Rating:</Form.Label>
                    <StarRating className="d-block fs-3" rating={0} />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" rows="3" type="text" />
                  </div>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

ProductDetailsFooter.propTypes = {
  product: PropTypes.shape({
    desc: PropTypes.string,
    specification: PropTypes.object,
    reviews: PropTypes.arrayOf(PropTypes.object)
  })
};

export default ProductDetailsFooter;

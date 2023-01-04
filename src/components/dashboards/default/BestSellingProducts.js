import classNames from 'classnames';
import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  ProgressBar,
  Row,
  Table
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const getTotalPrice = items =>
  items
    .map(({ unit, price }) => unit * price)
    .reduce((total, currentValue) => total + currentValue, 0);

const getProductItemCalculatedData = (unit, price, totalPrice) => {
  const productTotalPrice = unit * price;
  const percentage = ((productTotalPrice * 100) / totalPrice).toFixed(0);
  return { productTotalPrice, percentage };
};

const BestSellingProduct = ({ product, totalPrice, isLast }) => {
  const { img, title, type, unit, price } = product;
  const { productTotalPrice, percentage } = getProductItemCalculatedData(
    unit,
    price,
    totalPrice
  );

  return (
    <tr className={classNames({ 'border-bottom border-200': !isLast })}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <img
            className="rounded-1 border border-200"
            src={img}
            width="60"
            alt={title}
          />
          <div className="ms-3">
            <h6 className="mb-1 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {title}
              </Link>
            </h6>
            <p className="fw-semi-bold mb-0 text-500">{type}</p>
          </div>
        </Flex>
      </td>
      <td className="align-middle text-end fw-semi-bold">
        ${productTotalPrice}
      </td>
      <td className="align-middle pe-x1">
        <Flex alignItems="center">
          <ProgressBar now={percentage} style={{ width: '80px', height: 5 }} />
          <div className="fw-semi-bold ms-3">{percentage}%</div>
        </Flex>
      </td>
    </tr>
  );
};

BestSellingProduct.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  isLast: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    unit: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

const BestSellingProducts = ({ products }) => {
  const totalPrice = getTotalPrice(products);
  const noOfProducts = products.length;

  return (
    <Card className="h-lg-100 overflow-hidden">
      <Card.Body className="p-0 ">
        <Table borderless responsive className="mb-0 fs--1">
          <thead className="bg-light">
            <tr className="text-900">
              <th>Best Selling Products</th>
              <th className="text-end">Revenue ( ${totalPrice})</th>
              <th className="pe-x1 text-end" style={{ width: '8rem' }}>
                Revenue (%)
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <BestSellingProduct
                product={product}
                totalPrice={totalPrice}
                isLast={index === noOfProducts - 1}
                key={product.id}
              />
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button variant="falcon-default" size="sm" as={Link} to="#!">
              View All
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

BestSellingProducts.propTypes = {
  products: PropTypes.arrayOf(BestSellingProduct.propTypes.product).isRequired
};

export default BestSellingProducts;

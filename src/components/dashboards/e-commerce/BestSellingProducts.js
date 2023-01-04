import React from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Form,
  ProgressBar
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import SimpleBarReact from 'simplebar-react';

const getTotalPrice = items =>
  items
    .map(({ unit, price }) => unit * price)
    .reduce((total, currentValue) => total + currentValue, 0);

const getTotalOrder = items =>
  items
    .map(({ unit }) => unit)
    .reduce((total, currentValue) => total + currentValue, 0);

const getProductItemCalculatedData = (unit, price, totalPrice) => {
  const productTotalPrice = unit * price;
  const percentage = ((productTotalPrice * 100) / totalPrice).toFixed(0);
  return { productTotalPrice, percentage };
};

const BestSellingTableRow = ({ product, totalPrice, totalOrder }) => {
  const { img, title, type, unit, price } = product;
  const { productTotalPrice, percentage } = getProductItemCalculatedData(
    unit,
    price,
    totalPrice
  );

  return (
    <tr className="border-top border-200">
      <td>
        <Flex alignItems="center" className="position-relative">
          <img
            className="rounded-1 border border-200"
            src={img}
            width={60}
            alt={title}
          />
          <div className="ms-3">
            <h6 className="mb-1 fw-semi-bold">
              <Link
                className="text-dark stretched-link"
                to="/e-commerce/product/product-details"
              >
                {title}
              </Link>
            </h6>
            <p className="fw-semi-bold mb-0 text-500">{type}</p>
          </div>
        </Flex>
      </td>
      <td className="align-middle text-center fw-semi-bold">{unit}</td>
      <td className="align-middle text-center fw-semi-bold">
        {parseInt((totalOrder * unit) / 100)}%
      </td>
      <td className="align-middle text-end fw-semi-bold">
        ${productTotalPrice}
      </td>
      <td className="align-middle pe-x1">
        <Flex alignItems="center">
          <ProgressBar
            className="me-3 bg-200"
            now={percentage}
            style={{ width: 80, height: 5 }}
          />
          <div className="fw-semi-bold ms-2">{percentage}%</div>
        </Flex>
      </td>
    </tr>
  );
};

const BestSellingProducts = ({ products }) => {
  const totalPrice = getTotalPrice(products);
  const totalOrder = getTotalOrder(products);

  return (
    <Card className="h-lg-100 overflow-hidden">
      <Card.Body className="p-0">
        <SimpleBarReact>
          <Table borderless className="mb-0 fs--1">
            <thead className="bg-light">
              <tr className="text-900">
                <th>Best Selling Products</th>
                <th className="text-center">Orders({totalOrder})</th>
                <th className="text-center">Order(%)</th>
                <th className="text-end">Revenue</th>
                <th className="pe-x1 text-end" style={{ width: '8rem' }}>
                  Revenue (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <BestSellingTableRow
                  product={product}
                  totalPrice={totalPrice}
                  totalOrder={totalOrder}
                  key={product.id}
                />
              ))}
            </tbody>
          </Table>
        </SimpleBarReact>
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm">
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

BestSellingTableRow.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalOrder: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    unit: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

BestSellingProducts.propTypes = {
  products: PropTypes.arrayOf(BestSellingTableRow.propTypes.product).isRequired
};

export default BestSellingProducts;

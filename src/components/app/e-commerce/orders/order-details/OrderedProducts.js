import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { orderedProductsData } from 'data/ecommerce/OrderDetailsData';
import { getPercentage } from 'helpers/utils';

const OrderedProducts = () => {
  const subtotal = orderedProductsData.reduce(
    (acc, curr) => curr.quantity * curr.rate + acc,
    0
  );

  const tax = getPercentage(subtotal, 5);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="table-responsive fs--1">
          <Table striped className="border-bottom">
            <thead className="bg-200 text-900">
              <tr>
                <th className="border-0">Products</th>
                <th className="border-0 text-center">Quantity</th>
                <th className="border-0 text-end">Rate</th>
                <th className="border-0 text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderedProductsData.map(product => (
                <tr key={product.id} className="border-200">
                  <td className="align-middle">
                    <h6 className="mb-0 text-nowrap">{product.name}</h6>
                    <p className="mb-0">{product.desc}</p>
                  </td>
                  <td className="align-middle text-center">
                    {product.quantity}
                  </td>
                  <td className="align-middle text-end">
                    $
                    {parseFloat(product.rate).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2
                    })}
                  </td>
                  <td className="align-middle text-end">
                    $
                    {parseFloat(product.quantity * product.rate).toLocaleString(
                      undefined,
                      { maximumFractionDigits: 2, minimumFractionDigits: 2 }
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="g-0 justify-content-end">
            <Col xs="auto">
              <Table borderless size="sm" className="fs--1 text-end">
                <tbody>
                  <tr>
                    <th className="text-900">Subtotal:</th>
                    <td className="fw-semi-bold">
                      $
                      {parseFloat(subtotal).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-900">Tax 5%:</th>
                    <td className="fw-semi-bold">
                      $
                      {parseFloat(tax).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2
                      })}
                    </td>
                  </tr>
                  <tr className="border-top">
                    <th className="text-900">Total:</th>
                    <td className="fw-semi-bold">
                      $
                      {parseFloat(subtotal + tax).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

OrderedProducts.propTypes = {};

export default OrderedProducts;

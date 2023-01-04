import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import ProductDetailsMedia from './ProductDetailsMedia';
import ProductDetailsMain from './ProductDetailsMain';
import ProductDetailsFooter from './ProductDetailsFooter';
import { ProductContext } from 'context/Context';
import CartModal from '../../cart/CartModal';
import Flex from 'components/common/Flex';

const ProductDetails = () => {
  const { productId } = useParams();

  const {
    productsState: { products },
    productsDispatch
  } = useContext(ProductContext);

  const product = products.find(product => product.id === productId);

  return product ? (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <ProductDetailsMedia product={product} />
            </Col>
            <Col lg={6} as={Flex} justifyContent="between" direction="column">
              <ProductDetailsMain
                product={product}
                productsDispatch={productsDispatch}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ProductDetailsFooter
                product={product}
                productsDispatch={productsDispatch}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <CartModal />
    </>
  ) : (
    <Navigate to={`/e-commerce/product/product-details/${products[0].id}`} />
  );
};

export default ProductDetails;

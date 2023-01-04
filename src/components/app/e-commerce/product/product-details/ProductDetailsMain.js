import classNames from 'classnames';
import IconButton from 'components/common/IconButton';
import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductContext } from 'context/Context';
import useProductHook from '../useProductHook';
import StarRating from 'components/common/StarRating';
import QuantityController from '../../QuantityController';

const ProductDetailsMain = ({ product }) => {
  const {
    id,
    name,
    category,
    rating,
    totalReview,
    favorite,
    shortDescription,
    price,
    salePrice,
    discount,
    shippingCost,
    isInStock,
    tags
  } = product;
  const { isInFavouriteItems } = useContext(ProductContext);

  const [productCount, setProductCount] = useState(1);

  const { handleAddToCart, handleFavouriteClick } = useProductHook(product);

  const handleQuantityChange = e => {
    setProductCount(parseInt(e.target.value < 1 ? 1 : e.target.value));
  };

  const handleQuantityIncrease = () => {
    setProductCount(productCount + 1);
  };

  const handleQuantityDecrease = () => {
    productCount > 1 && setProductCount(productCount - 1);
  };

  return (
    <>
      <h5>{name}</h5>
      <Link to="#!" className="fs--1 mb-2 d-block">
        {category}
      </Link>
      <div className="fs--2 mb-3 d-inline-block">
        <StarRating readonly rating={rating} />
        <span className="ms-1 text-600">({totalReview})</span>
      </div>
      {shortDescription && <p className="fs--1">{shortDescription}</p>}
      <h4 className="d-flex align-items-center">
        <span className="text-warning me-2">
          {`$${salePrice ? salePrice : price}`}
        </span>
        {salePrice && (
          <span className="me-1 fs--1 text-500">
            <del className="me-1">{`$${price}`}</del>
            <strong>-{discount}%</strong>
          </span>
        )}
      </h4>
      <p className="fs--1 mb-1">
        <span>Shipping Cost:</span>
        <strong> ${shippingCost}</strong>
      </p>
      <p className="fs--1">
        Stock:{' '}
        <strong
          className={classNames({
            'text-success': isInStock,
            'text-danger': !isInStock
          })}
        >
          {isInStock ? 'Available' : 'Stock-Out'}
        </strong>
      </p>
      {tags && (
        <p className="fs--1 mb-3">
          Tags:
          {tags?.map((tag, index) => (
            <Link
              to="#!"
              key={tag}
              className={classNames({
                'ms-2': index === 0,
                'ms-1': index > 0
              })}
            >
              {tag},
            </Link>
          ))}
        </p>
      )}
      <Row>
        <Col xs="auto" className="pe-0">
          <div className="">
            <QuantityController
              quantity={productCount}
              handleChange={handleQuantityChange}
              handleIncrease={handleQuantityIncrease}
              handleDecrease={handleQuantityDecrease}
            />
          </div>
        </Col>
        <Col xs="auto" className="px-2 px-md-3">
          <IconButton
            iconClassName="me-sm-2"
            variant="primary"
            size="sm"
            icon="cart-plus"
            onClick={() => handleAddToCart(productCount, true)}
          >
            <span className="d-none d-sm-inline-block">Add To Cart</span>
          </IconButton>
        </Col>
        <Col xs="auto" className="px-0">
          <IconButton
            className="border-300"
            iconClassName="me-1"
            variant="outline-danger"
            size="sm"
            icon={isInFavouriteItems(id) ? 'heart' : ['far', 'heart']}
            onClick={handleFavouriteClick}
          >
            {favorite}
          </IconButton>
        </Col>
      </Row>
    </>
  );
};

ProductDetailsMain.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shippingCost: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    totalReview: PropTypes.number.isRequired,
    isInStock: PropTypes.bool.isRequired,
    shortDescription: PropTypes.string,
    tags: PropTypes.array,
    favorite: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default ProductDetailsMain;

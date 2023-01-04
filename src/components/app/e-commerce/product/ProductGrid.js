import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import { Button, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import { ProductContext } from 'context/Context';
import useProductHook from './useProductHook';
import ProductImage from './ProductImage';
import StarRating from 'components/common/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductGrid = ({ product, ...rest }) => {
  const {
    name,
    category,
    id,
    price,
    salePrice,
    shippingCost,
    rating,
    totalReview,
    isInStock,
    isNew,
    files
  } = product;

  const { isInFavouriteItems } = useContext(ProductContext);

  const { handleAddToCart, handleFavouriteClick } = useProductHook(product);
  return (
    <Col className="mb-4" {...rest}>
      <Flex
        direction="column"
        justifyContent="between"
        className="border rounded-1 h-100 pb-3"
      >
        <div className="overflow-hidden">
          <ProductImage
            name={name}
            id={id}
            isNew={isNew}
            files={files}
            layout="grid"
          />
          <div className="p-3">
            <h5 className="fs-0">
              <Link
                className="text-dark"
                to={`/e-commerce/product/product-details/${id}`}
              >
                {name}
              </Link>
            </h5>
            <p className="fs--1 mb-3">
              <Link to="#!" className="text-500">
                {category}
              </Link>
            </p>
            <h5 className="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">
              {`$${salePrice ? salePrice : price}`}
              {salePrice && <del className="ms-2 fs--1 text-500">${price}</del>}
            </h5>
            <p className="fs--1 mb-1">
              Shipping Cost: <strong>${shippingCost}</strong>
            </p>
            <p className="fs--1 mb-1">
              Stock:{' '}
              <strong
                className={classNames({
                  'text-success': isInStock,
                  'text-danger': !isInStock
                })}
              >
                {isInStock ? 'Available' : 'Sold-Out'}
              </strong>
            </p>
          </div>
        </div>
        <Flex alignItems="center" className="px-3">
          <div className="flex-1">
            <StarRating readonly rating={rating} />
            <span className="ms-1">({totalReview})</span>
          </div>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Add to Wish List</Tooltip>}
          >
            <Button
              variant="falcon-default"
              size="sm"
              onClick={handleFavouriteClick}
              className="me-2"
            >
              <FontAwesomeIcon
                icon={isInFavouriteItems(id) ? 'heart' : ['far', 'heart']}
              />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Add to Cart</Tooltip>}
          >
            <Button
              variant="falcon-default"
              size="sm"
              onClick={() => handleAddToCart(1, true, true)}
            >
              <FontAwesomeIcon icon="cart-plus" />
            </Button>
          </OverlayTrigger>
        </Flex>
      </Flex>
    </Col>
  );
};

ProductGrid.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    features: PropTypes.array,
    price: PropTypes.number.isRequired,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shippingCost: PropTypes.number,
    rating: PropTypes.number,
    totalReview: PropTypes.number,
    isInStock: PropTypes.bool,
    isNew: PropTypes.bool,
    files: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default ProductGrid;

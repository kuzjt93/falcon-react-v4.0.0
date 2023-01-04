import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import classNames from 'classnames';

const sliderSettings = {
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProductSingleImage = ({ id, image, name, layout }) => {
  return (
    <Link
      to={`/e-commerce/product/product-details/${id}`}
      className="d-block h-sm-100"
      key={image.id}
    >
      <Image
        rounded={layout === 'list'}
        src={image.src}
        className={classNames('h-100 w-100 fit-cover', {
          'rounded-top': layout === 'grid'
        })}
        alt={name}
      />
    </Link>
  );
};

const ProductImage = ({ name, id, isNew, files, layout }) => {
  return (
    <div
      className={classNames('position-relative rounded-top overflow-hidden', {
        'h-sm-100': layout === 'list'
      })}
    >
      {files.length === 1 && (
        <ProductSingleImage
          id={id}
          image={files[0]}
          name={name}
          layout={layout}
        />
      )}
      {files.length > 1 && (
        <Slider
          {...sliderSettings}
          className="slick-slider-arrow-inner h-100 full-height-slider"
        >
          {files.map(image => (
            <ProductSingleImage
              key={image.id}
              id={id}
              image={image}
              name={name}
              layout={layout}
            />
          ))}
        </Slider>
      )}
      {isNew && (
        <Badge
          pill
          bg="success"
          className="position-absolute top-0 end-0 me-2 mt-2 fs--2 z-index-2"
        >
          New
        </Badge>
      )}
    </div>
  );
};

ProductSingleImage.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isNew: PropTypes.bool,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  layout: PropTypes.string.isRequired
};

export default ProductImage;

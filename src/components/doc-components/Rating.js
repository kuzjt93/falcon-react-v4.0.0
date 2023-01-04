import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';
import StarRating from 'components/common/StarRating';
import Rating from 'react-rating';

const defaultRatingCode = `function DefaultRatingExample() {
  return (
    <Rating
      initialRating={2}
    />
  );
}`;
const customIconCode = `function DefaultRatingExample() {
  return (
    <Rating
      initialRating={2}
      fullSymbol={
        <FontAwesomeIcon icon="star" className="text-warning fs-2" />
      }
      emptySymbol={
        <FontAwesomeIcon icon="star" className="text-300 fs-2" />
      }
    />
  );
}`;

const readOnlyCode = `function ReadOnlyExample() {
  return (
    <Rating
      readonly
      initialRating={2}
      fullSymbol={
        <FontAwesomeIcon icon="heart" className="text-warning fs-2" />
      }
      emptySymbol={
        <FontAwesomeIcon icon="heart" className="text-300 fs-2" />
      }
    />
  );
}`;

const fractionalRatingCode = `function FractionalRatingExample() {
  return (
    <Rating
      fractions={2}
      initialRating={2.5}
      fullSymbol={
        <FontAwesomeIcon icon="heart" className="text-warning fs-2" />
      }
      emptySymbol={
        <FontAwesomeIcon icon={['far','heart']} className="text-300 fs-2" />
      }
    />
  );
}`;

const oneToTenCode = `function Example() {
  return (
    <Rating
      stop={10}
      fractions={2}
      initialRating={2.5}
      fullSymbol={
        <FontAwesomeIcon icon="circle" className="text-warning fs-2" />
      }
      emptySymbol={
        <FontAwesomeIcon icon={['far','circle']} className="text-300 fs-2" />
      }
    />
  );
}`;

const placeholderCode = `function PlaceholderExample() {
  return (
    <Rating
      placeholderRating={3.5}
      emptySymbol={<FontAwesomeIcon icon={['far','star']} className="text-warning fs-2" />}
      placeholderSymbol={<FontAwesomeIcon icon="star" className="text-danger fs-2" />}
      fullSymbol={<FontAwesomeIcon icon="star" className="text-warning fs-2" />}
    />
  );
}`;

const starRatingPropTypesCode = `
  StarRating.propTypes = {
    fractions: PropTypes.number,
    rating: PropTypes.number.isRequired,
    handleChange: PropTypes.func
    // Pass any other Rating props
  };
`;

const starRatingCode = `function StarRatingExample() {
  return (
    <StarRating
      className="fs-2"
      rating={3}
    />
  );
}`;

const RatingExample = () => (
  <>
    <PageHeader
      title="Rating"
      description="React-Falcon uses <strong>React Rating</strong> as rating component. <strong>React Rating</strong> is a react rating component which supports custom symbols both with inline styles and glyphicons found in popular CSS Toolkits like <strong>Fontawesome</strong> or <strong>Bootstrap</strong>."
      className="mb-3"
    >
      <Button
        href="https://github.com/dreyescat/react-rating"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Rating Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Basic Example" />
          <FalconComponentCard.Body
            code={defaultRatingCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Custom Icon" />
          <FalconComponentCard.Body
            code={customIconCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Readonly rating" />
          <FalconComponentCard.Body
            code={readOnlyCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Fractional rating" />
          <FalconComponentCard.Body
            code={fractionalRatingCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="1 to 10 rating" />
          <FalconComponentCard.Body
            code={oneToTenCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Placeholder" />
          <FalconComponentCard.Body
            code={placeholderCode}
            scope={{ Rating, FontAwesomeIcon }}
            language="jsx"
          />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Star Rating" light={false}>
        <p className="mb-0">
          <strong>StarRating</strong> is a custom component for star rating. Use
          this component for star rating only.
        </p>
      </FalconComponentCard.Header>
      <FalconEditor
        code={starRatingPropTypesCode}
        language="jsx"
        hidePreview
        // theme={vsLight}
        // className="bg-100"
        className="rounded-0"
      />
      <FalconComponentCard.Body
        code={starRatingCode}
        language="jsx"
        scope={{ StarRating }}
      />
    </FalconComponentCard>
  </>
);

export default RatingExample;

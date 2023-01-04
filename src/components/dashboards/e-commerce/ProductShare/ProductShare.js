import React from 'react';
import { Card } from 'react-bootstrap';
import SoftBadge from 'components/common/SoftBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import ProductShareChart from './ProductShareChart';

const ProductShare = () => {
  return (
    <Card className="h-md-100">
      <Card.Header className="pb-0">
        <h6 className="mb-0 mt-2">Product Share</h6>
      </Card.Header>

      <Card.Body as={Flex} alignItems="end" justifyContent="between">
        <div>
          <h2 className="mb-1 text-700 fw-normal lh-1 fs-2">34.6%</h2>
          <SoftBadge pill bg="warning" className="me-2 fs--2">
            <FontAwesomeIcon icon="caret-up" className="me-1" />
            3.5%
          </SoftBadge>
        </div>
        <div>
          <div className="my-n5">
            <ProductShareChart />
          </div>
          <p className="mb-0 mt-4 text-center fs--2 text-500">
            Target: <span className="text-800"> 55% </span>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductShare;

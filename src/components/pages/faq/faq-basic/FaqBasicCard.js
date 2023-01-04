import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import FaqBasicItem from './FaqBasicItem';
import Flex from 'components/common/Flex';
import classNames from 'classnames';

const FaqBasicCard = ({ faqs, header, headerText, bodyClass }) => {
  return (
    <Card className="mb-3">
      {header && (
        <Card.Header>
          <h4 className="text-center mb-0">{headerText}</h4>
        </Card.Header>
      )}

      <Card.Body className={classNames(bodyClass)}>
        {faqs.map((faq, index) => (
          <FaqBasicItem
            key={faq.id}
            faq={faq}
            isLast={index === faqs.length - 1}
          />
        ))}
      </Card.Body>
      <Card.Footer>
        <Flex alignItems={'center'}>
          <h5 className="d-inline-block me-3 mb-0 fs--1">
            Was this information helpful?
          </h5>
          <Button variant="falcon-default" size="sm">
            Yes
          </Button>
          <Button variant="falcon-default" size="sm" className="ms-2">
            No
          </Button>
        </Flex>
      </Card.Footer>
    </Card>
  );
};

FaqBasicCard.propTypes = {
  faqs: PropTypes.array.isRequired,
  header: PropTypes.bool,
  headerText: PropTypes.string,
  bodyClass: PropTypes.string
};

export default FaqBasicCard;

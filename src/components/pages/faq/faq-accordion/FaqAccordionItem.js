import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import createMarkup from 'helpers/createMarkup';

const FaqAccordionItem = ({ faq, isFirst, isLast }) => {
  return (
    <Card
      className={classNames('shadow-none', {
        'rounded-bottom-0': isFirst,
        'border-bottom': !isLast,
        'rounded-0': !isLast && !isFirst
      })}
    >
      <Accordion.Item eventKey={faq.id} className="border-0">
        <Card.Header className="p-0" id={`faqAccordionHeading${faq.id}`}>
          <Accordion.Button className="btn btn-link text-decoration-none d-block w-100 py-2 px-3 border-0 rounded-0 text-start shadow-none">
            <FontAwesomeIcon
              icon="caret-right"
              className="accordion-icon me-3 "
              transform="shrink-2"
            />
            <span className="fw-medium font-sans-serif text-900">
              {faq.title}
            </span>
          </Accordion.Button>
        </Card.Header>
        <Accordion.Body className="p-0">
          <Card.Body className="pt-2">
            <div
              className="ps-3"
              dangerouslySetInnerHTML={createMarkup(faq.description)}
            />
          </Card.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Card>
  );
};

FaqAccordionItem.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  faq: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default FaqAccordionItem;

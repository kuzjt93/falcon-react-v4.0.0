import React, { useState } from 'react';
import PageHeader from 'components/common/PageHeader';
import { Accordion, Card } from 'react-bootstrap';
import FaqAccordionItem from './FaqAccordionItem';
import { faqAccordions as faqsData } from 'data/faqs';

const FaqAccordion = () => {
  const [faqs] = useState(faqsData);
  return (
    <>
      <PageHeader
        title="FAQ Accordion"
        description="Below you'll find answers to the questions we get asked the most about to join with Falcon"
        className="mb-3"
      />
      <Card>
        <Card.Body>
          <Accordion
            id="accordionFaq"
            className="border rounded overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <FaqAccordionItem
                key={faq.id}
                faq={faq}
                isFirst={index === 0}
                isLast={index === faqs.length - 1}
              />
            ))}
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default FaqAccordion;

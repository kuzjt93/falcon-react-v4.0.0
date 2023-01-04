import React, { useState } from 'react';
import PageHeader from 'components/common/PageHeader';
import { faqs as faqsData } from 'data/faqs';
import FaqBasicCard from './FaqBasicCard';

const FaqBasic = () => {
  const [faqs] = useState(faqsData);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Below you'll find answers to the questions we get <br class='d-none.d-sm-block' /> asked the most about to join with Falcon"
        className="mb-3"
      />
      <FaqBasicCard faqs={faqs} />
    </>
  );
};

export default FaqBasic;

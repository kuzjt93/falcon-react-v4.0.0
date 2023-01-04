import React, { useState } from 'react';
import PageHeader from 'components/common/PageHeader';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import PricingDefaultHeader from './PricingDefaultHeader';
import PricingDefaultCard from './PricingDefaultCard';
import useFakeFetch from 'hooks/useFakeFetch';
import { pricingData } from 'data/pricing';
import FaqBasicCard from 'components/pages/faq/faq-basic/FaqBasicCard';
import { faqs as faqsData } from 'data/faqs';

const PricingDefault = () => {
  const [faqs] = useState(faqsData);
  const { loading: priceLoading, data: pricing } = useFakeFetch(
    pricingData,
    1000
  );

  return (
    <>
      <PageHeader
        preTitle="Free for 30 days"
        title="For teams of all sizes, in the cloud"
        description="Get the power, control, and customization you need to manage your <br className='d-none.d-md-block' /> team’s and organization’s projects."
        className="mb-3"
        titleTag="h2"
      >
        <Link className="btn btn-sm btn-link ps-0" to="#!">
          Have questions? Chat with us
        </Link>
      </PageHeader>
      <Card className="mb-3">
        <Card.Body>
          <Row className="g-0">
            <PricingDefaultHeader />
            {priceLoading ? (
              <Col xs={12} className="py-4">
                <Spinner
                  className="position-absolute start-50"
                  animation="grow"
                />
              </Col>
            ) : (
              pricing.map(pricing => (
                <PricingDefaultCard key={pricing.id} pricing={pricing} />
              ))
            )}
            <Col xs={12} className="text-center">
              <h5 className="mt-5">
                Looking for personal or small team task management?
              </h5>
              <p className="fs-1">
                Try the <Link to="#!">basic version</Link> of Falcon
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <FaqBasicCard
        faqs={faqs}
        header
        headerText="Frequently asked questions"
        bodyClass="bg-light"
      />
    </>
  );
};

export default PricingDefault;

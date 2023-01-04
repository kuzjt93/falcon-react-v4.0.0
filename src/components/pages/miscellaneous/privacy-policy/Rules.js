import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rules = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rules" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Rules and abuse</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">General rules</h6>
        <p className="fs-0 mb-0 fw-semi-bold">
          You promise to follow these rules:
        </p>
        <ol type="1">
          <li>
            You won’t send Spam! By "spam", we mean the definition provided by
            Spamhaus;
          </li>
          <li>
            You won’t use purchased, rented, or third-party lists of email
            addresses;
          </li>
          <li>
            You won’t violate our <Link to="#!">Acceptable use policy</Link>,
            which is part of this Agreement;
          </li>
          <li>
            If you violate any of these rules, then we may suspend or terminate
            your account;
          </li>
          <li>
            You will comply with all applicable data protection legislation,
            including the EU General Data Protection Regulation; and
          </li>
          <li>ou may only use our bandwidth for your use of the Service.</li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">You shall:</p>
        <ol type="1">
          <li>
            provide us with all necessary cooperation in relation to the Service
            and all necessary access to such information as may be required by
            us in order to provide you with the Service;
          </li>
          <li>
            comply with all applicable laws and regulations with respect to your
            Content and activities under these Terms;
          </li>
          <li>
            obtain and shall maintain all necessary licenses, consents, and
            permissions necessary for us, our contractors and agents to perform
            our obligations under these Terms, including without limitation the
            Service;
          </li>
          <li>
            ensure that your Amazon Web Services (“AWS”) account complies with
            the requirements specified by us on our website from time to time;
            and
          </li>
          <li>
            be solely responsible for maintaining your AWS account necessary for
            the provision of the Service.
          </li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">Reporting abuse</h6>
        <p className="mb-0 ps-3">
          If you think anyone is violating any of these Terms, please{' '}
          <a href="mailto:info@themewagon.com">notify us</a> immediately. If you
          received spam you think came from a falcon user, we want to{' '}
          <a href="mailto:info@themewagon.com">hear about it</a>. If you think
          anyone has posted material that violates any copyrights, then you may{' '}
          <a href="mailto:info@themewagon.com">notify us</a>
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">SES and third-party providers</h6>
        <ol type="1">
          <li>
            As a condition of using the Service, you shall enable us to access
            your AWS account. Subject to the terms of these Terms, you
            acknowledge and agree that access to AWS, the AWS Simple Email
            Service (SES) and the AWS Simple Notification Service (SNS) is not
            provided to you under these Terms, and is subject to a separate
            agreement between you and Amazon Web Services.
          </li>
          <li>
            falcon facilitates integration with a number of third party services
            which you can use in relation to your account or your Contents
            (“Third Party Service”), although we make no warranty as to any
            ongoing support for any third party service. We make no
            representation or commitment and shall have no liability or
            obligation whatsoever in relation to the content or use of, or
            correspondence with, any Third Party Service. Any contract entered
            into and any transaction completed by means of your use of the
            Service with any Third Party Service is between you and the relevant
            third party, and not us. We recommend that you refer to the third
            party’s website terms and conditions and privacy policy prior to
            using the relevant Third Party Service.
          </li>
          <li>
            You acknowledge that the AWS or an operator of a Third Party Service
            may render ineffective or impair the sending, receipt of viewing of
            any Content (for example, by breaking links in the Content or
            removing images from the Content). For the avoidance of doubt, you
            acknowledge that we shall have no liability to you in respect of any
            such action.
          </li>
          <li>
            If at any time you cease to have a current SES account in good
            standing, you will be unable to use the Service. Your obligation to
            pay for any unpaid invoice fees will remain unaffected.
          </li>
        </ol>
      </Card.Body>
    </Card>
  );
});

export default Rules;

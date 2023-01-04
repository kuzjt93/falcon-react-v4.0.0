import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Account = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="account" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Account</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">Eligibility</h6>
        <p className="fs-0 mb-0 fw-semi-bold">
          In order to use the Service, you must:
        </p>
        <ol type="1">
          <li>
            be a business or a consumer able to enter into valid contracts;
          </li>
          <li>complete the signup process;</li>
          <li>agree to the Terms; and</li>
          <li>provide true, complete, and up to date contact information.</li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">Accepting these Terms</h6>
        <p className="mb-0 ps-3">
          These Terms apply from when you sign up for the Service. Clicking the
          ‘Get started’ or ‘Sign up with Google’ button on the Sign up page
          means that you’ve officially “signed” the Terms and a binding contract
          will come into existence on the basis of the Terms (“Agreement”). If
          you sign up for the Service on behalf of a company or other entity,
          you represent and warrant that you have the authority to accept these
          Terms on their behalf.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Closing your account</h6>
        <p className="mb-0 ps-3">
          You or we may terminate this Agreement at any time and for any reason
          by giving notice in writing (including email) to the other party. You
          need to clear the unpaid invoices (if any exists) before terminating
          this Agreement. Once terminated, we may permanently delete your
          account and all the data associated with it, including your Content
          from our Website.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Changes</h6>
        <p className="mb-0 ps-3">
          We may change any of the Terms by posting revised Terms of Use on our
          Website and sending an email to the last email address you gave us or
          a message to your account area of the Service (“Dashboard”). Unless
          you terminate your account within seven (7) days of that email, the
          new Terms will be effective immediately and apply to any continued or
          new use of the Service. We may change the Website, the Service, or any
          features of the Service at any time.
        </p>
        <hr className="my-4f" />
        <h6 className="text-primary">Account and password</h6>
        <p className="mb-0 ps-3">
          You’re responsible for keeping your account name and password
          confidential. You’re also responsible for any use of your account,
          whether or not you authorized the use. You must immediately notify us
          of any unauthorized use of your accounts. We’re not responsible for
          any losses due to stolen or hacked passwords. We don’t have access to
          your current password, and for security reasons, we may only reset
          your password.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Account;

import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Subscription = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="subscriptions" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Subscriptions and payment</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">Free service</h6>
        <p className="mb-0 ps-3">
          We may make certain Services available to you free of charge, up to
          certain limits as described on the Website (“Free Services”). Usage of
          the Services in excess of those limits requires a payment. We may
          terminate your access to the Free Services at any time without prior
          notice and will have no liability in respect of such termination.
          Without limiting the scope of clause 15, Free Services are provided
          without any warranty.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Paid service</h6>
        <ol type="1">
          <li>
            If you use our Services and cross the limits of the Free Services we
            provide, the ‘Paid service’ section applies for you
          </li>
          <li>
            The “Invoice Payment” are the fees payable for your invoice, as
            specified to you when you use our Service beyond the free usage
            limit. You shall pay for the Invoice Payment to us for the term of
            your paid usage.
          </li>
          <li>
            You won’t be charged for using our services until your usage crosses
            the free usage limit. At the end of each month (considering you have
            used beyond our free usage limit), we will generate an invoice
            containing your usage information, and the due amount for that
            month.
          </li>
          <li>
            Invoice Fees are payable in the currency specified when you sign up
            for the Service and are exclusive of value added tax (or other
            applicable sales tax), which shall be added at the appropriate rate.
          </li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">Credit cards</h6>
        <p className="mb-0 ps-3">
          As long as you’re a paid user or have an outstanding balance with us,
          you will provide us with valid credit card information and authorize
          us to deduct the monthly invoice charges against that credit card
          (considering you have used beyond our free usage limit). We do not
          save card information that you provided, rather we use Stripe. You
          must replace the information for any credit card that expires with
          information for a different valid credit card. You can add multiple
          credit cards in our service, but only the card that you mark as
          Primary will be used to charge you for using paid services.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Refunds</h6>
        <p className="mb-0 ps-3">
          You won’t be entitled to a refund from us. As a postpaid service, it’s
          invalid. But if your invoice has inappropriate information due to any
          software bug or any other reason, we will refund the extra amount we
          charged within 14 working days after the discovery. You need to let us
          know about the extra amount charged from you.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Subscription;

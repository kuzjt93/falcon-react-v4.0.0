import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Liability = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="liability" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Liability</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">Indemnity</h6>
        <p className="mb-0 ps-3">
          You shall defend, indemnify and hold us harmless against claims,
          actions, proceedings, losses, damages, expenses and costs (including
          without limitation court costs and reasonable legal fees) arising out
          of or in connection with your use of the Service (or us taking any
          action in relation to the Service at your direction), including any
          claim or action from a recipient of any Content sent by means of the
          Service.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">
          Our responsibility for loss or damage if you are a business
        </h6>
        <p className="fs-0 mb-0 fw-semi-bold">
          Our responsibility for loss or damage if you are a business
        </p>
        <ol type="1">
          <li>arising under or in connection with these Terms;</li>
          <li>in respect of any use made by you of the Service; and</li>
          <li>
            in respect of any representation, statement or tortious act or
            omission (including negligence) arising under or in connection with
            these Terms.
          </li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">
          Except as expressly and specifically provided in these Terms:
        </p>
        <ol type="1">
          <li>
            you assume sole responsibility for results obtained from your use of
            the Service, and for conclusions drawn from such use. We shall have
            no liability for any damage caused by errors or omissions in any
            information, instructions or scripts provided to us by you in
            connection with the Service, or any actions taken by us at your
            direction;
          </li>
          <li>
            all warranties, representations, conditions and all other terms of
            any kind whatsoever implied by statute or common law are, to the
            fullest extent permitted by applicable law, excluded from these
            Terms; and
          </li>
          <li>the Service is provided to you on an “as is” basis.</li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">
          Nothing in these Terms excludes our liability:
        </p>
        <ol type="1">
          <li>for death or personal injury caused by our negligence; or</li>
          <li>for fraud or fraudulent misrepresentation.</li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">
          Subject to section 15.3 above: We shall not be liable whether in tort
          (including for negligence or breach of statutory duty), contract,
          misrepresentation, restitution or otherwise for any:
        </p>
        <ol type="1">
          <li>loss of profits,</li>
          <li>loss of business,</li>
          <li>depletion of goodwill and/or similar losses,</li>
          <li>loss or corruption of data or information,</li>
          <li>pure economic loss, or</li>
          <li>
            special, indirect or consequential loss, costs, damages, charges or
            expenses however arising under these Terms;
          </li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">
          Our responsibility for loss or damage if you are a consumer
        </p>
        <ol type="1">
          <li>
            We are responsible to you for foreseeable loss and damage caused by
            us. If we fail to comply with these terms, we are responsible for
            loss or damage you suffer that is a foreseeable result of our
            breaking this contract or our failing to use reasonable care and
            skill, but we are not responsible for any loss or damage that is not
            foreseeable. Loss or damage is foreseeable if either it is obvious
            that it will happen or if, at the time the contract was made, both
            we and you knew it might happen, for example, if you discussed it
            with us during the sales process.
          </li>
          <li>
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents or subcontractors; for fraud or fraudulent
            misrepresentation; for breach of your legal consumer rights in
            relation to the Service.
          </li>
          <li>
            We are not liable for business losses. If you are a consumer we only
            supply our services to you for domestic and private use. If you use
            our service for any commercial, business or resale purpose our
            liability to you will be limited as set out in Clause 15.
          </li>
        </ol>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">Force majeur</p>
        <p className="mb-0 ps-3">
          We won’t be held liable for any delays or failure in performance of
          any part of the Service, from any cause beyond our control. This
          includes, but is not limited to, changes to law or regulations,
          embargoes, fires, earthquakes, floods, strikes, power blackouts,
          unusually severe weather conditions, and acts of hackers or
          third-party internet service providers.
        </p>
        <hr className="my-4" />
        <p className="fs-0 mb-0 fw-semi-bold">Data processing term</p>
        <p className="mb-0 ps-3">
          To the extent that you are a business and we process personal data on
          your behalf in providing the Services, the{' '}
          <Link to="#!">Data processing terms</Link> shall apply and are
          incorporated into these Terms.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Liability;

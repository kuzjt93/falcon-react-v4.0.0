import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Rights = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rights" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Rights</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">Proprietary rights owned by us</h6>
        <p className="mb-0 ps-3">
          Subject to the limited rights expressly granted in these Terms, we
          reserve all our rights in and to the Services, including all of our
          related intellectual property rights (including patents, trademarks,
          trade secrets, and copyrights). No rights are granted to you under
          these Terms other than as expressly set forth in these Terms. You will
          respect our proprietary rights. “falcon” and the “falcon” logo are
          trademarks belonging to ThemeWagon, Inc. You are not authorized by us
          to use our trademarks or brand assets without prior permission.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Proprietary rights owned by you</h6>
        <p className="mb-0 ps-3">
          ou represent and warrant that you either own or have permission to use
          all of your Content. You retain ownership of your Content. By using
          the Service you grant us and our agents and subcontractors a license
          to use your Content in order for us to provide, and ensure proper
          operation of the Service. You acknowledge and agree that we will have
          the right to use your Content in an anonymized way (which does not
          identify you or the recipient) for the purposes of increasing our spam
          identification techniques.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Privacy Policy</h6>
        <p className="mb-0 ps-3">
          We may use and disclose your information according to our Privacy
          Policy. Our Privacy Policy is treated as part of these Terms
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Waiver</h6>
        <p className="mb-0 ps-3">
          Even if we delay in enforcing these terms, we can still enforce them
          later. If we do not insist immediately that you do anything you are
          required to do under these terms, or if we delay in taking steps
          against you in respect of your breaking them, that will not mean that
          you do not have to do those things and it will not prevent us from
          taking steps against you at a later date.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Survival</h6>
        <p className="mb-0 ps-3">
          Any of these terms that expressly or by implication is intended to
          continue or come into force on or after termination of this Agreement
          shall continue in full force and effect. Without limitation, clauses
          14 Indemnity, 15 Our responsibility for loss or damage Suffered by you
          if you are a business, 16 Our responsibility for loss or damage
          suffered by you if you are a consumer, 18 Data processing terms, 28
          Third party rights,29 If you are a business – governing law and
          jurisdiction, and 30 Which laws apply to this contract and where you
          may bring legal proceedings if you are a consumer shall continue in
          full force and effect notwithstanding the termination of this
          Agreement.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Severance</h6>
        <ol type="1">
          <li>
            If any provision (or part of a provision) of these Terms is found by
            any court or administrative body of competent jurisdiction to be
            invalid, unenforceable or illegal, the other provisions shall remain
            in force.
          </li>
          <li>
            If any invalid, unenforceable or illegal provision would be valid,
            enforceable or legal if some part of it were deleted, the provision
            shall apply with whatever modification is necessary to give effect
            to the commercial intention of the parties.
          </li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">Entire agreement</h6>
        <ol type="1">
          <li>
            These Terms and any documents referred to in them constitute the
            whole agreement between the parties and supersede any previous
            arrangement, understanding or agreement between them relating to the
            subject matter they cover
          </li>
          <li>
            Each of the parties acknowledges and agrees that in entering into
            these Terms it does not rely on any undertaking, promise, assurance,
            statement, representation, warranty or understanding (whether in
            writing or not) of any person (whether party to these Terms or not)
            relating to the subject matter of these Terms, other than as
            expressly set out in these Terms.
          </li>
        </ol>
        <h6 className="text-primary">Assignment</h6>
        <ol type="1">
          <li>
            You shall not, without our prior written consent of us, assign,
            transfer, charge, sub-contract or deal in any other manner with all
            or any of our rights or obligations under these Terms.
          </li>
          <li>
            We may at any time assign, transfer, charge, sub-contract or deal in
            any other manner with all or any of our rights or obligations under
            these Terms.
          </li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">No partnership or agency</h6>
        <p className="mb-0 ps-3">
          Nothing in these Terms is intended to or shall operate to create a
          partnership between the parties, or authorize either party to act as
          agent for the other, and neither party shall have the authority to act
          in the name or on behalf of or otherwise to bind the other in any way
          (including, but not limited to, the making of any representation or
          warranty, the assumption of any obligation or liability and the
          exercise of any right or power).
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Third party rights</h6>
        <p className="mb-0 ps-3">
          These Terms do not confer any rights on any person or party other than
          you and us.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">
          If you are a business – Governing Law and Jurisdiction
        </h6>
        <ol type="1">
          <li>
            These Terms and any disputes or claims arising out of or in
            connection with them or their subject matter or formation (including
            non-contractual disputes or claims) are governed by, and construed
            in accordance with, the laws of the USA.
          </li>
          <li>
            The parties irrevocably agree that the courts of the USA have
            exclusive jurisdiction to settle any dispute or claim that arises
            out of or in connection with these Terms or its subject matter or
            formation (including non-contractual disputes or claims).
          </li>
        </ol>
        <hr className="my-4" />
        <h6 className="text-primary">
          Which laws apply to this contract and where you may bring legal
          proceedings if you are a consumer?
        </h6>
        <p className="mb-0 ps-3">
          These Terms are governed by USA law and you can bring legal
          proceedings in respect of the products in the USA courts. As a
          consumer, you will benefit from any mandatory provisions of the law of
          the country in which you are resident. Nothing in these terms and
          conditions, including this clause 30, affects your rights as a
          consumer to rely on such mandatory provisions of local law.
        </p>
        <p className="pt-2">
          Thank you for taking the time to read these Terms.
        </p>
        <p>Last update: 04 Nov 2020</p>
      </Card.Body>
    </Card>
  );
});

export default Rights;

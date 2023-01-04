import React, { useRef } from 'react';
import PageHeader from 'components/common/PageHeader';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import Account from './Account';
import Subscription from './Subscription';
import Termination from './Termination';
import Rules from './Rules';
import Liability from './Liability';
import Instructions from './Instructions';
import Rights from './Rights';
import useScrollSpy from 'react-use-scrollspy';

const PrivacyPolicy = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150
  });

  return (
    <>
      <PageHeader
        title="Privacy policy"
        description="A privacy policy is a statement or legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data."
        className="mb-3"
      />
      <Row className="g-0">
        <Col lg={8} className="pe-lg-2">
          <Account ref={sectionRefs[0]} />
          <Subscription ref={sectionRefs[1]} />
          <Termination ref={sectionRefs[2]} />
          <Rules ref={sectionRefs[3]} />
          <Liability ref={sectionRefs[4]} />
          <Rights ref={sectionRefs[5]} />
          <Instructions ref={sectionRefs[6]} />
        </Col>
        <Col lg={4} className="ps-lg-2">
          <div className="sticky-sidebar">
            <Card className="sticky-top">
              <Card.Header className="border-bottom">
                <h6 className="mb-0 fs-0">On this page</h6>
              </Card.Header>
              <Card.Body>
                <div
                  id="terms-sidebar"
                  className="terms-sidebar nav flex-column fs--1"
                >
                  <Nav.Item>
                    <Nav.Link
                      href="#account"
                      className="nav-link px-0 py-1"
                      active={activeSection === 0}
                    >
                      Account
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#subscriptions"
                      className="nav-link px-0 py-1"
                      active={activeSection === 1}
                    >
                      Subscriptions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#termination"
                      className="nav-link px-0 py-1"
                      active={activeSection === 2}
                    >
                      Termination
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rules"
                      className="nav-link px-0 py-1"
                      active={activeSection === 3}
                    >
                      Rules and abuse
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#liability"
                      className="nav-link px-0 py-1"
                      active={activeSection === 4}
                    >
                      Liability
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rights"
                      className="nav-link px-0 py-1"
                      active={activeSection === 5}
                    >
                      Rights
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#instructions"
                      className="nav-link px-0 py-1"
                      active={activeSection === 6}
                    >
                      Instructions
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PrivacyPolicy;

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { accountInfo, billingInfo } from 'data/ecommerce/customerDetailsData';
import classNames from 'classnames';
import createMarkup from 'helpers/createMarkup';

const CustomerInfo = () => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5 className="mb-0">Details</h5>
          </Col>
          <Col xs="auto">
            <IconButton
              iconClassName="fs--2 me-1"
              variant="falcon-default"
              size="sm"
              icon="pencil-alt"
            >
              Update details
            </IconButton>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="bg-light border-top">
        <Row>
          <Col lg xxl={5}>
            <h6 className="fw-semi-bold ls mb-3 text-uppercase">
              Account Information
            </h6>

            {accountInfo.map(item => (
              <Row key={item.id}>
                <Col xs={5} sm={4}>
                  <p className="fw-semi-bold mb-1">{item.label}</p>
                </Col>
                <Col>
                  <p
                    className={classNames('mb-1', {
                      'fst-italic text-400': !item.active
                    })}
                  >
                    {item.email || item.phone ? (
                      <a
                        href={`${item.email && `mailto:`}
                        ${item.phone && `tel:`}`}
                      >
                        {item.value}
                      </a>
                    ) : item.important ? (
                      <b>{item.value}</b>
                    ) : (
                      item.value
                    )}
                  </p>
                </Col>
              </Row>
            ))}
          </Col>
          <Col lg xxl={{ span: 5, offset: 1 }} className="mt-4 mt-lg-0">
            <h6 className="fw-semi-bold ls mb-3 text-uppercase">
              Billing Information
            </h6>

            {billingInfo.map(item => (
              <Row key={item.id}>
                <Col xs={5} sm={4}>
                  <p className="fw-semi-bold mb-1">{item.label}</p>
                </Col>
                <Col>
                  {item.label === 'Address' ? (
                    <p
                      className={classNames('mb-1', {
                        'fst-italic text-400': !item.active
                      })}
                      dangerouslySetInnerHTML={createMarkup(item.value)}
                    ></p>
                  ) : (
                    <p
                      className={classNames('mb-1', {
                        'fst-italic text-400': !item.active
                      })}
                    >
                      {item.email || item.phone ? (
                        <a
                          href={`${item.email && `mailto:`}
                      ${item.phone && `tel:`}`}
                        >
                          {item.value}
                        </a>
                      ) : item.important ? (
                        <b>{item.value}</b>
                      ) : (
                        item.value
                      )}
                    </p>
                  )}
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="border-top text-end">
        <IconButton
          iconClassName="fs--2 me-1"
          variant="falcon-default"
          size="sm"
          icon="dollar-sign"
        >
          Refund
        </IconButton>
        <IconButton
          className="ms-2"
          iconClassName="fs--2 me-1"
          variant="falcon-default"
          size="sm"
          icon="check"
        >
          Save changes
        </IconButton>
      </Card.Footer>
    </Card>
  );
};

export default CustomerInfo;

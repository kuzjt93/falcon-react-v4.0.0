import React, { forwardRef } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Instructions = forwardRef((props, ref) => {
  return (
    <Card className="mb-3 mb-lg-0" id="instructions" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Instructions</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="mb-3 text-primary">Instructions for Processing:</h6>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr className="bg-300">
              <td>
                <strong>Description</strong>
              </td>
              <td>
                <strong>Details</strong>
              </td>
            </tr>
            <tr>
              <td>Subject matter of the processing</td>
              <td>
                Providing the Customer with bulk email sending via the Falcon
                platform.
              </td>
            </tr>
            <tr>
              <td>Duration of the processing</td>
              <td>For the duration of the Agreement</td>
            </tr>
            <tr>
              <td>Nature and purposes of the processing</td>
              <td>
                Email address, Customer IP Address, First Name, Last Name,
                Timezone and any other personal data provided through a custom
                field.
              </td>
            </tr>
            <tr>
              <td>Type of Personal Data</td>
              <td>
                Email address, Customer IP Address, First Name, Last Name,
                Timezone and any other personal data provided through a custom
                field.
              </td>
            </tr>
            <tr>
              <td>Categories of Data Subject</td>
              <td>
                Recipients of the emails as specified when creating a campaign
              </td>
            </tr>
            <tr>
              <td>
                Plan for return and destruction of the data once the Customer
                wants to destroy them UNLESS there is a requirement under EU or
                applicable EU Member State law to preserve that type of data
              </td>
              <td>
                Campaign data (Sent, Delivered, Fails, Bounces, Opens, Clicks,
                Revenues, Sells, Complaints, Unsubscribes), Customer data (email
                addresses, first name, last name, timezone, and any associated
                custom fields) will be held forever until the request to
                terminate The customer data is received.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          IN WITNESS WHEREOF, this Addendum is entered into and becomes a
          binding part of the Agreement with effect from the last date of
          execution below.
        </p>
        <Row>
          <Col xs={6}>
            <p>
              <strong>Falcon</strong>
              <br />
            </p>
            <p>
              <strong>Signature _____________________________</strong>
              <br />
            </p>
            <p>
              <strong>Name: John Doe</strong>
              <br />
            </p>
            <p>
              <strong>Title: CEO</strong>
              <br />
            </p>
            <p>
              <strong>Date Signed:</strong>
            </p>
          </Col>
          <Col xs={6}>
            <p>
              <strong>Customer:</strong>
              <br />
            </p>
            <p>
              <strong>Signature _____________________________</strong>
              <br />
            </p>
            <p>
              <strong>Name:</strong>
              <br />
            </p>
            <p>
              <strong>Title:</strong>
              <br />
            </p>
            <p>
              <strong>Date Signed:</strong>
            </p>
          </Col>
        </Row>
        <p>Last update: 04 Nov 2020</p>
      </Card.Body>
    </Card>
  );
});

export default Instructions;

import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const ContactsFilteringForm = () => {
  return (
    <Card className="shadow-none shadow-show-xl scrollbar">
      <Card.Header className="bg-light d-none d-xl-block">
        <h6 className="mb-0">Filter</h6>
      </Card.Header>
      <Card.Body>
        <Form>
          <div className="mb-2 mt-n2">
            <Form.Label className="mb-1 fs--1">Contact Created</Form.Label>
            <Form.Select size="sm" defaultValue="Last Day">
              <option>None</option>
              <option>Today</option>
              <option>Last Day</option>
              <option>Last 7 days</option>
              <option>Choose a time period</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Zone of time</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Bangladesh Standard Time</option>
              <option>India Standard Time</option>
              <option>Pakistan Standard Time</option>
              <option>Central America Standard Time</option>
              <option>Nepal Standard Time</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Subscription</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Expired</option>
              <option>Pending</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Social</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>LinkedIn</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Agent</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Emma</option>
              <option>Luke</option>
              <option>Finley</option>
              <option>Peter Gill</option>
              <option>Sallie Reyes</option>
              <option>Freya</option>
              <option>Morrison</option>
              <option>Aar Kay</option>
              <option>Michele</option>
              <option>Banneker</option>
              <option>Romanin</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Group</Form.Label>
            <Form.Select defaultValue="Billing" size="sm">
              <option>None</option>
              <option>My Group</option>
              <option>Billing</option>
              <option>Customer Support</option>
              <option>Enhancement</option>
              <option>Unassigned</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label className="mb-1 mt-2 fs--1">Customer</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Emma</option>
              <option>Luke</option>
              <option>Finley</option>
              <option>Peter Gill</option>
              <option>Sallie Reyes</option>
              <option>Freya</option>
              <option>Morrison</option>
              <option>Aar Kay</option>
              <option>Michele</option>
              <option>Banneker</option>
              <option>Romanin</option>
            </Form.Select>
          </div>
        </Form>
      </Card.Body>
      <Card.Footer className="border-top border-200 py-x1">
        <Button varient="primary" className="w-100">
          Update
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ContactsFilteringForm;

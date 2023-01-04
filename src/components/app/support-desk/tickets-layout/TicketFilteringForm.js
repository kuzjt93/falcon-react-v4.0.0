import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const TicketFilteringForm = () => {
  return (
    <Card className="shadow-none shadow-show-xl scrollbar">
      <Card.Header className="bg-light d-none d-xl-block">
        <h6 className="mb-0">Filter</h6>
      </Card.Header>
      <Card.Body>
        <Form>
          <div className="mb-2 mt-n2">
            <Form.Label className="mb-1 fs--1">Priority</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Urgent</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Source</Form.Label>
            <Form.Select defaultValue="Facebook" size="sm">
              <option>None</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Chat</option>
              <option>Whatsapp</option>
              <option>Portal</option>
              <option>Bots</option>
              <option>External Email</option>
              <option>Ecommerce</option>
              <option>Feedback Widget</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Status</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Recent</option>
              <option>Overdue</option>
              <option>Closed</option>
              <option>Remaining</option>
              <option>Responded</option>
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
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Agent</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Anindya</option>
              <option>Nowrin</option>
              <option>Khalid</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Type</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Question</option>
              <option>Incident</option>
              <option>Problem</option>
              <option>Feature Request</option>
              <option>Refund</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Category</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>General Issue</option>
              <option>Maintenance</option>
              <option>Engineering</option>
              <option>Accounts</option>
              <option>Feedback</option>
              <option>Support</option>
              <option>Test Helpdesk</option>
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label className="mb-1 mt-2 fs--1">Tags</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Sales</option>
              <option>Request</option>
              <option>Complaint</option>
              <option>Feedback</option>
              <option>Support</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label className="mb-1 mt-2 fs--1">Subscription</Form.Label>
            <Form.Select size="sm">
              <option>None</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Expired</option>
              <option>Pending</option>
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

export default TicketFilteringForm;

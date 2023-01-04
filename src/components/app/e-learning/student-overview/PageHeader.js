import React from 'react';
import { Card } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';

const PageHeader = () => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex gap-2 flex-wrap flex-between-center">
        <div>
          <h6 className="text-primary">Learner</h6>
          <h5 className="mb-0">Michael Giacchino</h5>
        </div>
        <div>
          <IconButton
            variant="primary"
            size="md"
            icon="envelope"
            iconClassName="me-sm-1"
            className="me-2"
          >
            <span className="d-none d-sm-inline-block">Message</span>
          </IconButton>
          <IconButton
            variant="falcon-default"
            size="md"
            icon="users"
            iconClassName="me-sm-1"
          >
            <span className="d-none d-sm-inline-block">Followers</span>
          </IconButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PageHeader;

import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Termination = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="termination" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Termination</h5>
      </Card.Header>
      <Card.Body>
        <p className="mb-0 ps-3">
          Either you or we may terminate this Agreement upon written notice to
          the other party of a material breach, or if the other party becomes
          the subject of a petition in insolvency proceedings, bankruptcy,
          receivership, liquidation or assignment for the benefit of its
          creditors.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Termination;

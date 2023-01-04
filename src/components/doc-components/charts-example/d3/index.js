import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PackedBubble from './PackedBubble';

const D3js = () => {
  return (
    <>
      <PageHeader
        title="D3 Js"
        description="Falcon uses D3.js - JavaScript library for manipulating documents based on data."
        className="mb-3"
      >
        <Button
          href={`https://github.com/d3/d3/wiki`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          D3 Js documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>
      <Row className="gx-3">
        <Col xs={12}>
          <PackedBubble />
        </Col>
      </Row>
    </>
  );
};

export default D3js;

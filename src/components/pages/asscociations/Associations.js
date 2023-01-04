import Association from 'components/pages/asscociations/Association';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import associationsData from 'data/associations';

const Associations = ({
  associations = associationsData,
  colBreakpoints = { sm: 6, md: 4 },
  ...rest
}) => {
  return (
    <Card {...rest}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Associations</h5>
      </Card.Header>
      <Card.Body className="fs--1">
        <Row className="g-3">
          {associations.map(association => (
            <Col key={association.title} {...colBreakpoints}>
              <Association
                image={association.image}
                title={association.title}
                description={association.description}
                to={association.to}
              />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

Associations.propTypes = {
  associations: PropTypes.arrayOf(PropTypes.shape(Association.propTypes)),
  colBreakpoints: PropTypes.object
};

export default Associations;

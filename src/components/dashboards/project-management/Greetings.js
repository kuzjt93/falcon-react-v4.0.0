import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from 'components/common/Background';
import Flex from 'components/common/Flex';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import corner1 from 'assets/img/icons/spot-illustrations/corner-3.png';
import PropTypes from 'prop-types';

const Greetings = ({ data }) => {
  return (
    <Card className="h-100">
      <Background image={corner1} className="rounded-soft bg-card" />
      <Card.Header className="z-index-1">
        <h5 className="text-primary">Welcome to Falcon!</h5>
        <h6 className="text-600">Here are some quick links for you to start</h6>
      </Card.Header>
      <Card.Body className="z-index-1">
        <Row className="g-2 h-100 align-items-end">
          {data.map(({ icon, color, title, text }) => {
            return (
              <Col sm={6} md={5} key={title}>
                <Flex className="position-relative">
                  <div className="icon-item icon-item-sm border rounded-3 shadow-none me-2">
                    <FontAwesomeIcon icon={icon} className={`text-${color}`} />
                  </div>
                  <div className="flex-1">
                    <Link to="#!" className="stretched-link text-800">
                      <h6 className="mb-0">{title}</h6>
                    </Link>
                    <p className="mb-0 fs--2 text-500 ">{text}</p>
                  </div>
                </Flex>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

Greetings.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  )
};

export default Greetings;

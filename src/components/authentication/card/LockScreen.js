import React from 'react';
import Avatar from 'components/common/Avatar';
import LockScreenForm from 'components/authentication/LockScreenForm';
import team1 from 'assets/img/team/1.jpg';
import AuthCardLayout from 'layouts/AuthCardLayout';
import Flex from 'components/common/Flex';
import { Row, Col } from 'react-bootstrap';

const LockScreen = () => {
  return (
    <AuthCardLayout>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Flex alignItems="center">
            <Avatar src={team1} size="4xl" className="me-4" />
            <div>
              <h4>Hi! Emma</h4>
              <p className="mb-0">
                Enter your password <br />
                to access the admin.
              </p>
            </div>
          </Flex>
          <LockScreenForm className="mt-4" />
        </Col>
      </Row>
    </AuthCardLayout>
  );
};

export default LockScreen;

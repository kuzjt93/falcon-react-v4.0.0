import React from 'react';
import Avatar from 'components/common/Avatar';
import LockScreenForm from 'components/authentication/LockScreenForm';
import { Col, Row } from 'react-bootstrap';
import team1 from 'assets/img/team/1.jpg';
import bgImg from 'assets/img/generic/18.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import Flex from 'components/common/Flex';

const LockScreen = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
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
    </AuthSplitLayout>
  );
};

export default LockScreen;

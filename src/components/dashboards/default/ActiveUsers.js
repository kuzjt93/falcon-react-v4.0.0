import React from 'react';
import PropTypes from 'prop-types';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import Avatar from 'components/common/Avatar';
import classNames from 'classnames';

const ActiveUsers = ({ users, end = 5, ...rest }) => {
  return (
    <Card {...rest}>
      <FalconCardHeader
        light
        title="Active Users"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="py-2">
        {users.slice(0, end).map(({ id, ...rest }, index) => (
          <ActiveUser {...rest} key={id} isLast={index === users.length - 1} />
        ))}
      </Card.Body>
      <FalconCardFooterLink
        title="All active users"
        to="/social/followers"
        size="sm"
      />
    </Card>
  );
};

const ActiveUser = ({ name, avatar, role, isLast }) => (
  <Flex className={classNames('align-items-center', { 'mb-3': !isLast })}>
    <Avatar {...avatar} className={`status-${avatar.status}`} />
    <div className="ms-3">
      <h6 className="mb-0 fw-semi-bold">
        <Link className="text-900" to="/user/profile">
          {name}
        </Link>
      </h6>
      <p className="text-500 fs--2 mb-0">{role}</p>
    </div>
  </Flex>
);

ActiveUser.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.object,
  role: PropTypes.string,
  isLast: PropTypes.bool
};

ActiveUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(ActiveUser.propTypes)),
  end: PropTypes.number
};

export default ActiveUsers;

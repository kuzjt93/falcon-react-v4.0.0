import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Follower = ({ follower }) => {
  const { avatarSrc, name, institution } = follower;
  return (
    <div className="bg-white dark__bg-1100 p-3 h-100">
      <Link to="/user/profile">
        <Image
          thumbnail
          fluid
          roundedCircle
          className="mb-3 shadow-sm"
          src={avatarSrc}
          width={100}
        />
      </Link>
      <h6 className="mb-1">
        <Link to="/user/profile">{name}</Link>
      </h6>
      <p className="fs--2 mb-1">
        <Link className="text-700" to="#!">
          {institution}
        </Link>
      </p>
    </div>
  );
};

Follower.propTypes = {
  follower: PropTypes.shape({
    avatarSrc: PropTypes.string,
    name: PropTypes.string,
    institution: PropTypes.string
  })
};

export default Follower;

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Background from 'components/common/Background';
import Avatar from 'components/common/Avatar';
import classNames from 'classnames';

const ProfileBannerHeader = ({ avatar, coverSrc, className }) => {
  return (
    <Card.Header
      className={classNames(className, 'position-relative min-vh-25 mb-7')}
    >
      <Background image={coverSrc} className="rounded-3 rounded-bottom-0" />
      <Avatar
        size="5xl"
        className="avatar-profile"
        src={avatar}
        mediaClass="img-thumbnail shadow-sm"
      />
    </Card.Header>
  );
};

const ProfileBannerBody = ({ children }) => {
  return <Card.Body>{children}</Card.Body>;
};

const ProfileBanner = ({ children }) => {
  return <Card className="mb-3">{children}</Card>;
};

ProfileBanner.Header = ProfileBannerHeader;
ProfileBanner.Body = ProfileBannerBody;

ProfileBannerHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  className: PropTypes.string
};

ProfileBannerBody.propTypes = {
  children: PropTypes.node.isRequired
};

ProfileBanner.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProfileBanner;

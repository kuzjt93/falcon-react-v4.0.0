import React from 'react';
import PropTypes from 'prop-types';
import { isIterableArray } from 'helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from './Flex';
import classNames from 'classnames';

const Avatar = ({
  size,
  rounded,
  src,
  name,
  emoji,
  className,
  mediaClass,
  isExact,
  icon
}) => {
  const classNames = ['avatar', `avatar-${size}`, className].join(' ');
  const mediaClasses = [
    rounded ? `rounded-${rounded}` : 'rounded',
    mediaClass
  ].join(' ');

  const getAvatar = () => {
    if (src) {
      if (isIterableArray(src)) {
        return (
          <div className={`${mediaClasses} overflow-hidden h-100 d-flex`}>
            <div className="w-50 border-right">
              <img src={src[0]} alt="" />
            </div>
            <div className="w-50 d-flex flex-column">
              <img src={src[1]} alt="" className="h-50 border-bottom" />
              <img src={src[2]} alt="" className="h-50" />
            </div>
          </div>
        );
      } else {
        return <img className={mediaClasses} src={src} alt="" />;
      }
    }

    if (name) {
      return (
        <div className={`avatar-name ${mediaClasses}`}>
          <span>{isExact ? name : name.match(/\b\w/g).join('')}</span>
        </div>
      );
    }

    if (icon) {
      return (
        <Flex className={`avatar-name ${mediaClasses}`}>
          <FontAwesomeIcon icon={icon} />
        </Flex>
      );
    }

    return (
      <div className={`avatar-emoji ${mediaClasses}`}>
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
      </div>
    );
  };

  return <div className={classNames}>{getAvatar()}</div>;
};

export const AvatarGroup = ({ children, dense, className }) => {
  return (
    <div
      className={classNames(className, 'avatar-group', {
        'avatar-group-dense': dense
      })}
    >
      {children}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']),
  rounded: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  name: PropTypes.string,
  emoji: PropTypes.string,
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  isExact: PropTypes.bool,
  icon: PropTypes.string
};

Avatar.defaultProps = {
  size: 'xl',
  rounded: 'circle',
  emoji: '😊',
  isExact: false
};

AvatarGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dense: PropTypes.bool
};

export default Avatar;

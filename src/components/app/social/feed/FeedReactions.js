import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LCSText = ({ count, text }) => (
  <Link className="text-700 me-1" to="#!">
    {count} {text}
    {count !== 1 && 's'}
  </Link>
);

const FeedReactions = ({ like, comment, share }) => {
  return (
    <div className="border-bottom border-200 fs--1 py-3">
      {!!like && <LCSText count={like} text="like" />}
      {!!comment && (
        <>
          • <LCSText count={comment} text="comment" />{' '}
        </>
      )}
      {!!share && (
        <>
          • <LCSText count={share} text="share" />{' '}
        </>
      )}
    </div>
  );
};

LCSText.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
FeedReactions.propTypes = {
  like: PropTypes.number,
  comment: PropTypes.number,
  share: PropTypes.number
};

export default FeedReactions;

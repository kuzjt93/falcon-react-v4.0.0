import React from 'react';
import PropTypes from 'prop-types';
import FeedCardHeader from './FeedCardHeader';
import { Card } from 'react-bootstrap';
import FeedCardContent from './FeedCardContent';
import FeedCardFooter from './FeedCardFooter';

const FeedCard = ({ feed, ...rest }) => {
  const { id, user, content, details } = feed;
  return (
    <Card {...rest}>
      {!!user && <FeedCardHeader {...user} />}
      {!!content && <FeedCardContent {...content} />}
      {!!details && <FeedCardFooter id={id} {...details} />}
    </Card>
  );
};

FeedCard.Header = FeedCardHeader;

FeedCard.propTypes = {
  feed: PropTypes.object
};

export default FeedCard;

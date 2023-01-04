import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { FeedContext } from 'context/Context';
import { feedReducer } from 'reducers/feedReducer';
import rawFeeds from 'data/feed';

const FeedProvider = ({ children }) => {
  const [feeds, feedDispatch] = useReducer(feedReducer, rawFeeds);

  return (
    <FeedContext.Provider value={{ feeds, feedDispatch }}>
      {children}
    </FeedContext.Provider>
  );
};

FeedProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default FeedProvider;

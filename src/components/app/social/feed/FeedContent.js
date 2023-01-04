import React, { useContext } from 'react';
import { FeedContext } from 'context/Context';
import CreatePost from './CreatePost';
import FeedCard from './FeedCard';
import classNames from 'classnames';

const FeedContent = () => {
  const { feeds } = useContext(FeedContext);
  return (
    <>
      <CreatePost className="mb-3" />
      {feeds.map((feed, index) => (
        <FeedCard
          key={feed.id}
          feed={feed}
          className={classNames({ 'mb-3': index + 1 !== feeds.length })}
        />
      ))}
    </>
  );
};

export default FeedContent;

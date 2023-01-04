import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import LikeInactive from 'assets/img/illustrations/like-inactive.png';
import commentActive from 'assets/img/illustrations/comment-active.png';
import shareActive from 'assets/img/illustrations/share-active.png';
import shareInactive from 'assets/img/illustrations/share-inactive.png';
import commentInActive from 'assets/img/illustrations/comment-inactive.png';
import likeActive from 'assets/img/illustrations/like-active.png';
import { FeedContext } from 'context/Context';

const FeedActionButtons = ({ id, reactions }) => {
  const [liked, setLiked] = useState(reactions?.like);
  const { feeds, feedDispatch } = useContext(FeedContext);

  const toggleLiked = () => {
    setLiked(!liked);
    const feed = feeds.find(item => item.id === id);
    feed.details.reactions.like = !liked;
    feed.details.countLCS.like = !liked
      ? feed.details.countLCS.like + 1
      : feed.details.countLCS.like - 1;

    feedDispatch({
      type: 'UPDATE',
      payload: { id, feed }
    });
  };
  return (
    <Row className="g-0 fw-semi-bold text-center py-2 fs--1">
      <Col xs="auto">
        <Flex
          alignItems="center"
          className="rounded text-700 me-3 cursor-pointer"
          onClick={toggleLiked}
        >
          <img
            src={reactions?.like ? likeActive : LikeInactive}
            alt=""
            width="20"
          />
          <span className="ms-1">Like</span>
        </Flex>
      </Col>
      <Col xs="auto">
        <Flex
          alignItems="center"
          className="rounded text-700 me-3 cursor-pointer"
        >
          <img
            src={reactions?.comment ? commentActive : commentInActive}
            alt=""
            width="20"
          />
          <span className="ms-1">comment</span>
        </Flex>
      </Col>
      <Col xs="auto">
        <Flex
          alignItems="center"
          className="rounded text-700 me-3 cursor-pointer"
        >
          <img
            src={reactions?.share ? shareActive : shareInactive}
            alt=""
            width="20"
          />
          <span className="ms-1">share</span>
        </Flex>
      </Col>
    </Row>
  );
};

FeedActionButtons.propTypes = {
  id: PropTypes.string,
  reactions: PropTypes.object
};

export default FeedActionButtons;

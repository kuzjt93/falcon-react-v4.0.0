import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Image } from 'react-bootstrap';
import beach from 'assets/video/beach.mp4';
import beachPoster from 'assets/video/beach.jpg';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/FalconLink';
import Flex from 'components/common/Flex';
import Hoverbox from 'components/common/Hoverbox';
import IconButton from 'components/common/IconButton';
import ModalVideoContent from '../../ModalVideoContent';

const CourseLessonPlan = ({ data }) => {
  return (
    <Card className="mb-3">
      <FalconCardHeader title="Lesson Plans" titleTag="h5" light />
      <Card.Body className="p-0">
        {data.map((item, index) => (
          <LessonItem
            key={item.id}
            lesson={item}
            isLast={index === data.length - 1}
          />
        ))}
      </Card.Body>
      <Card.Footer className="bg-light text-end py-2">
        <FalconLink
          title="Full Lesson Plan"
          to="#!"
          icon="chevron-down"
          className="fw-medium"
        />
      </Card.Footer>
    </Card>
  );
};

CourseLessonPlan.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

const LessonItem = ({ lesson, isLast }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalVideoContent
        show={showModal}
        setShow={setShowModal}
        attachment={{ image: beachPoster, src: beach }}
      />
      <Flex
        key={lesson.id}
        alignItems="center"
        className={classNames('px-x1 py-2', {
          'border-bottom border-200': !isLast
        })}
      >
        <Hoverbox
          onClick={() => setShowModal(true)}
          className="text-center me-3 my-1"
        >
          <Button
            variant="link"
            onClick={() => setShowModal(true)}
            className="bg-attachment"
            style={{ width: '3.5625rem' }}
          >
            <Image src={lesson.attachment.image} alt="" width={60} />
          </Button>
          <Hoverbox.Content className="light flex-center pe-none bg-holder overlay overlay-1 rounded">
            <FontAwesomeIcon
              icon="play-circle"
              className="fs-2 text-white position-relative"
            />
          </Hoverbox.Content>
        </Hoverbox>
        <div className="flex-1">
          <Button
            onClick={() => setShowModal(true)}
            variant="link"
            className="fs-0 p-0 fw-medium"
          >
            {lesson.title}
          </Button>
          <p className="fs--1 mb-0">{lesson.excerpt}</p>
        </div>

        {lesson.isLocked ? (
          <FontAwesomeIcon icon="lock" className="fs--1 text-secondary" />
        ) : (
          <IconButton
            variant="falcon-default"
            size="sm"
            iconAlign="right"
            icon="chevron-down"
            iconClassName="ms-1 fs--2"
          >
            Take a Peek
          </IconButton>
        )}
      </Flex>
    </>
  );
};

LessonItem.propTypes = {
  lesson: PropTypes.object,
  isLast: PropTypes.bool
};

export default CourseLessonPlan;

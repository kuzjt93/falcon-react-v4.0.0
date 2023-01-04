import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import users from 'data/people';
import FalconLightBox from 'components/common/FalconLightBox';
import FalconLightBoxGallery from 'components/common/FalconLightBoxGallery';
import ChatMessageOptions from './ChatMessageOptions';

const Message = ({ message, senderUserId, status, time, isGroup }) => {
  const user = users.find(({ id }) => id === senderUserId);
  const name = user?.name.split(' ')[0];
  const isLeft = senderUserId !== 3;

  return (
    <Flex className={classNames('p-3', { 'd-block': !isLeft })}>
      {isLeft && <Avatar size="l" className="me-2" src={user.avatarSrc} />}
      <div
        className={classNames('flex-1', {
          'd-flex justify-content-end': !isLeft
        })}
      >
        <div
          className={classNames('w-xxl-75', {
            'w-100': !isLeft
          })}
        >
          <Flex
            alignItems="center"
            className={classNames('hover-actions-trigger', {
              'flex-end-center': !isLeft,
              'align-items-center': isLeft
            })}
          >
            {!isLeft && <ChatMessageOptions />}
            {message.attachments ? (
              <div className="chat-message chat-gallery">
                {message.text && (
                  <p
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: message.text ? message.text : message
                    }}
                  />
                )}
                <FalconLightBoxGallery images={message.attachments}>
                  {setImgIndex => (
                    <Row className="mx-n1">
                      {message.attachments.map((img, index) => {
                        return (
                          <Col
                            xs={6}
                            md={4}
                            className="px-1"
                            style={{ minWidth: 50 }}
                            key={index}
                          >
                            <Image
                              fluid
                              rounded
                              className="mb-2 cursor-pointer"
                              src={img}
                              alt=""
                              onClick={() => setImgIndex(index)}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </FalconLightBoxGallery>
              </div>
            ) : (
              <>
                <div
                  className={classNames('p-2 rounded-2 chat-message', {
                    'bg-200': isLeft,
                    'bg-primary text-white light': !isLeft
                  })}
                >
                  {(message || message.text) && (
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: message.text ? message.text : message
                      }}
                    />
                  )}
                  {message.attachment && (
                    <FalconLightBox image={message.attachment}>
                      <Image
                        fluid
                        rounded
                        src={message.attachment}
                        width={150}
                        alt=""
                      />
                    </FalconLightBox>
                  )}
                </div>
              </>
            )}
            {isLeft && <ChatMessageOptions />}
          </Flex>
          <div
            className={classNames('text-400 fs--2', {
              'text-end': !isLeft
            })}
          >
            {isLeft && isGroup && (
              <span className="font-weight-semi-bold me-2">{name}</span>
            )}
            {time.hour}
            {!isLeft && !!message && !!status && (
              <FontAwesomeIcon
                icon={classNames({
                  check: status === 'seen' || status === 'sent',
                  'check-double': status === 'delivered'
                })}
                className={classNames('ms-2', {
                  'text-success': status === 'seen'
                })}
              />
            )}
          </div>
        </div>
      </div>
    </Flex>
  );
};
Message.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  senderUserId: PropTypes.number.isRequired,
  status: PropTypes.string,
  time: PropTypes.object.isRequired,
  isGroup: PropTypes.bool
};

Message.defaultProps = { status: '' };

export default Message;

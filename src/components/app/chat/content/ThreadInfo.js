import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Nav, Button, Collapse, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import MediaImg1 from 'assets/img/chat/1.jpg';
import MediaImg2 from 'assets/img/chat/2.jpg';
import MediaImg3 from 'assets/img/chat/3.jpg';
import MediaImg4 from 'assets/img/chat/4.jpg';
import MediaImg5 from 'assets/img/chat/5.jpg';
import MediaImg6 from 'assets/img/chat/6.jpg';
import users from 'data/people';
import FalconLightBoxGallery from 'components/common/FalconLightBoxGallery';
import SimpleBarReact from 'simplebar-react';
import { ChatContext } from 'context/Context';

const ThreadInfo = ({ thread }) => {
  const [isOpenMemberCollapse, setIsOpenMemberCollapse] = useState(false);
  const [isOpenSharedMediaCollapse, setIsOpenSharedMediaCollapse] =
    useState(false);

  const { getUser, isOpenThreadInfo, groups } = useContext(ChatContext);
  const user = getUser(thread);

  const groupMembers =
    thread.type === 'group'
      ? groups
          .find(({ id }) => id === thread.groupId)
          .members.map(member => ({
            ...users.find(user => user.id === member.userId),
            designation: member.designation
          }))
      : [];

  const [conversationOptions] = useState([
    {
      title: 'Search in Conversation',
      icon: 'search',
      link: '#!'
    },
    {
      title: 'Edit Nicknames',
      icon: 'pencil-alt',
      link: '#!'
    },
    {
      title: 'Change Color',
      icon: 'palette',
      link: '#!'
    },
    {
      title: 'Change Emoji',
      icon: 'thumbs-up',
      link: '#!'
    },
    {
      title: 'Notifications',
      icon: 'bell',
      link: '#!'
    }
  ]);

  const images = [
    MediaImg1,
    MediaImg2,
    MediaImg3,
    MediaImg4,
    MediaImg5,
    MediaImg6
  ];

  return (
    <div
      className={classNames('conversation-info', { show: isOpenThreadInfo })}
    >
      <div className="h-100 overflow-auto">
        <SimpleBarReact
          style={{
            height: '100%',
            minWidth: '75px'
          }}
        >
          <Flex
            alignItems="center"
            className="position-relative p-3 border-bottom hover-actions-trigger"
          >
            <Avatar className={user.status} size="xl" src={user.avatarSrc} />
            <Flex className="ms-2 flex-between-center flex-1">
              <h6 className="mb-0">
                <Link
                  to="/user/profile"
                  className="text-decoration-none stretched-link text-700"
                >
                  {user.name}
                </Link>
              </h6>
              <Dropdown className="z-index-1">
                <Dropdown.Toggle
                  id="dropdown-button"
                  className="text-400 dropdown-caret-none me-n3"
                  variant="link"
                  size="sm"
                >
                  <FontAwesomeIcon icon="cog" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="py-2 border">
                  <Dropdown.Item className="cursor-pointer">Mute</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="cursor-pointer">
                    Archive
                  </Dropdown.Item>
                  <Dropdown.Item className="cursor-pointer text-danger">
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Flex>
          </Flex>
          <div className="px-3 pt-2">
            <Nav className="flex-column font-sans-serif fw-medium">
              {conversationOptions.map((item, index) => (
                <Nav.Link
                  className="py-1 px-0 text-600 d-flex align-items-center"
                  href={item.link}
                  key={item.title}
                >
                  <span className="conversation-info-icon">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="me-1"
                      transform={classNames('shrink-1', {
                        'down-3': index === 0
                      })}
                    />
                  </span>{' '}
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </div>
          <hr className="my-2" />
          <div className="px-3">
            <div className="title">
              {thread.type === 'group' && (
                <>
                  <Button
                    variant="link"
                    className="btn-accordion hover-text-decoration-none dropdown-indicator w-100"
                    aria-expanded={isOpenSharedMediaCollapse}
                    onClick={() =>
                      setIsOpenMemberCollapse(!isOpenMemberCollapse)
                    }
                  >
                    Members
                  </Button>
                  <Collapse in={isOpenMemberCollapse}>
                    <div>
                      {groupMembers.map((member, index) => (
                        <Flex
                          className="align-items-center py-2 hover-actions-trigger"
                          key={index}
                        >
                          <Avatar
                            className={member.status}
                            size="xl"
                            src={member.avatarSrc}
                          />
                          <div className="d-flex flex-1 ms-2 justify-content-between">
                            <div>
                              <h6 className="mb-0">
                                <Link to="/user/profile" className="text-700">
                                  {member.name}
                                </Link>
                              </h6>
                              <div className="fs--2 text-400">
                                {member.designation}
                              </div>
                            </div>
                            <Dropdown className="dropdown-active-trigger hover-actions position-relative z-index-1">
                              <Dropdown.Toggle
                                id="dropdown-button"
                                className="dropdown-caret-none text-400"
                                variant="link"
                                size="sm"
                              >
                                <FontAwesomeIcon icon="ellipsis-h" />
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="py-2">
                                <Dropdown.Item className="cursor-pointer">
                                  Message
                                </Dropdown.Item>
                                <Dropdown.Item className="cursor-pointer">
                                  View Profile
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </Flex>
                      ))}
                    </div>
                  </Collapse>
                </>
              )}
              <Button
                variant="link"
                className="btn-accordion hover-text-decoration-none dropdown-indicator w-100"
                aria-expanded={isOpenSharedMediaCollapse}
                onClick={() =>
                  setIsOpenSharedMediaCollapse(!isOpenSharedMediaCollapse)
                }
              >
                Shared media
              </Button>
              <Collapse in={isOpenSharedMediaCollapse}>
                <div className="mt-2">
                  <FalconLightBoxGallery images={images}>
                    {setImgIndex => (
                      <Row className="mx-n1">
                        {images.map((image, index) => (
                          <Col sm={6} md={4} className="px-1" key={index}>
                            <img
                              src={image}
                              alt=""
                              className="img-fluid rounded mb-2 cursor-pointer "
                              onClick={() => {
                                setImgIndex(index);
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                    )}
                  </FalconLightBoxGallery>
                </div>
              </Collapse>
            </div>
          </div>
        </SimpleBarReact>
      </div>
    </div>
  );
};

ThreadInfo.propTypes = {
  thread: PropTypes.object.isRequired
};

export default ThreadInfo;

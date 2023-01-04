import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import { Dropdown, Form, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import AppContext from 'context/Context';

const GroupMember = ({
  avatarSize = 'l',
  users,
  showMember = 4,
  addMember,
  className
}) => {
  const {
    config: { isRTL }
  } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={className}>
      <AvatarGroup>
        {users.slice(0, showMember).map((user, index) => (
          <Dropdown key={user.id}>
            <Dropdown.Toggle
              as={Nav.Link}
              className={classNames('dropdown-caret-none p-0', {
                'ms-n1': index > 0
              })}
            >
              <Avatar src={user.img} size={avatarSize} />
            </Dropdown.Toggle>

            <Dropdown.Menu
              align={isRTL ? 'end' : 'start'}
              className="dropdown-md px-0 py-3"
            >
              <Flex alignItems="center" className="px-3">
                <Link to="/user/profile">
                  <Avatar src={user.img} className="me-2" size="2xl" />
                </Link>
                <div className="flex-1">
                  <h6 className="mb-0">
                    <Link className="text-900" to="/user/profile">
                      {user.name}
                    </Link>
                  </h6>
                  <p className="fs--2 mb-0 text-500">{user.role}</p>
                </div>
              </Flex>
              <Dropdown.Divider />
              <Dropdown.Item>Member Rule</Dropdown.Item>
              <Dropdown.Item className="text-danger">
                Remove Member
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
        {(users.length > showMember || addMember) && (
          <Dropdown>
            <Dropdown.Toggle
              as={Nav.Link}
              className="dropdown-caret-none p-0 ms-n1"
            >
              {!addMember ? (
                <Avatar
                  name={`${users.length - showMember}+`}
                  size={avatarSize}
                  isExact
                  mediaClass="avatar-button"
                />
              ) : (
                <Avatar
                  icon="plus"
                  size={avatarSize}
                  mediaClass="avatar-button flex-center"
                />
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu
              align={isRTL ? 'end' : 'start'}
              className="dropdown-md"
            >
              <h6 className="dropdown-header py-0 px-3 mb-0">
                {!addMember ? 'Board Members' : 'Select Member'}
              </h6>
              <Dropdown.Divider />
              {!addMember ? (
                <Flex className="px-3">
                  {users.map(user => (
                    <Link className="text-900" to="/user/profile" key={user.id}>
                      <div className="position-relative">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id={`member-${user.id}`}>
                              {user.name}
                            </Tooltip>
                          }
                        >
                          <div className="">
                            <Avatar src={user.img} className="me-2" size="xl" />
                          </div>
                        </OverlayTrigger>
                      </div>
                    </Link>
                  ))}
                </Flex>
              ) : (
                <>
                  <Form className="px-3 mb-2">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Search team member"
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                  </Form>
                  <ul className="list-unstyled mb-0">
                    {users
                      .filter(user => {
                        if (!searchTerm) {
                          return user;
                        } else if (
                          user.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase().trim())
                        ) {
                          return user;
                        }
                      })
                      .map(user => (
                        <li key={user.id}>
                          <Link to="#!">
                            <Flex
                              alignItems="center"
                              className="px-3 py-1 text-decoration-none"
                            >
                              <Avatar
                                src={user.img}
                                className="me-2"
                                size={avatarSize}
                              />
                              <div className="flex-1">
                                <h6 className="mb-0">{user.name}</h6>
                              </div>
                            </Flex>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </AvatarGroup>
    </div>
  );
};

GroupMember.propTypes = {
  avatarSize: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      role: PropTypes.string
    })
  ).isRequired,
  showMember: PropTypes.number,
  addMember: PropTypes.bool,
  className: PropTypes.string
};

export default GroupMember;

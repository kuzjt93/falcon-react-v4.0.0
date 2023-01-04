import React from 'react';
import Flex from 'components/common/Flex';
import { members, comments } from 'data/kanban';
import Avatar from 'components/common/Avatar';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ModalCommentContent = () => {
  return (
    <>
      <Flex>
        <Avatar src={members[3].img} className="me-2" size="l" />
        <div className="flex-1 fs--1">
          <div className="position-relative border rounded mb-3">
            <Form>
              <Form.Control
                as="textarea"
                className="border-0 rounded-bottom-0 resize-none"
                rows={3}
              />
              <Flex
                justifyContent="between"
                alignItems="center"
                className="bg-light rounded-bottom p-2 mt-1"
              >
                <Button size="sm" color="primary" type="submit">
                  Save
                </Button>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-1">
                    <Form.Group controlId="file-attachment">
                      <Form.Label className="link-600 px-2 transition-base rounded cursor-pointer mb-0">
                        <FontAwesomeIcon icon="paperclip" />
                      </Form.Label>
                      <Form.Control type="file" className="d-none" />
                    </Form.Group>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link
                      to="#!"
                      className="link-600 px-2 transition-base rounded"
                    >
                      <FontAwesomeIcon icon="at" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Form.Group controlId="file-image">
                      <Form.Label className="link-600 px-2 transition-base rounded cursor-pointer mb-0">
                        <FontAwesomeIcon icon="image" />
                      </Form.Label>
                      <Form.Control
                        type="file"
                        className="d-none"
                        accept="image/*"
                      />
                    </Form.Group>
                  </li>
                </ul>
              </Flex>
            </Form>
          </div>
        </div>
      </Flex>

      {comments.map(comment => (
        <Flex key={comment.id} className="mb-3">
          <Link to="/user/profile">
            <Avatar src={comment.user.avatar} size="l" />
          </Link>
          <div className="flex-1 ms-2 fs--1">
            <p className="mb-1 bg-200 rounded-3 p-2">
              <Link to="/user/profile" className="fw-semi-bold">
                {comment.user.name}
              </Link>{' '}
              {comment.text}
            </p>
            <Link to="#!"> Like </Link> &bull;
            <Link to="#!"> Reply </Link> &bull; {comment.time}
          </div>
        </Flex>
      ))}
    </>
  );
};

export default ModalCommentContent;

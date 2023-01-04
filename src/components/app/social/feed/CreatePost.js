import React from 'react';
import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Avatar from 'components/common/Avatar';
import team1 from 'assets/img/team/1.jpg';
import CreatePostForm from './CreatePostForm';

const CreatePost = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <Card.Header className="bg-light">
        <Flex alignItems="center">
          <Avatar size="m" src={team1} />
          <div className="flex-1 ms-2">
            <h5 className="mb-0 fs-0">Create Post</h5>
          </div>
        </Flex>
      </Card.Header>
      <Card.Body className="p-0">
        <CreatePostForm />
      </Card.Body>
    </Card>
  );
};

export default CreatePost;

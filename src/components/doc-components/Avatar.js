import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import FalconEditor from 'components/common/FalconEditor';

import FalconComponentCard from 'components/common/FalconComponentCard';
import user1 from 'assets/img/team/1.jpg';
import user2 from 'assets/img/team/2.jpg';
import user3 from 'assets/img/team/3.jpg';

const circularCode = `<Avatar
  src={user1}
  rounded="circle" 
  size="4xl" 
/>`;

const squareCode = `<Avatar
  src={user2} 
  rounded="0" 
  size="4xl"  
/>`;

const softCode = `<Avatar
  src={user3}
  rounded="soft"
  size="4xl"  
/>`;

const contentCode = `<Avatar
  size="4xl" 
  name="12+"
  isExact
/>`;

const nameCode = `<Avatar
  size="4xl" 
  name="Emma Watson"
/>`;

const emojiCode = `<Avatar
  size="4xl"
  emoji="🎁"
/>`;

const statusCode = `<Row>
  <Col xs="auto">
    <Avatar src={user1} className="status-online" size="4xl"  />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} className="status-offline" size="4xl"  />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} className="status-away" size="4xl"  />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} className="status-do-not-disturb" size="4xl"  />
  </Col>
</Row>`;

const sizesCode = `<Row className="align-items-center" >
  <Col xs="auto">
    <Avatar src={user1} className="" size="5xl" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} className="" size="4xl" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} className="" size="3xl" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} size="2xl" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} size="xl" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} size="l" />
  </Col>
   <Col xs="auto">
    <Avatar src={user1} size="m" />
  </Col>
  <Col xs="auto">
    <Avatar src={user1} size="s" />
  </Col>
</Row>`;

const groupCode = `
function AvatarGroupExample() {
  return ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'].map(size => (
    <AvatarGroup key={size}>
      <Avatar src={user1} size={size} />
      <Avatar src={user2} size={size} />
      <Avatar name="Emma Watson" size={size} />
    </AvatarGroup>
  ));
}`;
const groupDenseCode = `
function AvatarGroupExample() {
  return ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'].map(size => (
    <AvatarGroup key={size} dense>
      <Avatar src={user1} size={size} />
      <Avatar src={user2} size={size} />
      <Avatar name="Emma Watson" size={size} />
    </AvatarGroup>
  ));
}`;

const properties = `
Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']), // default: 'xl'
  rounded: PropTypes.string, // default: 'circle'
  src: PropTypes.string,
  name: PropTypes.string,
  emoji: PropTypes.string, // default: '😊'
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  isExact: PropTypes.bool // default: false
}

AvatarGroup.propTypes = {
  dense: PropTypes.bool // default: false
}`;

const Avatars = () => {
  return (
    <>
      <PageHeader
        title="Avatar"
        description="Use avatar of different shapes and sizes with a single component."
        className="mb-3"
      />

      <Card className="mb-3">
        <FalconComponentCard.Header title="Properties" noPreview />
        <Card.Body className="pt-0">
          <FalconEditor code={properties} language="jsx" hidePreview />
        </Card.Body>
      </Card>

      <Row className="mb-3 g-3">
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Circular" light={false} />
            <FalconComponentCard.Body
              code={circularCode}
              scope={{ Avatar, user1 }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Square" light={false} />
            <FalconComponentCard.Body
              code={squareCode}
              scope={{ Avatar, user2 }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Soft" light={false} />
            <FalconComponentCard.Body
              code={softCode}
              scope={{ Avatar, user3 }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
      </Row>

      <Row className="mb-3 g-3">
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Content" light={false} />
            <FalconComponentCard.Body
              code={contentCode}
              scope={{ Avatar }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Name" light={false} />
            <FalconComponentCard.Body
              code={nameCode}
              scope={{ Avatar }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
        <Col md={4}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Emoji" light={false} />
            <FalconComponentCard.Body
              code={emojiCode}
              scope={{ Avatar }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
      </Row>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Status" light={false} />
        <FalconComponentCard.Body
          code={statusCode}
          scope={{ Avatar, user1 }}
          language="jsx"
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Sizes" light={false} />
        <FalconComponentCard.Body
          code={sizesCode}
          scope={{ Avatar, user1 }}
          language="jsx"
        />
      </FalconComponentCard>

      <Row className="mb-3 g-3">
        <Col md={6}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header title="Avatar Group" light={false} />
            <FalconComponentCard.Body
              code={groupCode}
              scope={{ Avatar, AvatarGroup, user1, user2 }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
        <Col md={6}>
          <FalconComponentCard noGuttersBottom>
            <FalconComponentCard.Header
              title="Avatar Group Dense"
              light={false}
            />
            <FalconComponentCard.Body
              code={groupDenseCode}
              scope={{ Avatar, AvatarGroup, user1, user2 }}
              language="jsx"
            />
          </FalconComponentCard>
        </Col>
      </Row>
    </>
  );
};

export default Avatars;

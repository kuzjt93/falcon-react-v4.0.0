import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Image } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import SimpleBar from 'simplebar-react';
import FalconLink from 'components/common/FalconLink';
import Avatar from 'components/common/Avatar';
import SoftBadge from 'components/common/SoftBadge';

const Activity = ({ activity: { name, avatar, activity } }) => {
  return (
    <Row className="g-2 mb-4">
      <Col xs={12} className="d-flex align-items-center">
        <Avatar size="xl" rounded="circle" src={avatar} />
        <h6 className="mb-0 ps-2">{name}</h6>
      </Col>
      {activity.map(item => (
        <Col key={item.id} xs={4} className="position-relative">
          <Image src={item.img} alt={name} className="w-100" />
          <SoftBadge
            bg={item.color}
            pill
            className="position-absolute top-100 start-50 translate-middle"
          >
            {item.amount}
          </SoftBadge>
        </Col>
      ))}
    </Row>
  );
};

const MembersActivity = ({ data }) => {
  return (
    <Card className="h-100 members-activity">
      <FalconCardHeader
        className="py-2"
        light
        title="Members Activity"
        titleTag="h6"
        endEl={<CardDropdown />}
      />
      <SimpleBar>
        <Card.Body>
          {data.map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </Card.Body>
      </SimpleBar>
      <Card.Footer className="bg-light p-0">
        <FalconLink title="See all projects" className="d-block py-2" />
      </Card.Footer>
    </Card>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        color: PropTypes.string
      })
    )
  })
};

MembersActivity.propTypes = {
  data: PropTypes.arrayOf(Activity.propTypes.activity)
};

export default MembersActivity;

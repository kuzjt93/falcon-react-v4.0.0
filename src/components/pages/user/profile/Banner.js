import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coverSrc from 'assets/img/generic/4.jpg';
import apple from 'assets/img/logos/apple.png';
import google from 'assets/img/logos/g.png';
import hp from 'assets/img/logos/hp.png';
import avatar from 'assets/img/team/2.jpg';
import Flex from 'components/common/Flex';
import VerifiedBadge from 'components/common/VerifiedBadge';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileBanner from '../ProfileBanner';

const Banner = () => {
  const [rightSidedItems] = useState([
    {
      title: 'Google',
      image: google
    },
    {
      title: 'Apple',
      image: apple
    },
    {
      title: ' Hewlett Packard',
      image: hp
    }
  ]);
  return (
    <ProfileBanner>
      <ProfileBanner.Header avatar={avatar} coverSrc={coverSrc} />
      <ProfileBanner.Body>
        <Row>
          <Col lg={8}>
            <h4 className="mb-1">
              Anthony Hopkins <VerifiedBadge />
            </h4>
            <h5 className="fs-0 fw-normal">
              Senior Software Engineer at Technext Limited
            </h5>
            <p className="text-500">New York, USA</p>
            <Button variant="falcon-primary" size="sm" className="px-3">
              Following
            </Button>
            <Button variant="falcon-default" size="sm" className="px-3 ms-2">
              Message
            </Button>
            <div className="border-dashed border-bottom my-4 d-lg-none" />
          </Col>
          <Col className="ps-2 ps-lg-3">
            <Link to="#!">
              <Flex alignItems="center" className="mb-2">
                <FontAwesomeIcon
                  icon="user-circle"
                  className="fs-3 me-2 text-700"
                />
                <div className="flex-1">
                  <h6 className="mb-0">See followers (330)</h6>
                </div>
              </Flex>
            </Link>
            {rightSidedItems.map(item => (
              <Link to="#!" key={item.title}>
                <Flex alignItems="center" className="mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={30}
                    className="me-2"
                  />
                  <div className="flex-1">
                    <h6 className="mb-0">{item.title}</h6>
                  </div>
                </Flex>
              </Link>
            ))}
          </Col>
        </Row>
      </ProfileBanner.Body>
    </ProfileBanner>
  );
};

export default Banner;

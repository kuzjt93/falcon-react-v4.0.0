import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { timeline } from 'data/support-desk/contactDetailsData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Timeline = () => {
  return (
    <div className="timeline-vertical py-0">
      {timeline.map((item, index) => {
        const {
          subject,
          description,
          time,
          icon,
          year,
          day,
          priority,
          status
        } = item;
        return (
          <div
            key={index}
            className={classNames('timeline-item', {
              'timeline-item-start': index % 2 === 0,
              'timeline-item-end': index % 2 !== 0
            })}
          >
            <div className="timeline-icon icon-item icon-item-lg text-primary border-300">
              <FontAwesomeIcon icon={icon} className="fs-1" />
            </div>
            <Row
              className={` ${
                index % 2 == 0 ? 'timeline-item-start' : 'timeline-item-end'
              }`}
            >
              <Col lg={6} className="timeline-item-time">
                <div>
                  <h6 className="mb-0 text-700"> {year}</h6>
                  <p className="fs--2 text-500 font-sans-serif">{day}</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="timeline-item-content arrow-bg-white">
                  <div className="timeline-item-card bg-white dark__bg-1100">
                    <Link to="/support-desk/tickets-preview">
                      <h5 className="mb-2 hover-primary">{subject}</h5>
                    </Link>
                    <p className="border-bottom mb-3 pb-4 text-600 fs--1">
                      {description}
                    </p>
                    <Flex wrap="wrap" className="pt-2">
                      <h6 className="mb-0 text-600 lh-base">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="me-1"
                        />
                        {time}
                      </h6>
                      <Flex
                        alignItems="center"
                        className="ms-auto me-2 me-sm-x1 me-xl-2 me-xxl-x1"
                      >
                        <div
                          className={`dot me-0 me-sm-2 me-xl-0 me-xxl-2 bg-${priority.color}`}
                        ></div>
                        <h6 className="mb-0 text-700 d-none d-sm-block d-xl-none d-xxl-block">
                          {priority.text}
                        </h6>
                      </Flex>
                      <SoftBadge bg={status.type}>{status.content}</SoftBadge>
                    </Flex>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

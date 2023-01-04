import Events from 'components/pages/user/profile/Events';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import events from 'data/events/events';

const EventDetailAside = () => {
  return (
    <div className="sticky-sidebar">
      <Card className="mb-3 fs--1">
        <Card.Body>
          <h6>Date And Time</h6>
          <p className="mb-1">
            Mon, Dec 31, 2018, 11:59 PM – <br />
            Tue, Jan 1, 2019, 12:19 AM EST
          </p>
          <Link to="#!">Add to Calendar</Link>
          <h6 className="mt-4">Location</h6>
          <div className="mb-1">
            Boston Harborwalk
            <br />
            Christopher Columbus Park
            <br />
            Boston, MA 02109
            <br />
            United States
          </div>
          <Link to="#!">View Map</Link>
          <h6 className="mt-4">Refund Policy</h6>
          <p className="fs--1 mb-0">No Refunds</p>
        </Card.Body>
      </Card>
      <Events cardTitle="Events you may like" events={events.slice(2, 5)} />
    </div>
  );
};

export default EventDetailAside;

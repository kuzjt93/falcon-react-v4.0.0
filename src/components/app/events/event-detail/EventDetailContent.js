import IconGroup from 'components/common/icon/IconGroup';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventDetailsGmap from './EventDetailsGmap';
import socialIcons from 'data/socialIcons';

const EventDetailContent = () => {
  return (
    <Card>
      <Card.Body>
        <h5 className="fs-0 mb-3">New Year's Eve on the Waterfront</h5>
        <p>
          Boston Harbor Now in partnership with the Friends of Christopher
          Columbus Park, the Wharf District Council and the City of Boston is
          proud to announce the New Year's Eve Midnight Harbor Fireworks! This
          beloved nearly 40-year old tradition is made possible by the generous
          support of local waterfront organizations and businesses and the
          support of the City of Boston and the Office of Mayor Marty Walsh.
        </p>
        <p>
          Join us as we ring in the New Year with a dazzling display over Boston
          Harbor. Public viewing is free and available from the Harborwalk of
          these suggested viewing locations:
        </p>
        <ul>
          <li>Christopher Columbus Park, North End</li>
          <li>Fan Pier, Seaport District</li>
          <li>East Boston Harborwalk</li>
        </ul>
        <p>The show will begin promptly at midnight.</p>
        <p>
          Register here for a reminder and updates about the harbor fireworks
          and other waterfront public programs as they become available. Be the
          first to be notified for popular waterfront New Year's Eve public
          activities.
        </p>
        <h5 className="fs-0 mt-5 mb-2 ">Tags </h5>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Things To Do In Brooklyn, NY
        </Link>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Party
        </Link>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Music
        </Link>
        <h5 className="fs-0 mt-5 mb-2 ">Share with friends </h5>
        <IconGroup icons={socialIcons} />

        <EventDetailsGmap />
      </Card.Body>
    </Card>
  );
};

export default EventDetailContent;

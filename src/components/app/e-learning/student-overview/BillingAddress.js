import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import GoogleMap from 'components/map/GoogleMap';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import AppContext from 'context/Context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MapDark = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 48.8583736,
        lng: 2.2922926
      }}
      mapStyle="Cobalt"
      className="rounded-soft position-relative"
      style={{ minHeight: '18.75rem' }}
    >
      <h5 className="text-700">Excellent Street</h5>
      <p className="fs--1 mb-0">
        987, Apartment 6, Excellent Street, Good Area, Clean City 5434, Canada
      </p>
    </GoogleMap>
  );
};
const MapLight = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 48.8583736,
        lng: 2.2922926
      }}
      mapStyle="Default"
      className="rounded-soft position-relative"
      style={{ minHeight: '18.75rem' }}
    >
      <h5 className="text-700">Excellent Street</h5>
      <p className="fs--1 mb-0">
        987, Apartment 6, Excellent Street, Good Area, Clean City 5434, Canada
      </p>
    </GoogleMap>
  );
};

const BillingAddress = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  return (
    <Card className="h-100">
      <FalconCardHeader
        light
        title="Billing Address"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="p-0">
        <Row className="g-0 h-100">
          <Col xs={12}>{isDark ? <MapDark /> : <MapLight />}</Col>
          <Col xs={12} className="p-x1 flex-1">
            <Table
              borderless
              className="fw-medium font-sans-serif fs--1 h-100 mb-0"
            >
              <tbody>
                <tr className="hover-actions-trigger">
                  <td className="p-1" style={{ width: '35%' }}>
                    Name:
                  </td>
                  <td className="p-1 text-600">
                    Michael Giacchino
                    <HoverActionsBtn />
                  </td>
                </tr>
                <tr className="hover-actions-trigger">
                  <td className="p-1" style={{ width: '35%' }}>
                    Address:
                  </td>
                  <td className="p-1 text-600">
                    987, Apartment 6, Excellent Street, Good Area, Clean City
                    5434, Canada.
                    <HoverActionsBtn />
                  </td>
                </tr>
                <tr className="hover-actions-trigger">
                  <td className="p-1" style={{ width: '35%' }}>
                    Email:
                  </td>
                  <td className="p-1 text-600">
                    <a
                      href="mailto:goodguy@nicemail.com"
                      className="text-600 text-decoration-none"
                    >
                      goodguy@nicemail.com
                    </a>
                    <HoverActionsBtn />
                  </td>
                </tr>
                <tr className="hover-actions-trigger">
                  <td className="p-1" style={{ width: '35%' }}>
                    Mobile No:
                  </td>
                  <td className="p-1 text-600">
                    <a
                      href="tel:+12025550110"
                      className="text-600 text-decoration-none"
                    >
                      +1-202-555-0110
                    </a>
                    <HoverActionsBtn />
                  </td>
                </tr>
                <tr className="hover-actions-trigger">
                  <td className="p-1" style={{ width: '35%' }}>
                    SMS Invoice:
                  </td>
                  <td className="p-1 text-600">
                    On
                    <HoverActionsBtn />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const HoverActionsBtn = ({ to = '#!', icon = 'pencil-alt' }) => (
  <Button
    as={Link}
    variant="link"
    to={to}
    type="button"
    size="sm"
    className="hover-actions p-0"
  >
    <FontAwesomeIcon icon={icon} transform="up-4" className="ms-2 fs--2" />
  </Button>
);

HoverActionsBtn.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string
};

export default BillingAddress;

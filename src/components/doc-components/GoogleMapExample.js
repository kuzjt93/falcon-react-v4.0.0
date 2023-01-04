import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';
import PageHeader from 'components/common/PageHeader';
import GoogleMap from 'components/map/GoogleMap';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const exampleCode = `<GoogleMap
  initialCenter={{
    lat: 48.8583736,
    lng: 2.2922926
  }}
  mapStyle="Default"
  darkStyle="Cobalt"
  className="vh-50"
>
  <h5 className="text-700">Eiffel Tower</h5>
  <p className="fs--1 mb-0">
    Gustave Eiffel's iconic, wrought-iron 1889 tower,
    <br /> with steps and elevators to observation decks.
  </p>
</GoogleMap>`;
const colorScehemCode = `<GoogleMap
  initialCenter={{
    lat: 48.8583736,
    lng: 2.2922926
  }}
  mapStyle="AssassianCreed"
  darkStyle="Cobalt"
  className="vh-50"
/>`;

const propertiesCode = `GoogleMap.propTypes = {
  mapStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  darkStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  initialCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
};`;

const GoogleMapExample = () => {
  return (
    <>
      <PageHeader
        title="React Google Maps Api"
        description="A declarative React Google Maps Api component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team."
        className="mb-3"
      >
        <Button
          href="https://react-google-maps-api-docs.netlify.app/"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          React Google Maps Api Documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Example" />
        <FalconComponentCard.Body
          code={exampleCode}
          scope={{ GoogleMap }}
          language="jsx"
        />
      </FalconComponentCard>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">Map color schemes</h5>
        </Card.Header>
        <Card.Body className="bg-light">
          <p>
            Pass any of the following value as <code>mapStyle</code> prop to{' '}
            <code>GoogleMap</code> component for different color scheme:
          </p>
          <ul>
            <li>
              <code>Default</code>
            </li>
            <li>
              <code>Gray</code>
            </li>
            <li>
              <code>Midnight</code>
            </li>
            <li>
              <code>Hopper</code>
            </li>
            <li>
              <code>Beard</code>
            </li>
            <li>
              <code>AssassianCreed</code>
            </li>
            <li>
              <code>SubtleGray</code>
            </li>
            <li>
              <code>Tripitty</code>
            </li>
          </ul>
        </Card.Body>
      </Card>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Example">
          <p className="mt-2 mb-0">
            With <code>AssassianCreed</code> scheme
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={colorScehemCode}
          scope={{ GoogleMap }}
          language="jsx"
        />
      </FalconComponentCard>

      <Card className="mb-3">
        <FalconComponentCard.Header title="Properties" noPreview />
        <Card.Body className="pt-0">
          <FalconEditor code={propertiesCode} language="jsx" hidePreview />
        </Card.Body>
      </Card>
    </>
  );
};

export default GoogleMapExample;

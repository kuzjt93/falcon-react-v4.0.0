import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Flex from 'components/common/Flex';
import WorldMap from 'components/dashboards/analytics/users-by-country/WorldMap';
import { countryData } from 'data/countryData';
import { locationBySessionTableData } from 'data/dashboard/crm';
import React, { useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LocationBySessionTable from './LocationBySessionTable';

const LocationBySession = () => {
  const chartRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [maxZoomLevel] = useState(5);
  const [minZoomLevel] = useState(1);

  const handleMapReset = () => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'restore'
    });
  };
  const handleZoomIn = () => {
    if (zoomLevel < maxZoomLevel) {
      setZoomLevel(zoomLevel + 1);
    }
    chartRef.current.getEchartsInstance().setOption({
      series: {
        zoom: zoomLevel + 1
      }
    });
  };
  const handleZoomOut = () => {
    if (zoomLevel > minZoomLevel) {
      setZoomLevel(zoomLevel - 1);
    }
    chartRef.current.getEchartsInstance().setOption({
      series: {
        zoom: zoomLevel - 1
      }
    });
  };

  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Location By Session"
        titleTag="h6"
        className="py-2"
        light
        endEl={
          <Flex>
            <div className="btn-reveal-trigger">
              <Button
                variant="link"
                size="sm"
                className="btn-reveal"
                type="button"
                onClick={handleMapReset}
              >
                <FontAwesomeIcon icon="sync-alt" />
              </Button>
            </div>
            <CardDropdown />
          </Flex>
        }
      />
      <Card.Body className="position-relative pb-0">
        <WorldMap
          data={countryData}
          ref={chartRef}
          style={{ height: '18.875rem' }}
          maxZoomLevel={maxZoomLevel}
          minZoomLevel={minZoomLevel}
        />
        <div className="position-absolute top-0 border mt-3 border-200 rounded-3 bg-light">
          <Button
            variant="link"
            size="sm"
            className="bg-100 rounded-bottom-0 px-2 text-700"
            onClick={handleZoomIn}
          >
            <FontAwesomeIcon icon="plus" className="fs--1" />
          </Button>
          <hr className="m-0 text-200" />
          <Button
            variant="link"
            size="sm"
            className="bg-100 rounded-top-0 px-2 text-700"
            onClick={handleZoomOut}
          >
            <FontAwesomeIcon icon="minus" className="fs--1" />
          </Button>
        </div>
        <LocationBySessionTable data={locationBySessionTableData} />
      </Card.Body>

      <Card.Footer className="text-end py-1 px-x1">
        <p className="mb-0 fs--1">
          <span className="d-none d-sm-inline-block me-2">
            1 to 5 of 15
            {/* {pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length}{' '}
            of {rowCount} */}
          </span>
          <span className="d-none d-sm-inline-block me-2">&mdash;</span>
          <Button variant="link" size="sm" className="px-0">
            View All
            <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
          </Button>
        </p>
      </Card.Footer>
    </Card>
  );
};

export default LocationBySession;

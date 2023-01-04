import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { countryData } from 'data/countryData';
import { UsersLocationTableData } from 'data/dashboard/lms';
import { Button, Card } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/FalconLink';
import Flex from 'components/common/Flex';
import WorldMap from 'components/dashboards/analytics/users-by-country/WorldMap';
import UsersLocationTable from './UsersLocationTable';

const UsersLocation = () => {
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
        title="User Location"
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
        <div className="mt-3">
          <div className="bar-indicator-gradient mb-1" />
          <div className="d-flex flex-between-center fs--2">
            <p className="mb-0">less than 1k</p>
            <p className="mb-0">more than 100k</p>
          </div>
        </div>
        <UsersLocationTable data={UsersLocationTableData} />
      </Card.Body>

      <Card.Footer className="bg-light text-end py-2">
        <FalconLink title="View all" className="px-0 fw-medium" />
      </Card.Footer>
    </Card>
  );
};

export default UsersLocation;

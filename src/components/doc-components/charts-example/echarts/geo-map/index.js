import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from 'components/common/PageHeader';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import GeoWorldMap from './GeoWorldMap';
import UsaMap from './UsaMap';

const GeoMaps = () => {
  return (
    <>
      <PageHeader
        title="Getting Started"
        description="ECharts can uses geoJSON format as map outline. You can use third-party <a href='https://geojson.org/' target='_blank'>geoJSON</a> data (like maps) and register them into ECharts. You can get the JSON data from this <a href='https://github.com/pissang/starbucks/tree/gh-pages/json'>Starbuck's Github repository</a>."
        className="mb-3"
      >
        <Button
          href={`https://echarts.apache.org/en/option.html#series-map.type`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Echart's map documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <Row className="g-3">
        <Col lg={6}>
          <GeoWorldMap />
        </Col>
        <Col lg={6}>
          <UsaMap />
        </Col>
      </Row>
    </>
  );
};

export default GeoMaps;

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';
import BasicBarChart from 'components/doc-components/charts-example/echarts/bar-charts/BasicBarChart';

const structureCode = `// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';

// Import charts, all with Chart suffix
import { BarChart } from 'echarts/charts';

// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';

// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

// The usage of ReactEChartsCore are same with above.
<ReactEChartsCore
  echarts={echarts}
  option={getOption()}
  style={{ height: '18.75rem' }}
/>`;

const Placeholder = () => (
  <>
    <PageHeader
      title="How to use"
      description={`The simplest, and the best React wrapper for <strong>Apache ECharts</strong>. <strong>Apache ECharts</strong> is a free, powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts to your commercial products.`}
      className="mb-3"
    >
      <Button
        href={`https://github.com/hustcc/echarts-for-react`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Echarts for react documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Card className="mb-3">
      <FalconComponentCard.Header title="Usage" noPreview />
      <Card.Body className="pt-0">
        <FalconEditor code={structureCode} language="jsx" hidePreview />
      </Card.Body>
    </Card>
    <BasicBarChart title="Basic Example" />
  </>
);

export default Placeholder;

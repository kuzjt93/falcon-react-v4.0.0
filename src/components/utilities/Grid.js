import React from 'react';
import { Button, Tab } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const containerCode = `<Container>
  <Row className="p-2 bg-300 border border-400">
    <Col>1 of 1</Col>
  </Row>
</Container>`;

const fluidCode = `<Container fluid>
  <Row className="p-2 bg-300 border border-400">
    <Col>1 of 1</Col>
  </Row>
</Container>`;

const fluidBreakpointsCode = `<Container fluid='md'>
  <Row className="p-2 bg-300 border border-400">
    <Col>1 of 1</Col>
  </Row>
</Container>`;

const responsiveGridsCode = `<Container>
  <Row className="p-2 mb-2">
    <Col sm={8} className="p-2 bg-300 border border-400">sm=8</Col>
    <Col sm={4} className="p-2 bg-300 border border-400">sm=4</Col>
  </Row>
  <Row className="p-2">
    <Col sm className="p-2 bg-300 border border-400">sm=true</Col>
    <Col sm className="p-2 bg-300 border border-400">sm=true</Col>
    <Col sm className="p-2 bg-300 border border-400">sm=true</Col>
  </Row>
</Container>`;

const columnWidthCode = `<Container>
  <Row className="p-2 mb-1">
    <Col className="p-2 bg-300 border border-400">
      1 of 3
    </Col>
    <Col className="p-2 bg-300 border border-400">
      2 of 3
    </Col>
    <Col className="p-2 bg-300 border border-400">
      3 of 3
    </Col>
  </Row>

  <Row className="p-2 mb-1">
    <Col xs={3} className="p-2 bg-300 border border-400">
      xs=3
    </Col>
    <Col xs={4} className="p-2 bg-300 border border-400">
      xs=4
    </Col>
    <Col xs={5} className="p-2 bg-300 border border-400">
      xs=5
    </Col>
  </Row>

  <Row className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col xs={5} className="p-2 bg-300 border border-400">2 of 3 (wider)</Col>
    <Col className="p-2 bg-300 border border-400">3 of 3</Col>
  </Row>
</Container>`;

const responsiveGridsMixCode = `<Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="p-2 mb-1">
    <Col xs={12} md={8} className="p-2 bg-300 border border-400">
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} className="p-2 bg-300 border border-400">
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="p-2 mb-1">
    <Col xs={6} md={4} className="p-2 bg-300 border border-400">
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} className="p-2 bg-300 border border-400">
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} className="p-2 bg-300 border border-400">
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row className="p-2">
    <Col xs={6} className="p-2 bg-300 border border-400">xs=6</Col>
    <Col xs={6} className="p-2 bg-300 border border-400">xs=6</Col>
  </Row>
</Container>`;

const orderCode = `<Container>
  <Row className="p-2">
    <Col xs className="p-2 bg-300 border border-400">First, but unordered</Col>
    <Col xs={{ order: 12 }} className="p-2 bg-300 border border-400">Second, but last</Col>
    <Col xs={{ order: 1 }} className="p-2 bg-300 border border-400">Third, but second</Col>
  </Row>
</Container>`;

const offsetCode = `<Container>
  <Row className="p-2">
    <Col md={4} className="p-2 bg-300 border border-400">md=4</Col>
    <Col md={{ span: 4, offset: 4 }} className="p-2 bg-300 border border-400">{"md={{ span: 4, offset: 4 }}"}</Col>
  </Row>
  <Row className="p-2">
    <Col md={{ span: 3, offset: 3 }} className="p-2 bg-300 border border-400">{"md={{ span: 3, offset: 3 }}"}</Col>
    <Col md={{ span: 3, offset: 3 }} className="p-2 bg-300 border border-400">{"md={{ span: 3, offset: 3 }}"}</Col>
  </Row>
  <Row className="p-2">
    <Col md={{ span: 6, offset: 3 }} className="p-2 bg-300 border border-400">{"md={{ span: 6, offset: 3 }}"}</Col>
  </Row>
</Container>`;

const columnWidthInRowCode = `<Container>
  <Row xs={2} md={4} lg={6} className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 2</Col>
    <Col className="p-2 bg-300 border border-400">2 of 2</Col>
  </Row>
  <Row xs={1} md={2} className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col className="p-2 bg-300 border border-400">2 of 3</Col>
    <Col className="p-2 bg-300 border border-400">3 of 3</Col>
  </Row>
  <Row xs="auto" className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col className="p-2 bg-300 border border-400">2 of 3</Col>
    <Col className="p-2 bg-300 border border-400">3 of 3</Col>
  </Row>
</Container>`;

const widthAutoCode = `<Container>
  <Row className="justify-content-md-center p-2">
    <Col xs lg="2" className="p-2 bg-300 border border-400">
      1 of 3
    </Col>
    <Col md="auto" className="p-2 bg-300 border border-400">auto width content</Col>
    <Col xs lg="2" className="p-2 bg-300 border border-400">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col md="auto" className="p-2 bg-300 border border-400">auto width content</Col>
    <Col xs lg="2" className="p-2 bg-300 border border-400">
      3 of 3
    </Col>
  </Row>
</Container>`;

const Grid = () => (
  <>
    <PageHeader
      title="Grid system"
      description="Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/layout/grid/`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Grid on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Container">
        <p className="mt-2 mb-0">
          Containers provide a means to center and horizontally pad your site’s
          contents. Use <code>Container</code> for a responsive pixel width.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={containerCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Fluid Container">
          <p className="mt-1 mb-0">
            You can use <code>&lt;Container fluid /&gt;</code> for width: 100%
            across all viewport and device sizes.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={fluidCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mb-0">
            You can set breakpoints for the <code>fluid</code> prop. Setting it
            to a breakpoint (<code>sm, md, lg, xl, xxl</code>) will set the{' '}
            <code>Container</code> as fluid until the specified breakpoint.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={fluidBreakpointsCode} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Column Width">
          <p className="mt-1 mb-0">
            When no column widths are specified the <code>Col</code> component
            will render equal width columns.you can set the width of columns and
            have the sibling columns automatically resize around it.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={columnWidthCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mb-0">
            Set the column value (for any breakpoint size) to{' '}
            <code>"auto"</code> to size columns based on the natural width of
            their content.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={widthAutoCode} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Responsive grids">
          <p className="mt-2 mb-0">
            The <code>Col</code> lets you specify column widths across 6
            breakpoint sizes (<code>xs, sm, md, lg, xl and xxl</code>). For
            every breakpoint, you can specify the amount of columns to span, or
            set the prop to <code>&lt;Col lg={'{true}'} /&gt;</code> for auto
            layout widths.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={responsiveGridsCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mb-0">
            You can also mix and match breakpoints to create different grids
            depending on the screen size.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={responsiveGridsMixCode}
          language="jsx"
        />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Order">
        <p className="mt-2 mb-0">
          You can use the <code>order</code> property to control the visual
          order of your content.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={orderCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Offset">
        <p className="mt-2 mb-0">
          For offsetting grid columns you can set an <code>offset</code> value
          or for a more general layout, use the margin class utilities.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={offsetCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Setting column widths in Row">
        <p className="mt-2 mb-0">
          The <code>Row</code> lets you specify column widths across 5
          breakpoint sizes (<code>xs, sm, md, lg, xl and xxl</code>). For every
          breakpoint, you can specify the amount of columns that will fit next
          to each other. You can also specify <code>auto</code> to set the
          columns to their natural widths.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={columnWidthInRowCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Grid;

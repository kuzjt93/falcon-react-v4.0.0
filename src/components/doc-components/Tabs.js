import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home" className='border-bottom border-x p-3'>
    <p>
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
    </p>
  </Tab>
  <Tab eventKey="profile" title="Profile" className='border-bottom border-x p-3'>
    <p>
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
    </p>
  </Tab>
  <Tab eventKey="contact" title="Contact" className='border-bottom border-x p-3' disabled>
    <p>
      Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, Forgot
      upon your dearest love to call, Whereto all bonds do tie me day by day; That I have frequent
      been with unknown minds, And given to time your own dear-purchas'd right;
    </p>
  </Tab>
</Tabs>
`;
const NoAnimationCode = `
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" transition={false}>
  <Tab eventKey="home" title="Home" className='border-bottom border-x p-3'>
    <p>
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
    </p>
  </Tab>
  <Tab eventKey="profile" title="Profile" className='border-bottom border-x p-3'>
    <p>
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
    </p>
  </Tab>
  <Tab eventKey="contact" title="Contact" className='border-bottom border-x p-3' disabled>
    <p>
      Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, Forgot
      upon your dearest love to call, Whereto all bonds do tie me day by day; That I have frequent
      been with unknown minds, And given to time your own dear-purchas'd right;
    </p>
  </Tab>
</Tabs>
`;
const pillsCode = `
<Tabs variant='pills' defaultActiveKey="profile" id="uncontrolled-tab-example" className='mb-3'>
  <Tab eventKey="home" title="Home" className='border p-3'>
    <p>
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
    </p>
  </Tab>
  <Tab eventKey="profile" title="Profile" className='border p-3'>
    <p>
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
    </p>
  </Tab>
  <Tab eventKey="contact" title="Contact" className='border p-3' disabled>
    <p>
      Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, Forgot
      upon your dearest love to call, Whereto all bonds do tie me day by day; That I have frequent
      been with unknown minds, And given to time your own dear-purchas'd right;
    </p>
  </Tab>
</Tabs>
`;

const controlledCode = `
function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home" className='border-bottom border-x p-3'>
        <p>
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
        </p>
      </Tab>
      <Tab eventKey="profile" title="Profile" className='border-bottom border-x p-3'>
        <p>
          Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
        </p>
      </Tab>
      <Tab eventKey="contact" title="Contact" className='border-bottom border-x p-3' disabled>
        <p>
          Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, Forgot
          upon your dearest love to call, Whereto all bonds do tie me day by day; That I have frequent
          been with unknown minds, And given to time your own dear-purchas'd right;
        </p>
      </Tab>
    </Tabs>
  );
}
`;

const customLayoutCode = `
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <p>
            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
`;

const Tabs = () => (
  <>
    <PageHeader
      title="Tabs"
      description="Create dynamic tabbed interfaces.Tabs is a higher-level component for quickly creating a Nav matched with a set of TabPanes."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/tabs`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Tabs on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col md={6}>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Basic Example" light={false} />
          <FalconComponentCard.Body code={exampleCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col md={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Controlled" light={false}>
            <p className="mt-2 mb-0">
              <code>Tabs</code> can be controlled directly when you want to
              handle the selection logic personally.
            </p>
          </FalconComponentCard.Header>
          <FalconComponentCard.Body code={controlledCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col md={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="No animation" light={false}>
            <p className="mt-2 mb-0">
              Set the <code>transition</code> prop to <code>false</code>
            </p>
          </FalconComponentCard.Header>
          <FalconComponentCard.Body code={NoAnimationCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col md={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Pills" light={false} />
          <FalconComponentCard.Body code={pillsCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Custom Tab Layout" light={false}>
        <p className="mt-2">
          For more complex layouts the flexible <code>TabContainer</code>,
          <code>TabContent</code>, and <code>TabPane</code> components along
          with any style of <code>Nav</code> allow you to quickly piece together
          your own Tabs component with additional markup needed.
        </p>
        <p className="mb-0">
          Create a set of NavItems each with an <code>eventKey</code>
          corresponding to the eventKey of a <code>TabPane</code>. Wrap the
          whole thing in a <code>TabContainer</code> and you have fully
          functioning custom tabs component. Check out the below example making
          use of the grid system and pills.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={customLayoutCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Tabs;

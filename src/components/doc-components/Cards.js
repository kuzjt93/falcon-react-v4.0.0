import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import generic1 from 'assets/img/generic/1.jpg';
import generic10 from 'assets/img/generic/10.jpg';
import generic11 from 'assets/img/generic/11.jpg';
import generic12 from 'assets/img/generic/12.jpg';
import generic3 from 'assets/img/generic/3.jpg';
import team1 from 'assets/img/team/1.jpg';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import Notification from 'components/notification/Notification';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const exampleCode = `
<Card style={{width: '20rem'}}>
  <Card.Img src={generic1} variant='top'/>
  <Card.Body>
    <Card.Title as='h5'>
      Card title
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card
      title and make up the bulk of the card's
      content.
    </Card.Text>
    <Button color="primary" size="sm">
      Go somewhere
    </Button>
  </Card.Body>
</Card>
`;

const cardWithImageCode = `
<Card style={{width: '20rem'}}>
  <Card.Img src={generic3} variant='top'/>
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </ListGroup>
</Card>
`;

const cardStylesCode = `
<Row className="g-4">
  {['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].map(
    (variant, idx) => (
      <Col sm={6} lg={4} key={variant}>
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        >
          <Card.Body>
            <Card.Title as="div">{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  )}
</Row>
`;

const cardWithBgCode = `
<PageHeader
  title="Page Title"
  description="The page header is a nice little feature to add appropriate spacing around the headings on a page. This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them."
  className="mb-3"
  >
  <Button
    href={'cards'}
    target="_blank"
    variant="link"
    size="sm"
    className="ps-0"
  >
    Get Started
    <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
  </Button>
</PageHeader>
`;

const notificationCode = `
  <div style={{maxWidth:'25rem'}}>
    <Notification
      avatar={{
        src: team1,
        size: '2xl'
      }}
      children='<strong>Emma Watson</strong> replied to your comment : "Hello world 😍"'
      time="Just Now"
      to="#!"
      unread={false}
      emoji="💬"
    />
  </div>
`;

const backgroundCode = `
<Card className="bg-dark text-white light" style={{ maxWidth: '30rem' }}>
  <Card.Img src={generic3} alt="Card image cap" />
  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
    <Card.Title className="text-white">
      Card Title
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
`;

const cardGroupCode = `
<CardGroup>
  <Card>
    <Card.Img variant='top' width="100%" src={generic10} alt="Card image cap" />
    <Card.Body>
      <Card.Title as='h5'>First card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </Card.Text>
      <p className="text-muted">
        <small className="text-muted"> Last updated 45 mins ago</small>
      </p>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant='top' width="100%" src={generic11} alt="Card image cap" />
    <Card.Body>
      <Card.Title as='h5'>Second card title</Card.Title>
      <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
      <p className="text-muted">
        <small className="text-muted">Last updated an hour ago</small>
      </p>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant='top' width="100%" src={generic12} alt="Card image cap" />
    <Card.Body>
      <Card.Title as='h5'>Yet another card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card
        has even longer content than the first to show that equal height action.
      </Card.Text>
      <p className="text-muted">
        <small className="text-muted"> Last updated yesterday</small>
      </p>
    </Card.Body>
  </Card>
</CardGroup>
`;

const Card = () => {
  return (
    <>
      <PageHeader
        title="Cards"
        description="Falcon’s cards provide a flexible and extensible content container with multiple variants and options."
        className="mb-3"
      >
        <Button
          href={`${reactBootstrapDocsUrl}/components/cards`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Cards on React Bootstrap
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <Row className="g-3 mb-3">
        <Col lg={6}>
          <FalconComponentCard className="h-100">
            <FalconComponentCard.Header title="Example" light={false} />
            <FalconComponentCard.Body
              code={exampleCode}
              language="jsx"
              scope={{ generic1 }}
            />
          </FalconComponentCard>
        </Col>
        <Col lg={6}>
          <FalconComponentCard className="h-100">
            <FalconComponentCard.Header title="Card with image" light={false} />
            <FalconComponentCard.Body
              code={cardWithImageCode}
              language="jsx"
              scope={{ generic3 }}
            />
          </FalconComponentCard>
        </Col>
      </Row>

      <FalconComponentCard>
        <FalconComponentCard.Header
          title="Card with background"
          light={false}
        />
        <FalconComponentCard.Body
          code={cardWithBgCode}
          language="jsx"
          scope={{ PageHeader, FontAwesomeIcon }}
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Notification" light={false} />
        <FalconComponentCard.Body
          code={notificationCode}
          language="jsx"
          scope={{ team1, Notification }}
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Background" light={false} />
        <FalconComponentCard.Body
          code={backgroundCode}
          language="jsx"
          scope={{ generic3 }}
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Card Groups" light={false} />
        <FalconComponentCard.Body
          code={cardGroupCode}
          language="jsx"
          scope={{ generic10, generic11, generic12 }}
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Card Styles" light={false}>
          <p className="mb-0">
            You can change a card's appearance by changing their{' '}
            <code>&lt;bg&gt;</code>, and <code>&lt;text&gt;</code> props.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={cardStylesCode}
          language="jsx"
          scope={{ generic3 }}
        />
      </FalconComponentCard>
    </>
  );
};

export default Card;

import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import generic1 from 'assets/img/generic/1.jpg';
import generic2 from 'assets/img/generic/2.jpg';
import { Link } from 'react-router-dom';

const stretchedLinkCode = `
<Card style={{width: '20rem'}}>
  <Card.Img src={generic1} variant='top' />
  <Card.Body>
    <Card.Title as='h5'>
      Card title
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card
      title and make up the bulk of the card's
      content.
    </Card.Text>
    <Button as={Link} to='#!' color="primary" size="sm" className="stretched-link">
      Go somewhere
    </Button>
  </Card.Body>
</Card>`;
const containingBlockCode = `
<Card style={{width: '18rem'}} className='shadow-lg'>
  <Card.Img src={generic2} variant='top' />
  <Card.Body>
    <Card.Title as='h3' className='fs-3'>
      Card with stretched links
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card
      title and make up the bulk of the card's
      content.
    </Card.Text>
    <Card.Text>
      <Link className="stretched-link text-info position-relative" to="#!">
        Stretched link will not work here, because{' '}
        <code className="text-danger">position: relative</code> is added to the link
      </Link>
    </Card.Text>
    <Card.Text  className="card-text bg-light" style={{transform: 'rotate(0)'}}>
      This
      <Link className="text-warning stretched-link" to="#!">
        stretched link 
      </Link>
      {' '}
        will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </Card.Text>
  </Card.Body>
</Card>`;

const StretchedLink = () => (
  <>
    <PageHeader
      title="Stretched Link"
      description="Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false}>
        <p className="mt-2">
          Add <code>.stretched-link </code>to a link to make its containing
          block clickable via a <code>::after</code> pseudo element. In most
          cases, this means that an element with{' '}
          <code>position: relative; </code>that contains a link with the{' '}
          <code>.stretched-link </code>class is clickable.
        </p>
        <p>
          Cards have <code>position: relative </code>by default in
          react-bootstrap, so in this case you can safely add the
          <code>.stretched-link </code>class to a link in the card without any
          other HTML changes.
        </p>
        <p className="mb-0">
          Multiple links and tap targets are not recommended with stretched
          links. However, some
          <code> position </code>and <code>z-index </code>styles can help should
          this be required.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={stretchedLinkCode}
        scope={{ generic1, Link }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Identifying the containing block"
        light={false}
      >
        <p className="my-2">
          If the stretched link doesn’t seem to work, the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block">
            containing block
          </a>{' '}
          will probably be the cause. The following CSS properties will make an
          element the containing block:
        </p>
        <ul className="mb-0">
          <li>
            A <code>position</code> value other than <code>static</code>
          </li>
          <li>
            A <code>transform</code> or <code>perspective</code> value other
            than <code>none</code>
          </li>
          <li>
            A <code>will-change</code> value of <code>transform</code> or{' '}
            <code>perspective</code>
          </li>
          <li>
            A <code>filter</code> value other than <code>none</code> or a{' '}
            <code>will-change</code> value of <code>filter</code> (only works on
            Firefox)
          </li>
        </ul>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={containingBlockCode}
        scope={{ generic2, Link }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default StretchedLink;

import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const basicFormCode = `
<Form>
  <Form.Group className="mb-3" controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupBod">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupGender">
    <Form.Label>Gender</Form.Label>
    <Form.Select>
      <option value=''>Select your gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-1" controlId="personalAccount">
    <Form.Check
      inline
      type="radio"
      name="accountType"
      id="personalAccount"
      className="me-2"
      defaultChecked
    />
    <Form.Label className="mb-0">Personal Account</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3" controlId="businessAccount">
    <Form.Check
      inline
      type="radio"
      name="accountType"
      id="businessAccount"
      className="me-2"
    />
    <Form.Label className="mb-0">Business Account</Form.Label>
  </Form.Group>

  <Form.Group controlId="imageUpload" className="mb-3">
    <Form.Label>Upload Image</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Description" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="rememberMe">
    <Form.Check type="checkbox" id="rememberMe" label="Remember Me" name="remember" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;

const horizontalFormCode = `
<Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
`;

const formGridLayout = `
<Form>
  <Row className="mb-3 g-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3 g-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;

const horizontalSizingCode = `
<>
  <Row  className='g-3'>
    <Form.Label column="sm" lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control size="sm" type="email" placeholder="Small text" />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control type="email" placeholder="Normal text" />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column="lg" lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="email" placeholder="Large text" />
    </Col>
  </Row>
  
</>
`;

const columnSizingCode = `
<Form>
  <Row className='g-3'>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
  </Row>
</Form>
`;

const autoSizingCode = `
<Form>
  <Row className="align-items-center g-3">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Select className="mb-2">
        <option value=''>Choose...</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-0"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>
`;

const guttersCode = `
<Form>
  <Row className="align-items-center g-3">
    <Col>
      <Form.Label htmlFor="firstName" visuallyHidden>
        First name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="firstName"
        placeholder="First Name"
      />
    </Col>
    <Col>
      <Form.Label htmlFor="lastName" visuallyHidden>
        Last Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="lastName"
        placeholder="Last Name"
      />
    </Col>
  </Row>
</Form>
`;

const FormLayout = () => (
  <>
    <PageHeader
      title="Layout"
      description="Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/forms/layout`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Form's layout on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic form" light={false} />
      <FalconComponentCard.Body code={basicFormCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Horizontal form" light={false} />
      <FalconComponentCard.Body code={horizontalFormCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Horizontal form label sizing"
        light={false}
      >
        <p className="mt-2 mb-0">
          You can size the <code>&lt;FormLabel&gt;</code> using the column prop
          as shown.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={horizontalSizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Form Grid Layout" light={false}>
        <p className="mt-2 mb-0">
          More complex layouts can also be created with the grid system.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={formGridLayout} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Grid - Column Sizing" light={false}>
        <p className="mt-2 mb-0">
          As shown in the previous examples, our grid system allows you to place
          any number of <code>&lt;Col&gt;</code>s within a{' '}
          <code>&lt;Row&gt;</code>. They'll split the available width equally
          between them. You may also pick a subset of your columns to take up
          more or less space, while the remaining <code>&lt;Col&gt;</code>s
          equally split the rest, with specific column classes like{' '}
          <code>&lt;Col xs={7}&gt;</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={columnSizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Grid - Auto Sizing" light={false}>
        <p className="mt-2 mb-0">
          The example below uses a flexbox utility to vertically center the
          contents and changes <code>&lt;Col&gt;</code> to{' '}
          <code>&lt;Col xs="auto"&gt;</code> so that your columns only take up
          as much space as needed. Put another way, the column sizes itself
          based on on the contents.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={autoSizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Gutters" light={false}>
        <p className="mt-2 mb-0">
          By adding <code>gutter modifier classes</code>, you can have control
          over the gutter width in as well the inline as block direction
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={guttersCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default FormLayout;

import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import { useForm } from 'react-hook-form';

const tooltipsCode = `
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="tooltipFirstName" className="position-relative">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="tooltipLastName" className="position-relative">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="tooltipUserName" className="position-relative">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="tooltipCity" className="position-relative">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="tooltipState" className="position-relative">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="tooltipZip" className="position-relative">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" className="position-relative">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}`;
const exampleCode = `
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="exampleFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="exampleLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="exampleUserName">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="exampleCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="exampleState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="exampleZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}`;

const inputGroupValidationCode = `
<InputGroup hasValidation>
  <InputGroup.Text>@</InputGroup.Text>
  <Form.Control type="text" required isInvalid />
  <Form.Control.Feedback type="invalid">
    Please choose a username.
  </Form.Control.Feedback>
</InputGroup>
`;

const reactFormHookCode = `function ReactFormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [formData, setData] = useState({});

  const onSubmit = data => {
    setData(data);
  };

  return (
    <Row>
      <Col md={7}>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formHookname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              isInvalid={!!errors.name}
              {...register('name', {
                required: 'Name field is required'
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name && errors.name.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              isInvalid={!!errors.email}
              {...register('email', { required: 'Email field is required' })}
            />

            <Form.Control.Feedback type="invalid">
              {errors.email && errors.email.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3 g-3">
            <Form.Group as={Col} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                isInvalid={!!errors.password}
                {...register('password', {
                  required: 'Password field is required'
                })}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password && errors.password.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                isInvalid={!!errors.confirmPassword}
                {...register('confirmPassword', {
                  required: 'Confirm Password field is required',
                  validate: value =>
                    value === watch('password') || 'The password do not match'
                })}
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword && errors.confirmPassword.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col md="auto">
        <h5 className="mt-4">Result</h5>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </Col>
    </Row>
  );
}`;

const FormValidation = () => (
  <>
    <PageHeader
      title="Validation"
      description="Provide valuable, actionable feedback to your users with form validation feedback."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/forms/validation/`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Validation on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Tooltips" light={false}>
        <p className="mt-2 mb-0">
          If your form layout allows it, you can use the <code>tooltip</code>{' '}
          prop to display validation feedback in a styled tooltip. Be sure to
          have a parent with <code>position: relative</code> on it for tooltip
          positioning. In the example below, our column classes have this
          already, but your project may require an alternative setup.z
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={tooltipsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Input group validation" light={false}>
        <p className="mt-2 mb-0">
          To properly show rounded corners in an <code>&lt;InputGroup&gt;</code>{' '}
          with validation, the <code>&lt;InputGroup&gt;</code> requires the{' '}
          <code>hasValidation</code> prop.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={inputGroupValidationCode}
        language="jsx"
      />
    </FalconComponentCard>

    <PageHeader
      title="React hook form"
      description="<strong>React hook form</strong> is Performant, flexible and extensible forms with easy-to-use validation."
      className="mb-3"
    >
      <Button
        href="https://www.react-hook-form.com/"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React hook form documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Validation with React hook form"
        light={false}
      />
      <FalconComponentCard.Body
        code={reactFormHookCode}
        scope={{ useForm }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default FormValidation;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from 'context/Context';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';

const lightCode = `<Card bg='100' className="light">
  <Card.Body>
    <p className="mb-0 text-700">
      <b>This element will retain it's color if you switch between light and dark mode.</b>
    </p>
  </Card.Body>
</Card>`;

const darkCode = `<Card bg='100' className="dark">
  <Card.Body>
    <p className="mb-0 text-700">
      <b>This element will retain it's color if you switch between light and dark mode.</b>
    </p>
  </Card.Body>
</Card>`;

const dark__Code = `<Card bg='light' className="dark__bg-primary">
  <Card.Body>
    <p className="mb-0 dark__text-success">
      <span className="fw-bold">
        This element will retain it's color if you switch between light and dark mode.
      </span>
    </p>
  </Card.Body>
</Card>`;

const darkModeExampleCode = `function DarkModeExample(){
  const {
    config: { isDark },
    setConfig
  } = React.useContext(AppContext); // import AppContext from 'src/context/Context.js'
  return (
    <Row>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Checkbox </h5>
        <Form.Check
          type="checkbox"
          id="themeToggleCheckBox"
          label="Dark mode"
          onChange={e => setConfig('isDark', e.target.checked)}
          checked={isDark}
        />
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Switch Input</h5>
        <Form.Check
          type="switch"
          id="themeToggleSwitch"
          label="Dark mode"
          onChange={e => setConfig('isDark', e.target.checked)}
          checked={isDark}
        />
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Radio Button</h5>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            id="lightRadioButton"
            label="Light"
            name="themeToggleRadio"
            checked={!isDark}
            onChange={() => setConfig('isDark', false)}
          />
          <Form.Check
            inline
            type="radio"
            id="darkRadioButton"
            label="Dark"
            name="themeToggleRadio"
            checked={isDark}
            onChange={() => setConfig('isDark', true)}
          />
        </Form.Group>
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Custom Icon</h5>
        <div className="px-0 theme-control-toggle" onClick={() => setConfig('isDark', !isDark)}>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="hi">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                transform="shrink-7"
                className="fs-4"
              />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
    </Row>
  );
};`;

const DarkMode = () => (
  <>
    <PageHeader title="Dark Mode" className="mb-3">
      <p className="mt-2 mb-0">
        It’s effortless to switch Dark Mode in Falcon-React. You can enable Dark
        Mode by default or create a Dark/Light switch if you want. To set the
        default mode "Dark", please see the
        <Link to="/documentation/customization/configuration">
          configuration page
        </Link>
      </p>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Toggle Dark Mode" light={false}>
        <p className="mt-2 mb-0">
          Toggling dark mode is very easy in Falcon-React. You can toggle dark
          or light mode by using checkbox, radio input, switch input and custom
          icon component.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={darkModeExampleCode}
        scope={{ AppContext, FontAwesomeIcon }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Modify Dark colors"
        light={false}
        noPreview
      />
      <FalconComponentCard.Body>
        <p className="mb-0">
          You can find all the variables used to create the dark mode in
          <code> src/assets/scss/theme/root/_dark.scss </code> file. If you want
          to override a variable, copy that variable to{' '}
          <code> src/assets/scss/_user-variables.scss </code> file and update it
          as you see fit. After changing the variable build your scss again.
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Using the Dark className"
        light={false}
        noPreview
      />
      <FalconComponentCard.Body>
        <h6 className="fs-0">
          You can keep a style constant regardless of current (light or dark)
          mode
        </h6>
        <p>
          If you want a component to retain it’s color (light or dark) as it is
          regardless of the current mode, you can use the following classeNames
          -
        </p>
        <p>
          <code> .light </code> - It will keep the color light even if the
          current mode is dark
        </p>
        <p>
          <code> .dark </code> - It will keep the color dark even if the current
          mode is light
        </p>

        <Row>
          <Col>
            <FalconComponentCard>
              <FalconComponentCard.Header light={false} />
              <FalconComponentCard.Body code={lightCode} language="jsx" />
            </FalconComponentCard>
          </Col>
          <Col>
            <FalconComponentCard>
              <FalconComponentCard.Header light={false} />
              <FalconComponentCard.Body code={darkCode} language="jsx" />
            </FalconComponentCard>
          </Col>
        </Row>

        <h6 className="fs-0 mt-4">
          Override Background and Text color only for dark mode
        </h6>

        <p>
          If you want to use a different text color or background color rather
          than the default dark theme color for any element, you can use the
          special "dark" classeNames:
        </p>

        <ul>
          <li>
            <code>dark__bg-* </code>
          </li>
          <li>
            <code>dark__text-* </code>
          </li>
        </ul>

        <p>The following element illustrates the example:</p>

        <FalconComponentCard>
          <FalconComponentCard.Header light={false} />
          <FalconComponentCard.Body code={dark__Code} language="jsx" />
        </FalconComponentCard>
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default DarkMode;

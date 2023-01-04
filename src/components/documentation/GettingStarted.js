import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import corner4 from 'assets/img/illustrations/corner-4.png';
import corner5 from 'assets/img/illustrations/corner-5.png';
import Background from 'components/common/Background';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconEditor from 'components/common/FalconEditor';
import SoftBadge from 'components/common/SoftBadge';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const serveCode = `npm install -g serve
serve -s build`;

const GettingStarted = () => (
  <>
    <Row className="g-3 mb-3">
      <Col lg={12} xxl={6}>
        <Card className="mb-3 h-100">
          <Background
            image={corner4}
            className="bg-card"
            style={{
              borderTopRightRadius: '0.375rem',
              borderBottomRightRadius: '0.375rem'
            }}
          />
          <Card.Body className="position-relative pe-7 pe-xxl-8">
            <h3>Getting Started</h3>
            <p className="mb-0">
              Welcome to the ReactJS version of the{' '}
              <a
                href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"
                target="_blank"
                rel="noopener noreferrer"
              >
                original Falcon theme{' '}
              </a>
              . This doc will guide you to understand how{' '}
              <strong>Falcon-React</strong> theme is organized, basics of how to
              customize, and how to compile from the source code if you want.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} xxl={6}>
        <Card className="mb-3 border border-primary h-100">
          <Background
            image={corner5}
            className="bg-card"
            style={{
              borderTopRightRadius: '0.375rem',
              borderBottomRightRadius: '0.375rem'
            }}
          />
          <Card.Body className="pb-0 position-relative">
            <SoftBadge bg="warning" className="fs--1 py-2 opacity-85 fw-medium">
              <FontAwesomeIcon
                className="me-2 fs--2 fw-medium"
                icon={faTrophy}
              />
              Hire us!
            </SoftBadge>
            <h3 className="mt-3 text-primary ">Need a hand?</h3>
            <p className="mb-0">
              We are one of the leading UI/UX design, front-end & backend
              development consultancy company and are available for hire.
            </p>
          </Card.Body>
          <Card.Footer className="position-relative pt-0">
            <span className="fw-semi-bold">Give us a nudge at </span>
            <a href="mailto:support@themewagon.com">support@themewagon.com</a>
          </Card.Footer>
        </Card>
      </Col>
    </Row>

    <Card className="mb-3">
      <FalconCardHeader title="Running in Local environment" />
      <Card.Body>
        <p>
          This project is scaffolded using{' '}
          <a
            href="https://create-react-app.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create React App
          </a>
          .
        </p>
        <ol className="mb-0 ps-x1">
          <li>
            Install{' '}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>{' '}
            if you do not already have it installed on your machine.
          </li>
          <li>Open the “falcon-react” directory with your cmd or terminal</li>
          <li>
            Run <code>npm i</code>
            <br />
            This command will download all the necessary dependencies for falcon
            in the <code>node_modules</code> directory.
          </li>
          <li>
            Run <code>npm start</code>. A local web server will start at{' '}
            <code>http://localhost:3000</code>
          </li>
        </ol>
      </Card.Body>
    </Card>
    <Card className="mb-3">
      <FalconCardHeader title="Creating a Production Build" />
      <Card.Body>
        <p>
          After you done your customization, when you are ready to build, Edit{' '}
          <code>homapage</code> in your <code>package.json</code> file to change
          asset files relative paths. For more information visit{' '}
          <a
            href="https://create-react-app.dev/docs/deployment/#building-for-relative-paths"
            target="_blank"
            rel="noreferrer"
          >
            Create React App Doc.
          </a>{' '}
          Then Run <code>npm run build</code> command in your project directory
          to make the Production build.
        </p>
        <p>
          This will create an optimized production build by compililing, merging
          and minifying all the source files as necessary and will put them in
          the <code>build/</code> folder.
        </p>
        <p>
          To run the production build locally at
          <code> http://localhost:5000 </code> run the following commands:
        </p>
        <FalconEditor code={serveCode} language="bash" hidePreview />
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <FalconCardHeader title="Contents" />
      <Card.Body>
        <p className="mb-0">
          Inside the zip-file you'll find the following directories and files.
          Both compiled and minified distrubution files, as well as the source
          files are included in the package.
        </p>
        <code>
          <pre>
            {`
theme/
  ├── .env
  ├── .eslintignore
  ├── .eslintrc.js
  ├── .gitignore
  ├── .prettierrc.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── webpack.config.json
  ├── public/
  │   ├── css/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── assets/
      │   ├── img/
      │   ├── json/
      │   ├── scss/
      │   └── video/
      ├── components/
      ├── contex/
      ├── data/
      ├── helpers/
      ├── hooks/
      ├── layouts/
      ├── reducers/
      ├── routes/
      ├── App.js
      ├── config.js
      ├── index.js
      └── Main.js
`}
          </pre>
        </code>
      </Card.Body>
    </Card>
  </>
);

export default GettingStarted;

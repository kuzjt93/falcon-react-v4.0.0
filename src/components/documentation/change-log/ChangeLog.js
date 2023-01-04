import React from 'react';
import PageHeader from 'components/common/PageHeader';
import { Alert, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import changeLogs from './changelogs';
import Logs from './Logs';
import FalconEditor from 'components/common/FalconEditor';

const Changelog = () => (
  <>
    <PageHeader title="Changelog" className="mb-3" />

    <Card className="mb-3">
      <Card.Body>
        <Alert variant="warning" className="p-4 mb-0">
          <Flex>
            <FontAwesomeIcon icon="exclamation-triangle" className="fs-3" />
            <div className="ms-3 flex-1">
              <h4 className="alert-heading">Before you update!</h4>
              Backup your files and read the changelog before updating Falcon on
              your project. If you come across with any problems with Falcon
              template during the update, feel free to contact us at{' '}
              <a href="mailto:info@themewagon.com">info@themewagon.com</a>.
            </div>
          </Flex>
        </Alert>
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <Card.Body>
        <Alert variant="info" className="p-4 mb-0 bg-white">
          <Flex>
            <FontAwesomeIcon icon="tools" className="fs-3" />
            <div className="ms-3 flex-1">
              <h4 className="alert-heading">After you update</h4>

              <p className="mb-0">
                After successfully updating all the latest files and changes
                from a new version of Falcon in your ReactJS project, you need
                to run the following commands in your project directory. These
                commands will install the updated versions of all dependencies,
                install if any new dependencies are required, and run the
                project.
              </p>
              <h6 className="mt-3">
                If you use{' '}
                <strong>
                  <code>yarn</code>
                </strong>{' '}
                , run:
              </h6>
              <FalconEditor
                code={`yarn install && yarn start`}
                language="bash"
                hidePreview
              />
              <h6 className="mt-3">
                If you use{' '}
                <strong>
                  <code>npm</code>
                </strong>{' '}
                , run:
              </h6>
              <FalconEditor
                code={`npm i && npm start`}
                language="bash"
                hidePreview
              />
            </div>
          </Flex>
        </Alert>
      </Card.Body>
    </Card>

    {changeLogs.map((logs, index) => (
      <Logs {...logs} index={index} key={index} />
    ))}
  </>
);

export default Changelog;

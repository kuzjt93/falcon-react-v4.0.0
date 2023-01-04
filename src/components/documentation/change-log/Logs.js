import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Card } from 'react-bootstrap';
import changeLogs from './changelogs';
import createMarkup from 'helpers/createMarkup';
import SoftBadge from 'components/common/SoftBadge';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logs = ({
  version,
  warning,
  title,
  badgeTitle,
  publish,
  logs,
  children,
  index: currentIndex
}) => (
  <Card className="mb-3">
    <Card.Header>
      <h5>
        <code className="fw-bold fs-1">v{version}</code> - {title}{' '}
        {badgeTitle && (
          <SoftBadge pill bg="warning" className="me-2">
            {badgeTitle}
          </SoftBadge>
        )}
      </h5>
      <p className="mb-0">{publish}</p>
    </Card.Header>
    <Card.Body className="bg-light">
      {warning && Object.keys(warning).length && (
        <Alert variant="warning" className="p-card">
          <Flex>
            <FontAwesomeIcon icon="exclamation-triangle" className="fs-3" />
            <div className="ms-3 flex-1">
              <h4 className="alert-heading">{warning.title}</h4>
              {warning.text} click{' '}
              <a target="_blank" rel="noreferrer" href={warning.link}>
                here.
              </a>
            </div>
          </Flex>
        </Alert>
      )}
      {children}
      {Object.keys(logs).map((value, index) => {
        return value === 'Migration' ? (
          <div key={index}>
            <h5 className="fs-0">
              {value}:{' '}
              <strong>
                <code>v{changeLogs[currentIndex + 1].version}</code>
              </strong>{' '}
              to{' '}
              <strong>
                <code>v{version}</code>
              </strong>
            </h5>
            <ul className="ps-3">
              {Object.entries(logs[value]).map((entry, i) => (
                <li key={i}>
                  <h6>{entry[0]}</h6>
                  <ul>
                    {entry[1].map((mv, mi) => (
                      <li
                        dangerouslySetInnerHTML={{ __html: mv }}
                        key={entry[0] + i + mi}
                      />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={index}>
            <h5 className="fs-0">{value}</h5>
            <ul className="ps-3">
              {logs[value].map((v, i) => (
                <li key={i} dangerouslySetInnerHTML={createMarkup(v)} />
              ))}
            </ul>
          </div>
        );
      })}
    </Card.Body>
  </Card>
);

Logs.propTypes = {
  version: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string,
  publish: PropTypes.string.isRequired,
  logs: PropTypes.object.isRequired,
  children: PropTypes.node,
  index: PropTypes.number,
  warning: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
  })
};

Logs.defaultProps = { logs: {} };

export default Logs;

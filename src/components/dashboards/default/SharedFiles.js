import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import cloudDownload from 'assets/img/icons/cloud-download.svg';
import editAlt from 'assets/img/icons/edit-alt.svg';

const SharedFiles = ({ files, className }) => {
  return (
    <Card className={className}>
      <FalconCardHeader
        title="Shared Files"
        titleTag="h6"
        className="py-2"
        light
        endEl={
          <Link className="py-1 fs--1 font-sans-serif" to="#!">
            View All
          </Link>
        }
      />
      <Card.Body className="pb-0">
        {files.map((file, index) => (
          <SharedFile
            key={file.id}
            file={file}
            isLast={index === files.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

const SharedFile = ({ file, isLast }) => {
  const { img, name, user, time, border } = file;
  return (
    <>
      <Flex alignItems="center" className="mb-3 hover-actions-trigger">
        <div className="file-thumbnail">
          <img
            className={classNames('h-100 w-100 fit-cover rounded-2', {
              border: border
            })}
            src={img}
            alt=""
          />
        </div>
        <div className="ms-3 flex-shrink-1 flex-grow-1">
          <h6 className="mb-1">
            <Link className="stretched-link text-900 fw-semi-bold" to="#!">
              {name}
            </Link>
          </h6>
          <div className="fs--1">
            <span className="fw-semi-bold">{user}</span>
            <span className="fw-medium text-600 ms-2">{time}</span>
          </div>
          <div className="hover-actions end-0 top-50 translate-middle-y">
            <OverlayTrigger
              overlay={<Tooltip id="nextTooltip">Download</Tooltip>}
            >
              <Button
                variant="light"
                size="sm"
                className="border-300 me-1 text-600"
                as={'a'}
                href={img}
                download
              >
                <img src={cloudDownload} alt="Download" width={15} />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="nextTooltip">Edit</Tooltip>}>
              <Button variant="light" size="sm" className="border-300 text-600">
                <img src={editAlt} alt="Edit" width={15} />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </Flex>
      {!isLast && <hr className="text-200" />}
    </>
  );
};

SharedFile.propTypes = {
  file: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    user: PropTypes.string,
    time: PropTypes.string,
    border: PropTypes.bool
  }),
  isLast: PropTypes.bool
};

SharedFiles.propTypes = {
  files: PropTypes.arrayOf(SharedFile.propTypes.file),
  className: PropTypes.string
};

export default SharedFiles;

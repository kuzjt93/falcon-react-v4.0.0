import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Dropdown,
  Image,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import { getSize } from 'helpers/utils';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import Flex from 'components/common/Flex';
import CardDropdown from 'components/common/CardDropdown';

const CourseCoverPhoto = () => {
  const [cover, setCover] = useState();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setCover(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0])
        })
      );
    }
  });

  return (
    <Card className="mb-3">
      <Card.Header>
        <h5 className="mb-0 d-inline-block">
          Upload Cover Photo
          <OverlayTrigger
            overlay={<Tooltip id="coverPphotoTooltip">Add cover photo</Tooltip>}
          >
            <span className="ms-2 text-primary fs-0">
              <FontAwesomeIcon icon="info-circle" />
            </span>
          </OverlayTrigger>
        </h5>
      </Card.Header>
      <Card.Body className="bg-light">
        <div {...getRootProps({ className: 'dropzone-area py-6' })}>
          <input {...getInputProps({ multiple: false })} />
          <div className="fs--1">
            <img src={cloudUpload} alt="" width={20} className="me-2" />
            <span className="d-none d-lg-inline">
              Drag your image here
              <br />
              or,{' '}
            </span>
            <Button variant="link" size="sm" className="p-0 fs--1">
              Browse
            </Button>
          </div>
        </div>
        {cover && (
          <div className="mt-3">
            <Flex
              alignItems="center"
              className="btn-reveal-trigger"
              key={cover.path}
            >
              <Image
                rounded
                width={40}
                height={40}
                src={cover.preview}
                alt={cover.path}
              />
              <Flex
                justifyContent="between"
                direction="column"
                className="mx-2 flex-1 text-truncate"
              >
                <h6 className="text-truncate">{cover.path}</h6>
                <Flex className="position-relative" alignItems="center">
                  <p className="mb-0 fs--1 text-400 line-height-1">
                    <strong>{getSize(cover.size)}</strong>
                  </p>
                </Flex>
              </Flex>
              <CardDropdown>
                <div className="py-2">
                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => setCover()}
                  >
                    Remove
                  </Dropdown.Item>
                </div>
              </CardDropdown>
            </Flex>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
export default CourseCoverPhoto;

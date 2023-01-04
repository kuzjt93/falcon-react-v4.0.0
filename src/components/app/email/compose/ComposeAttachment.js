import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';

const getIcon = type => {
  const icon = ['far'];
  if (type.includes('image')) {
    icon.push('file-image');
  }
  if (type.includes('video')) {
    icon.push('file-video');
  }
  if (type.includes('audio')) {
    icon.push('file-audio');
  }
  if (type.includes('zip')) {
    icon.push('file-archive');
  }
  if (type.includes('pdf')) {
    icon.push('file-pdf');
  }
  if (
    type.includes('html') ||
    type.includes('css') ||
    type.includes('json') ||
    type.includes('javascript')
  ) {
    icon.push('file-code');
  }
  if (icon.length === 1) {
    icon.push('file');
  }
  return icon;
};

const getName = name => {
  const [fileName, extension] = name.split('.');
  return `${fileName.slice(0, 24)}.${extension}`;
};

const ComposeAttachment = ({
  id,
  name,
  size,
  handleDetachAttachment,
  type
}) => (
  <Flex
    alignItems="center"
    className="border px-2 rounded-3 bg-white dark__bg-1000 my-1 fs--1"
  >
    <FontAwesomeIcon icon={getIcon(type)} className="fs-1" />
    <span className="mx-2 flex-1">
      {getName(name)} ({(size / 1024).toFixed(2)}kb)
    </span>
    <span
      className="text-300 p-1 ml-auto cursor-pointer"
      id={`attachmentTooltip${id}`}
      onClick={() => handleDetachAttachment(id)}
    >
      <FontAwesomeIcon icon="times" />
    </span>
  </Flex>
);

ComposeAttachment.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  handleDetachAttachment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default ComposeAttachment;

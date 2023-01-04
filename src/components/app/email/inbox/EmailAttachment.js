import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getIconClassNames = type => {
  switch (type) {
    case 'youtube':
      return 'text-youtube';
    case 'zip':
      return 'text-warning';
    case 'doc':
      return 'text-primary';
    case 'img':
      return 'text-danger';
    case 'pdf':
      return 'text-danger';
    default:
      return 'text-primary';
  }
};

const EmailAttachment = ({ attachment }) => {
  const { fileName, icon, type, src } = attachment;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      inline
      alignItems="center"
      className="border rounded-pill px-3 py-1 me-2 mt-2 inbox-link cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {type === 'img' && isOpen && (
        <Lightbox
          mainSrc={src}
          reactModalStyle={{ overlay: { zIndex: 999999 } }}
          onCloseRequest={() => setIsOpen(!isOpen)}
        />
      )}
      <FontAwesomeIcon
        icon={icon}
        transform="grow-4"
        className={getIconClassNames(type)}
      />
      <span className="ms-2">{fileName}</span>
    </Flex>
  );
};
EmailAttachment.propTypes = {
  attachment: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    type: PropTypes.string.isRequired,
    src: PropTypes.string
  })
};
export default EmailAttachment;

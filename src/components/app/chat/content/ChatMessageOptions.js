import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ChatMessageOptions = () => {
  const [actions] = useState([
    {
      tooltip: 'Forward',
      icon: 'share'
    },
    {
      tooltip: 'Archive',
      icon: 'archive'
    },
    {
      tooltip: 'Edit',
      icon: 'edit'
    },
    {
      tooltip: 'Remove',
      icon: 'trash-alt'
    }
  ]);

  return (
    <ul className="hover-actions position-relative list-inline mb-0 text-400 mx-2">
      {actions.map(action => (
        <li
          key={action.tooltip}
          className="list-inline-item cursor-pointer chat-option-hover"
        >
          <OverlayTrigger overlay={<Tooltip>{action.tooltip}</Tooltip>}>
            <div>
              <FontAwesomeIcon icon={action.icon} className="d-inline-block" />
            </div>
          </OverlayTrigger>
        </li>
      ))}
    </ul>
  );
};

ChatMessageOptions.propTypes = {
  id: PropTypes.string
};

export default ChatMessageOptions;

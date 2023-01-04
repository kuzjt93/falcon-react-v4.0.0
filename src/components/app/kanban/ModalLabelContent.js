import React, { useContext } from 'react';
import { labels } from 'data/kanban';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from 'context/Context';

const ModalLabelContent = () => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <Flex>
      {labels.slice(0, 3).map(label => (
        <SoftBadge bg={label.type} className="me-1 py-2" key={label.text}>
          {label.text}
        </SoftBadge>
      ))}

      <Dropdown drop={isRTL ? 'start' : 'end'}>
        <Dropdown.Toggle
          variant="secondary"
          size="sm"
          className="px-2 fsp-75 bg-400 border-400 dropdown-caret-none"
        >
          <FontAwesomeIcon icon="plus" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <h6 className="dropdown-header py-0 px-3 mb-0">Select Label</h6>
          <Dropdown.Divider />
          <div className="px-3">
            {labels.map(label => (
              <Dropdown.Item
                as="button"
                className={`badge-soft-${label.type} rounded-1 mb-2`}
                key={label.text}
              >
                {label.text}
              </Dropdown.Item>
            ))}
          </div>
          <Dropdown.Divider />
          <div className="px-3">
            <Button
              variant="outline-secondary"
              size="sm"
              className="d-block w-100 border-400"
            >
              Create label
            </Button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </Flex>
  );
};

export default ModalLabelContent;

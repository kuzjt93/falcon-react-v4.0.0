import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KanbanContext } from 'context/Context';

const KanbanColumnHeader = ({ id, title, itemCount }) => {
  const { kanbanDispatch } = useContext(KanbanContext);

  const handleRemoveColumn = () => {
    kanbanDispatch({
      type: 'REMOVE_KANBAN_COLUMN',
      payload: { id }
    });
  };

  return (
    <div className="kanban-column-header">
      <h5 className="fs-0 mb-0">
        {title} <span className="text-500">({itemCount})</span>
      </h5>
      <Dropdown align="end" className="font-sans-serif btn-reveal-trigger">
        <Dropdown.Toggle variant="reveal" size="sm" className="py-0 px-2">
          <FontAwesomeIcon icon="ellipsis-h" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="py-0">
          <Dropdown.Item href="#!">Add Card</Dropdown.Item>
          <Dropdown.Item href="#!">Edit</Dropdown.Item>
          <Dropdown.Item href="#!">Copy link</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={handleRemoveColumn}
            href="#!"
            className="text-danger"
          >
            Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

KanbanColumnHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  itemCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default KanbanColumnHeader;

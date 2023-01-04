import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import AppContext from 'context/Context';

const CardDropdown = ({
  btnRevealClass,
  drop,
  children,
  icon = 'ellipsis-h'
}) => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <Dropdown
      className="font-sans-serif btn-reveal-trigger"
      align={isRTL ? 'start' : 'end'}
      drop={drop}
    >
      <Dropdown.Toggle
        variant="link"
        size="sm"
        data-boundary="viewport"
        className={classNames('text-600', {
          [btnRevealClass]: btnRevealClass,
          'btn-reveal': !btnRevealClass
        })}
      >
        <FontAwesomeIcon icon={icon} className="fs--2" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="border py-0">
        {children}
        {!children && (
          <div className="py-2">
            <Dropdown.Item>View</Dropdown.Item>
            <Dropdown.Item>Export</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CardDropdown.propTypes = {
  btnRevealClass: PropTypes.string,
  drop: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
};

export default CardDropdown;

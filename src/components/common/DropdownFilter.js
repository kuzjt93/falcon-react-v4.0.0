import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from './Flex';
import classNames from 'classnames';

const DropdownItemFilter = ({
  filter,
  currentFilter,
  className,
  children,
  ...rest
}) => {
  return (
    <Dropdown.Item
      as={Flex}
      justifyContent="between"
      className={classNames('cursor-pointer', className, {
        active: filter === currentFilter
      })}
      {...rest}
    >
      <>{children}</>
      {filter === currentFilter && (
        <FontAwesomeIcon icon="check" transform="down-4 shrink-4" />
      )}
    </Dropdown.Item>
  );
};

const DropdownFilter = ({ filters, handleFilter, currentFilter, icon }) => {
  return (
    <Dropdown
      className="font-sans-serif me-2"
      style={{ '--falcon-dropdown-content': 'none' }}
    >
      <Dropdown.Toggle
        variant="falcon-default"
        className="text-600 dropdown-caret-none"
        size="sm"
      >
        {currentFilter && <span className="me-2">{currentFilter}</span>}
        <FontAwesomeIcon icon={icon} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="border py-2">
        {filters.map((filter, index) => (
          <DropdownItemFilter
            currentFilter={currentFilter}
            onClick={() => {
              handleFilter(filter);
            }}
            filter={filter}
            className="text-capitalize"
            key={index}
          >
            {filter}
          </DropdownItemFilter>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownItemFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

DropdownFilter.propTypes = {
  filters: PropTypes.array,
  handleFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default DropdownFilter;

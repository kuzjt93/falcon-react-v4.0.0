import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import AppContext, { EmailContext } from 'context/Context';
import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';

const InboxFilterDropdownItem = ({ active, children, ...rest }) => (
  <Dropdown.Item
    href="#!"
    as={Flex}
    justifyContent="between"
    className="text-capitalize cursor-pointer"
    {...rest}
  >
    {children}
    {active && <FontAwesomeIcon icon="check" transform="down-4 shrink-4" />}
  </Dropdown.Item>
);

const InboxFilterDropdown = () => {
  const {
    emailState: { filters, currentFilter },
    emailDispatch
  } = useContext(EmailContext);

  const {
    config: { isRTL }
  } = useContext(AppContext);

  const handleSelect = filter => {
    emailDispatch({
      type: 'FILTER',
      payload: filter
    });
  };
  return (
    <Dropdown className="font-sans-serif">
      <Dropdown.Toggle
        variant="falcon-default"
        size="sm"
        className="text-600 dropdown-caret-none ms-2"
      >
        <FontAwesomeIcon icon="sliders-h" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="py-2" align={isRTL ? 'end' : 'start'}>
        {filters.map(filter => (
          <InboxFilterDropdownItem
            active={filter === currentFilter}
            key={filter}
            onClick={() => handleSelect(filter)}
          >
            {filter}
          </InboxFilterDropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

InboxFilterDropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default InboxFilterDropdown;

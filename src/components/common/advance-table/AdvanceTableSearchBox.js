/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useAsyncDebounce } from 'react-table';

const AdvanceTableSearchBox = ({
  globalFilter,
  setGlobalFilter,
  placeholder = 'Search...',
  className
}) => {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <InputGroup className={classNames(className, 'position-relative')}>
      <FormControl
        value={value || ''}
        onChange={({ target: { value } }) => {
          setValue(value);
          onChange(value);
        }}
        size="sm"
        id="search"
        placeholder={placeholder}
        type="search"
        className="shadow-none"
      />
      <Button
        size="sm"
        variant="outline-secondary"
        className="border-300 hover-border-secondary"
      >
        <FontAwesomeIcon icon="search" className="fs--1" />
      </Button>
    </InputGroup>
  );
};

export default AdvanceTableSearchBox;

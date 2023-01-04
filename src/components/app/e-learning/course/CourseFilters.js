import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Collapse, Form, Image, Card } from 'react-bootstrap';
import { courseFilters } from 'data/elearning/courseData';
import { slugifyText } from 'helpers/utils';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';

const CourseFilters = ({ setShow, isOffcanvas }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  const handleFilterOptions = e => {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      let options = [...filterOptions];
      options = options.filter(option => option.value !== value);

      checked && options.push({ name, value });
      setFilterOptions(options);
    }

    if (type === 'radio') {
      const isExists = filterOptions.some(el => el.name === name);
      isExists
        ? setFilterOptions(
            filterOptions.map(el => (el.name === name ? { ...el, value } : el))
          )
        : setFilterOptions([...filterOptions, { name, value }]);
    }
  };

  return (
    <Card className="course-filter">
      <SimpleBarReact style={{ height: '100%' }}>
        <Card.Header as={Flex} className="flex-between-center pt-x1">
          <Flex className="gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between">
            <h5 className="mb-0 text-700 fs-0 d-flex align-items-center">
              <FontAwesomeIcon icon="filter" className="fs--1 me-1" />
              <span>Filter</span>
            </h5>
            <Button
              variant="outline-secondary"
              size="sm"
              className="ms-2 mt-0 mb-0"
              style={{ fontSize: '12px' }}
              onClick={() => setFilterOptions([])}
            >
              <FontAwesomeIcon icon="redo-alt" className="me-1 fs--2" />
              Reset
            </Button>
          </Flex>
          {isOffcanvas && (
            <Button
              onClick={() => setShow(false)}
              className="btn-close text-reset"
              size="sm"
              variant="link"
            ></Button>
          )}
        </Card.Header>
        <Card.Body className="py-0">
          {filterOptions.length > 0 && (
            <Flex wrap="wrap" className="gap-2 mb-3">
              {filterOptions.map(tag => (
                <SoftBadge
                  key={tag.value}
                  className="text-capitalize bg-300 text-700 py-0"
                >
                  {tag.value}
                  <Button
                    size="sm"
                    variant="link"
                    className="p-0 text-700"
                    onClick={() =>
                      setFilterOptions(
                        filterOptions.filter(({ value }) => value !== tag.value)
                      )
                    }
                  >
                    <FontAwesomeIcon icon="times" className="ms-1 fs--2" />
                  </Button>
                </SoftBadge>
              ))}
            </Flex>
          )}
          <ul className="list-unstyled">
            {courseFilters.map((filter, index) => (
              <FilterItem
                key={slugifyText(filter.label)}
                index={index}
                filter={filter}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                handleFilterOptions={handleFilterOptions}
              />
            ))}
          </ul>
        </Card.Body>
      </SimpleBarReact>
    </Card>
  );
};

CourseFilters.propTypes = {
  setShow: PropTypes.func,
  isOffcanvas: PropTypes.bool
};

const FilterItem = ({ filter, index, filterOptions, handleFilterOptions }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={`${courseFilters.length - 1 !== index && 'border-bottom'}`}>
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        aria-controls={`${slugifyText(filter.label)}-collapse`}
        aria-expanded={index === 0 || index === 1 ? !open : open}
        className="collapse-indicator-plus w-100 fs--2 fw-medium text-start text-600 text-decoration-none py-3 px-0"
      >
        {filter.label}
      </Button>
      <Collapse
        in={index === 0 || index === 1 ? !open : open}
        id={`${slugifyText(filter.label)}-collapse`}
      >
        <ul className="list-unstyled">
          {filter.options &&
            filter.options.map(option => (
              <li key={slugifyText(option.label)}>
                <Form.Check
                  type={option.type}
                  className="form-check d-flex ps-0"
                >
                  <Form.Check.Label
                    className="fs--1 flex-1 text-truncate"
                    htmlFor={`filter-${slugifyText(filter.label)}-${slugifyText(
                      option.label
                    )}`}
                  >
                    {option.icon && (
                      <FontAwesomeIcon
                        icon={option.icon}
                        className={`me-3 ${
                          option.iconShrink ? 'fs--2' : 'fs--1'
                        }`}
                      />
                    )}
                    {option.svg && (
                      <Image
                        src={option.svg}
                        width={13}
                        alt=""
                        className="me-3"
                      />
                    )}
                    {option.label}
                  </Form.Check.Label>

                  <Form.Check.Input
                    type={option.type}
                    onChange={e => handleFilterOptions(e)}
                    checked={
                      option.type === 'checkbox'
                        ? filterOptions.some(
                            ({ value }) => option.value === value
                          )
                        : undefined
                    }
                    id={`filter-${slugifyText(filter.label)}-${slugifyText(
                      option.label
                    )}`}
                    name={option.name}
                    value={option.value}
                  />
                </Form.Check>
              </li>
            ))}
        </ul>
      </Collapse>
    </li>
  );
};

FilterItem.propTypes = {
  index: PropTypes.number,
  filter: PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    )
  }),
  handleFilterOptions: PropTypes.func,
  filterOptions: PropTypes.array
};

export default CourseFilters;

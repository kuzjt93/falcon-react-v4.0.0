import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import EventScheduleItem from './EventScheduleItem';

const EventSchedule = ({ register, setValue }) => {
  const [items, setItems] = useState([
    {
      title: '',
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  ]);
  const handleAddSchedule = () => {
    setItems([
      ...items,
      {
        title: '',
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null
      }
    ]);
  };
  const handleRemoveItem = index => {
    setItems(items.filter((item, ind) => index !== ind));
  };
  const handleChange = (id, name, value) => {
    const newItems = [...items];
    const updatedItem = { ...newItems[id], [name]: value };
    setItems([
      ...newItems.slice(0, id),
      updatedItem,
      ...newItems.slice(id + 1)
    ]);
  };

  return (
    <Card className="mb-3">
      <Card.Header as="h5">Schedule</Card.Header>
      <Card.Body className="bg-light">
        {items.map((item, index) => (
          <EventScheduleItem
            {...item}
            register={register}
            setValue={setValue}
            key={index}
            index={index}
            handleRemove={handleRemoveItem}
            handleChange={handleChange}
          />
        ))}

        <IconButton
          onClick={handleAddSchedule}
          variant="falcon-default"
          size="sm"
          icon="plus"
          transform="shrink-3"
        >
          Add Item
        </IconButton>
      </Card.Body>
    </Card>
  );
};

EventSchedule.propTypes = {
  register: PropTypes.func,
  setValue: PropTypes.func
};

export default EventSchedule;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import CardDropdown from 'components/common/CardDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconItem from 'components/common/icon/IconItem';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { todoList } from 'data/dashboard/projectManagement';
import FalconCardHeader from 'components/common/FalconCardHeader';

const ToDoListItem = ({ item, index, length, handleChange }) => {
  return (
    <Flex
      justifyContent="between"
      className={classNames(
        'hover-actions-trigger btn-reveal-trigger px-x1 hover-bg-100 border-200 border-top',
        { 'border-bottom': index === length - 1 }
      )}
      alignItems="center"
    >
      <Form.Check
        className="py-2 my-2 d-flex align-items-center"
        id={`todoItem-${index}`}
      >
        <Form.Check.Input
          type="checkbox"
          defaultChecked={item.completed}
          onChange={e => handleChange(item.id, e.target.checked)}
          className={classNames(
            `mt-0 rounded-circle form-check-input-${item.color}`,
            {
              'form-check-line-through': item.completed
            }
          )}
        />
        <Form.Check.Label className="flex-1 mb-0 ms-3">
          {item.task}
        </Form.Check.Label>
      </Form.Check>
      <div className="d-flex align-items-center">
        <div className="hover-actions">
          <IconItem
            tag="button"
            icon="clock"
            size="sm"
            className="btn rounded-3 me-2 fs--2"
          />
          <IconItem
            tag="button"
            icon="user-plus"
            size="sm"
            className="btn rounded-3 me-2 fs--2"
          />
        </div>
        <CardDropdown
          btnRevealClass="btn-reveal-sm "
          drop={index > 1 ? 'start' : undefined}
        />
      </div>
    </Flex>
  );
};

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState(todoList);
  const handleChange = (id, completed) => {
    const updatedTodos = todoItems.map(item =>
      item.id === id ? { ...item, completed } : item
    );
    setTodoItems(updatedTodos);
  };
  return (
    <Card className="h-100">
      <FalconCardHeader title="To Do List" titleTag="h6" />
      <Card.Body className="p-0 overflow-hidden">
        {todoItems.map((item, index) => (
          <ToDoListItem
            key={item.id}
            item={item}
            index={index}
            length={todoItems.length}
            setTodoItems={setTodoItems}
            handleChange={handleChange}
          />
        ))}
      </Card.Body>
      <Card.Footer className="p-0 bg-light">
        <Button
          as={Link}
          variant="link"
          size="sm"
          to="#!"
          className="w-100 py-2"
        >
          <FontAwesomeIcon icon="plus" className="me-1 fs--2" />
          Add New Task
        </Button>
      </Card.Footer>
    </Card>
  );
};

ToDoListItem.propTypes = {
  item: PropTypes.shape({
    task: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }),
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ToDoList;

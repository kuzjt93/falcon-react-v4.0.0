import IconButton from 'components/common/IconButton';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { todoList } from 'data/dashboard/support-desk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ToDoItems = ({ item, index, length, handleChange }) => {
  return (
    <div
      className={classNames(
        'd-flex hover-actions-trigger btn-reveal-trigger gap-3 border-200',
        { 'border-bottom mb-3': index !== length - 1 }
      )}
    >
      <Form.Check className="mb-0">
        <Form.Check.Input
          id={`ticket-todo-${index}`}
          onChange={e => handleChange(item.id, e.target.checked)}
          className={classNames('mb-1', {
            'form-check-line-through': item.completed
          })}
        />
        <Form.Check.Label
          className="w-100 pe-3"
          htmlFor={`ticket-todo-${index}`}
        >
          <span className="mb-1 text-700 d-block">{item.task}</span>
          <span
            className={classNames(
              'fs--2 text-600 lh-base font-base fw-normal d-block',
              { 'mb-2': index !== length - 1 }
            )}
          >
            {item.title}
          </span>
        </Form.Check.Label>
      </Form.Check>
      <div className="hover-actions end-0">
        <Button variant="link" className="fs--2 icon-item-sm px-0 text-600">
          <FontAwesomeIcon icon="trash" className="text-danger" />
        </Button>
      </div>
    </div>
  );
};

ToDoItems.propTypes = {
  item: PropTypes.shape({
    task: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }),
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

const ToDoList = ({ previewClassName }) => {
  const [todoItems, setTodoItems] = useState(todoList);
  const handleChange = (id, completed) => {
    const updatedTodos = todoItems.map(item =>
      item.id === id ? { ...item, completed } : item
    );
    setTodoItems(updatedTodos);
  };
  return (
    <Card className={classNames('h-100', previewClassName)}>
      <Card.Header className="d-flex flex-between-center bg-light">
        <h6 className="mb-0">To-do List</h6>
        <IconButton
          variant="falcon-default"
          size="sm"
          icon="plus"
          transform="shrink-3"
        >
          <span>Add</span>
        </IconButton>
      </Card.Header>
      <Card.Body className="ticket-todo-list scrollbar">
        {todoItems.map((item, index) => (
          <ToDoItems
            item={item}
            index={index}
            length={todoItems.length}
            key={item.id}
            handleChange={handleChange}
          />
        ))}
      </Card.Body>
      <Card.Footer className="text-center border-top border-200 p-0">
        <a href="#!" className="btn btn-link btn-sm px-0 fw-medium py-2">
          View all
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </a>
      </Card.Footer>
    </Card>
  );
};

ToDoList.propTypes = {
  previewClassName: PropTypes.string
};

export default ToDoList;

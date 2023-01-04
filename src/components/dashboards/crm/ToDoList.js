import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { toDoList } from 'data/dashboard/crm';
import CardDropdown from 'components/common/CardDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconItem from 'components/common/icon/IconItem';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ToDoListItem = ({ item, index, handleChange }) => {
  return (
    <Flex
      justifyContent="between"
      className="hover-actions-trigger  btn-reveal-trigger px-x1 hover-bg-100"
      alignItems="center"
    >
      <Form.Check
        className="py-3 mb-0 d-flex align-items-center"
        id={`todoItem-${index}`}
      >
        <Form.Check.Input
          type="checkbox"
          defaultChecked={item.completed}
          onChange={e => handleChange(item.id, e.target.checked)}
          className={classNames('rounded-3 mt-0', {
            'form-check-line-through': item.completed
          })}
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
      </div>
      <div>
        <CardDropdown
          btnRevealClass="btn-reveal-sm "
          drop={index > 1 ? 'start' : undefined}
        />
      </div>
    </Flex>
  );
};

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState(toDoList);
  const handleChange = (id, completed) => {
    const updatedTodos = todoItems.map(item =>
      item.id === id ? { ...item, completed } : item
    );
    setTodoItems(updatedTodos);
  };
  return (
    <Card className="h-100">
      <Card.Header className="border-bottom">
        <h6 className="mb-0">To Do List</h6>
      </Card.Header>
      <Card.Body className="p-0 overflow-hidden">
        <Row className="gx-3 align-items-center my-3 px-x1">
          <Col xs="auto">
            <h6 className="text-primary mb-0">25%</h6>
          </Col>
          <Col>
            <ProgressBar style={{ height: '0.5625rem' }}>
              <ProgressBar
                now={70}
                key={1}
                variant="progress-gradient"
                className="rounded-pill"
              />
            </ProgressBar>
          </Col>
        </Row>
        {todoItems.map((item, index) => (
          <ToDoListItem
            key={item.id}
            item={item}
            index={index}
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
    completed: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }),
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ToDoList;

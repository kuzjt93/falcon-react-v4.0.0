import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import { Controller } from 'react-hook-form';
import MultiSelect from 'components/common/MultiSelect';

const CourseGoals = ({ control }) => {
  const defaultGoals = [
    {
      id: uuid(),
      goal: 'Which tool is preferred for what kind of work.'
    },
    {
      id: uuid(),
      goal: 'How to take criticism and make best use of them.'
    }
  ];
  const [goals, setGoals] = useState(defaultGoals);
  const [goal, setGoal] = useState('');
  const [editingGoal, setEditingGoal] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleGoalSubmit = () => {
    if (!isEditing) {
      setGoals([...goals, { id: uuid(), goal: goal }]);
      setGoal('');
    } else {
      const updatedGoals = goals.map(goal => {
        if (goal.id === editingGoal.id) {
          return {
            ...goal,
            goal: editingGoal.goal
          };
        }
        return goal;
      });
      setGoals(updatedGoals);
      setEditingGoal({});
      setIsEditing(false);
    }
  };

  const handleChange = value => {
    isEditing
      ? setEditingGoal({
          ...editingGoal,
          goal: value
        })
      : setGoal(value);
  };

  return (
    <Card className="mb-3 mb-lg-0">
      <Card.Header as="h5" className="bg-light">
        Course Goals and Key features
      </Card.Header>
      <Card.Body>
        <Form.Label htmlFor="courseGoal">
          Course Goals<span className="text-danger">*</span>
        </Form.Label>
        <ul className="list-unstyled mb-0">
          {goals.map(item => (
            <li key={item.id}>
              <Flex
                alignItems="center"
                className="hover-actions-trigger py-3 border-top border-300"
              >
                <FontAwesomeIcon
                  icon="grip-lines"
                  className="fs--2 text-secondary me-3"
                />
                <p className="fs--1 mb-0 me-6">{item.goal}</p>
                <div className="hover-actions end-0 top-50 translate-middle-y">
                  <OverlayTrigger
                    overlay={<Tooltip id="editTooltip">Edit</Tooltip>}
                  >
                    <Button
                      variant="link"
                      type="button"
                      onClick={() => {
                        setEditingGoal(item);
                        setIsEditing(true);
                      }}
                      className="d-flex align-items-center fs--1 text-700 p-0 me-3"
                    >
                      <FontAwesomeIcon icon="pencil-alt" />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="removeTooltip">Remove</Tooltip>}
                  >
                    <Button
                      variant="falcon-default"
                      type="button"
                      size="sm"
                      onClick={() =>
                        setGoals(goals.filter(({ id }) => id !== item.id))
                      }
                      className="icon-item icon-item-sm rounded-3 fs--2"
                    >
                      <FontAwesomeIcon icon="times" />
                    </Button>
                  </OverlayTrigger>
                </div>
              </Flex>
            </li>
          ))}
        </ul>
        <Form.Group controlId="courseGoal" className="position-relative mb-4">
          <Form.Control
            type="text"
            name="courseGoal"
            required
            value={!isEditing ? goal : editingGoal.goal}
            className="pe-4"
            onChange={e => handleChange(e.target.value)}
            placeholder="Add another goal..."
          />
          <div className="position-absolute end-0 top-50 translate-middle">
            <Button
              variant="link"
              onClick={handleGoalSubmit}
              type="button"
              className="d-flex align-items-center fs--1 text-700 p-0 me-1"
            >
              <FontAwesomeIcon icon="arrow-right" />
            </Button>
          </div>
        </Form.Group>
        <Form.Group>
          <Flex alignItems="center" justifyContent="between">
            <Form.Label>
              Key features<span className="text-danger">*</span>
            </Form.Label>
            <Button size="sm" variant="link" className="p-0">
              Add new
            </Button>
          </Flex>
          <Controller
            name="tags"
            render={({ field, ref }) => (
              <MultiSelect
                {...field}
                menuPlacement="top"
                ref={ref}
                closeMenuOnSelect={false}
                isMulti
                options={[
                  { value: '1', label: 'Total 13 hours of video lectures' },
                  { value: '2', label: '12 premium article access' },
                  { value: '3', label: '11 downloadable resources' },
                  { value: '4', label: 'Mobile, Tab or TV friendly content' }
                ]}
                placeholder="Select multiple features..."
              />
            )}
            control={control}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

CourseGoals.propTypes = {
  control: PropTypes.object.isRequired
};

export default CourseGoals;

import React, { useState } from 'react';
import { Button, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';

const CourseRequirements = () => {
  const defaultRequirements = [
    {
      id: uuid(),
      requirement:
        'This course requires profieciency in English language as the Lessons are prepared in English.'
    },
    {
      id: uuid(),
      requirement:
        'Learners with following skills might be more benefited, but little extra work is all that’ll take.'
    }
  ];
  const [requirements, setRequirements] = useState(defaultRequirements);
  const [requirement, setRequirement] = useState('');
  const [editingRequirement, setEditingRequirement] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleRequirementSubmit = () => {
    if (!isEditing) {
      setRequirements([...requirements, { id: uuid(), requirement }]);
      setRequirement('');
    } else {
      const updatedRequirements = requirements.map(requirement => {
        if (requirement.id === editingRequirement.id) {
          return {
            ...requirement,
            requirement: editingRequirement.requirement
          };
        }
        return requirement;
      });
      setRequirements(updatedRequirements);
      setEditingRequirement({});
      setIsEditing(false);
    }
  };

  const handleChange = value => {
    isEditing
      ? setEditingRequirement({
          ...editingRequirement,
          requirement: value
        })
      : setRequirement(value);
  };

  return (
    <Card className="mb-3">
      <Card.Header as="h5" className="bg-light">
        Requirements
      </Card.Header>
      <Card.Body className="pt-0">
        <ul className="list-unstyled mb-0">
          {requirements.map((item, index) => (
            <li key={item.id}>
              <Flex
                alignItems="center"
                className={`hover-actions-trigger py-3 ${
                  index !== 0 && 'border-top border-300'
                }`}
              >
                <FontAwesomeIcon
                  icon="grip-lines"
                  className="fs--2 text-secondary me-3"
                />
                <p className="fs--1 mb-0 me-6">{item.requirement}</p>
                <div className="hover-actions end-0 top-50 translate-middle-y">
                  <OverlayTrigger
                    overlay={<Tooltip id="editTooltip">Edit</Tooltip>}
                  >
                    <Button
                      variant="link"
                      type="button"
                      onClick={() => {
                        setEditingRequirement(item);
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
                        setRequirements(
                          requirements.filter(({ id }) => id !== item.id)
                        )
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
        <Form.Group controlId="courseRequirement" className="position-relative">
          <Form.Control
            type="text"
            name="courseRequirement"
            required
            value={!isEditing ? requirement : editingRequirement.requirement}
            className="pe-4"
            onChange={e => handleChange(e.target.value)}
            placeholder="Add another requirement..."
          />
          <div className="position-absolute end-0 top-50 translate-middle">
            <Button
              variant="link"
              onClick={handleRequirementSubmit}
              type="button"
              className="d-flex align-items-center fs--1 text-700 p-0 me-1"
            >
              <FontAwesomeIcon icon="arrow-right" />
            </Button>
          </div>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default CourseRequirements;

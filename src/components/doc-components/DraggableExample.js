import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const data = [
  {
    id: 'droppable1',
    contents: [
      {
        id: 10000001,
        text: 'Add a pdf file that describes all the symptoms of COVID-19'
      },
      {
        id: 10000002,
        text: 'Make a Registration form that include Name, Email and a Password input field'
      },
      {
        id: 10000003,
        text: 'Add a cookie notice which will be shown in the bottom of the page and have a link of "Privacy Policy"'
      },
      {
        id: 10000004,
        text: 'Update profile page layout with cover image and user setting menu'
      }
    ]
  },
  {
    id: 'droppable2',
    contents: [
      {
        id: 20000001,
        text: 'Update all the npm packages and also remove the outdated plugins'
      },
      {
        id: 20000002,
        text: 'Add a getting started page that allows users to see the starting process'
      },
      {
        id: 20000003,
        text: 'Review and test all the task and deploy to the server'
      },
      {
        id: 20000004,
        text: 'Get all the data by API call and show them to the landing page by adding a new section'
      }
    ]
  }
];

const draggableCode = `DraggableComponent = () => {
  const [draggableData, setDraggableData] = useState(data);

  const getColumn = id => {
    return draggableData.find(item => item.id === id);
  };

  const reorder = (array, fromIndex, toIndex) => {
    const newArr = [...array];

    const chosenItem = newArr.splice(fromIndex, 1)[0];
    newArr.splice(toIndex, 0, chosenItem);

    return newArr;
  };

  const move = (source, destination) => {
    const sourceItemsClone = [...getColumn(source.droppableId).contents];
    const destItemsClone = [...getColumn(destination.droppableId).contents];

    const [removedItem] = sourceItemsClone.splice(source.index, 1);
    destItemsClone.splice(destination.index, 0, removedItem);

    return {
      updatedDestItems: destItemsClone,
      updatedSourceItems: sourceItemsClone
    };
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = getColumn(source.droppableId).contents;
      const reorderedItems = reorder(items, source.index, destination.index);
      const result = draggableData.map(item =>
        item.id === source.droppableId
          ? { ...item, contents: reorderedItems }
          : item
      );

      setDraggableData(result);
    } else {
      const sourceColumn = getColumn(source.droppableId);
      const destColumn = getColumn(destination.droppableId);
      const movedItems = move(source, destination);
      const result = draggableData.map(item => {
        return {
          ...item,
          contents:
            (item.id === sourceColumn.id && movedItems.updatedSourceItems) ||
            (item.id === destColumn.id && movedItems.updatedDestItems)
        };
      });

      setDraggableData(result);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row>
        <Col lg={6}>
          <StrictModeDroppable droppableId="droppable1" type="DRAG">
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-items-container border bg-white dark__bg-1000 rounded-2 py-3 mb-3"
              >
                {draggableData[0].contents.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={\`drag\${item.id}\`}
                    index={index}
                  >
                    {provided => (
                      <div>
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-3 kanban-item shadow-sm dark__bg-1100"
                        >
                          <Card.Body>
                            <p className="fs--1 fw-medium font-sans-serif mb-0">
                              {item.text}
                            </p>
                          </Card.Body>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </Col>
        <Col lg={6}>
          <StrictModeDroppable droppableId="droppable2" type="DRAG">
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-items-container border bg-white dark__bg-1000 rounded-2 py-3 mb-3"
              >
                {draggableData[1].contents.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={\`drag\${item.id}\`}
                    index={index}
                  >
                    {provided => (
                      <div>
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-3 kanban-item shadow-sm dark__bg-1100"
                        >
                          <Card.Body>
                            <p className="fs--1 fw-medium font-sans-serif mb-0">
                              {item.text}
                            </p>
                          </Card.Body>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </Col>
      </Row>
    </DragDropContext>
  );
};`;

const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

const DraggableExample = () => (
  <>
    <PageHeader
      title="Draggable"
      description={`Beautiful and accessible drag and drop for lists with React`}
      className="mb-3"
    >
      <Button
        href={`https://github.com/atlassian/react-beautiful-dnd`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Draggable Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example">
        <p className="mt-2 mb-0">
          Here is the example of the Multiple Container Sortable feature of the
          Draggable library. We also design{' '}
          <Link to="/app/kanban">Kanban Board</Link> using this Draggable
          Library.{' '}
          <b>You can drag any card in between the two columns below:</b>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={draggableCode}
        scope={{ DragDropContext, Draggable, StrictModeDroppable, data }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

StrictModeDroppable.propTypes = {
  children: PropTypes.any
};

export default DraggableExample;

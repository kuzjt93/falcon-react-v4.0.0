import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import KanbanColumnHeader from './KanbanColumnHeader';
import TaskCard from './TaskCard';
import AddAnotherForm from './AddAnotherForm';
import IconButton from 'components/common/IconButton';
import classNames from 'classnames';
import { KanbanContext } from 'context/Context';
import StrictModeDroppable from './StrictModeDroppable';

const KanbanColumn = ({ kanbanColumnItem }) => {
  const { id, name, items } = kanbanColumnItem;
  const [showForm, setShowForm] = useState(false);
  const formViewRef = useRef(null);
  const {
    kanbanState: { kanbanItems },
    kanbanDispatch
  } = useContext(KanbanContext);

  const handleSubmit = cardData => {
    const targetList = kanbanItems.find(item => item.id === id);
    const cardId = targetList.items.length
      ? Math.max(...targetList.items.map(item => item.id)) + 1
      : Number(`${targetList.id}0`);
    const newCard = {
      id: cardId,
      title: cardData.title
    };
    const isEmpty = !Object.keys(cardData).length;

    if (!isEmpty) {
      kanbanDispatch({
        type: 'ADD_TASK_CARD',
        payload: { targetListId: id, newCard }
      });
      setShowForm(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      formViewRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);

    return clearTimeout(timeout);
  }, [showForm]);

  return (
    <div className={classNames('kanban-column', { 'form-added': showForm })}>
      <KanbanColumnHeader id={id} title={name} itemCount={items.length} />
      <StrictModeDroppable droppableId={`${id}`} type="KANBAN">
        {provided => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              id={`container-${id}`}
              className="kanban-items-container scrollbar"
            >
              {items.map((task, index) => (
                <TaskCard key={task.id} index={index} task={task} />
              ))}
              {
                <AddAnotherForm
                  onSubmit={handleSubmit}
                  type="card"
                  showForm={showForm}
                  setShowForm={setShowForm}
                />
              }
              {provided.placeholder}
              <div ref={formViewRef}></div>
            </div>
            {!showForm && (
              <div className="kanban-column-footer">
                <IconButton
                  size="sm"
                  variant="link"
                  className="d-block w-100 btn-add-card text-decoration-none text-600"
                  icon="plus"
                  iconClassName="me-2"
                  onClick={() => setShowForm(true)}
                >
                  Add another card
                </IconButton>
              </div>
            )}
          </>
        )}
      </StrictModeDroppable>
    </div>
  );
};

KanbanColumn.propTypes = {
  kanbanColumnItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string,
    items: PropTypes.arrayOf(TaskCard.propTypes.task)
  })
};

export default KanbanColumn;

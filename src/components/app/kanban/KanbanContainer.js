import React, { useContext, useEffect, useRef, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import AddAnotherForm from './AddAnotherForm';
import KanbanModal from './KanbanModal';
import { DragDropContext } from 'react-beautiful-dnd';
import IconButton from 'components/common/IconButton';
import is from 'is_js';
import { KanbanContext } from 'context/Context';

const KanbanContainer = () => {
  const {
    kanbanState: { kanbanItems, kanbanModal },
    kanbanDispatch
  } = useContext(KanbanContext);
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef(null);

  const handleSubmit = listData => {
    const listId = Math.max(...kanbanItems.map(item => item.id)) + 1;
    const newList = {
      id: listId,
      name: listData.title,
      items: []
    };
    const isEmpty = !Object.keys(listData).length;

    if (!isEmpty) {
      kanbanDispatch({
        type: 'ADD_KANBAN_COLUMN',
        payload: newList
      });
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (is.ipad()) {
      containerRef.current.classList.add('ipad');
    }

    if (is.mobile()) {
      containerRef.current.classList.add('mobile');
      if (is.safari()) {
        containerRef.current.classList.add('safari');
      }
      if (is.chrome()) {
        containerRef.current.classList.add('chrome');
      }
    }
  }, []);

  const getColumn = id => {
    return kanbanItems.find(item => item.id === Number(id));
  };

  const reorderArray = (array, fromIndex, toIndex) => {
    const newArr = [...array];

    const chosenItem = newArr.splice(fromIndex, 1)[0];
    newArr.splice(toIndex, 0, chosenItem);

    return newArr;
  };

  const move = (source, destination) => {
    const sourceItemsClone = [...getColumn(source.droppableId).items];
    const destItemsClone = [...getColumn(destination.droppableId).items];

    const [removedItem] = sourceItemsClone.splice(source.index, 1);
    destItemsClone.splice(destination.index, 0, removedItem);

    return {
      updatedDestItems: destItemsClone,
      updatedSourceItems: sourceItemsClone
    };
  };

  const handleDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = getColumn(source.droppableId).items;
      const column = getColumn(source.droppableId);
      const reorderedItems = reorderArray(
        items,
        source.index,
        destination.index
      );

      kanbanDispatch({
        type: 'UPDATE_SINGLE_COLUMN',
        payload: { column, reorderedItems }
      });
    } else {
      const sourceColumn = getColumn(source.droppableId);
      const destColumn = getColumn(destination.droppableId);

      const movedItems = move(source, destination);

      kanbanDispatch({
        type: 'UPDATE_DUAL_COLUMN',
        payload: {
          sourceColumn,
          updatedSourceItems: movedItems.updatedSourceItems,
          destColumn,
          updatedDestItems: movedItems.updatedDestItems
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-container me-n3 scrollbar" ref={containerRef}>
        {kanbanItems.map(kanbanColumnItem => (
          <KanbanColumn
            key={kanbanColumnItem.id}
            kanbanColumnItem={kanbanColumnItem}
          />
        ))}
        <div className="kanban-column">
          <AddAnotherForm
            type="list"
            onSubmit={handleSubmit}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          {!showForm && (
            <IconButton
              variant="secondary"
              className="d-block w-100 border-400 bg-400"
              icon="plus"
              iconClassName="me-1"
              onClick={() => setShowForm(true)}
            >
              Add another list
            </IconButton>
          )}
        </div>
        <KanbanModal show={kanbanModal.show} />
      </div>
    </DragDropContext>
  );
};

export default KanbanContainer;

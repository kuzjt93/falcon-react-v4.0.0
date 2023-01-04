export const kanbanReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'OPEN_KANBAN_MODAL':
      return {
        ...state,
        kanbanModal: {
          ...state.kanbanModal,
          modalContent: {
            ...state.kanbanModal.modalContent,
            image: payload.image
          },
          show: true
        }
      };

    case 'TOGGLE_KANBAN_MODAL':
      return {
        ...state,
        kanbanModal: {
          ...state.kanbanModal,
          show: !state.kanbanModal.show
        }
      };

    case 'ADD_KANBAN_COLUMN':
      return {
        ...state,
        kanbanItems: [...state.kanbanItems, payload]
      };

    case 'ADD_TASK_CARD':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem =>
          kanbanItem.id === payload.targetListId
            ? { ...kanbanItem, items: [...kanbanItem.items, payload.newCard] }
            : kanbanItem
        )
      };

    case 'REMOVE_TASK_CARD':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem => {
          return {
            ...kanbanItem,
            items: kanbanItem.items.filter(item => item.id !== payload.id)
          };
        })
      };

    case 'UPDATE_SINGLE_COLUMN':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem =>
          kanbanItem.id === payload.column.id
            ? {
                ...kanbanItem,
                items: [...payload.reorderedItems]
              }
            : kanbanItem
        )
      };

    case 'UPDATE_DUAL_COLUMN':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem =>
          kanbanItem.id === payload.sourceColumn.id ||
          kanbanItem.id === payload.destColumn.id
            ? {
                ...kanbanItem,
                items:
                  (kanbanItem.id === payload.sourceColumn.id &&
                    payload.updatedSourceItems) ||
                  (kanbanItem.id === payload.destColumn.id &&
                    payload.updatedDestItems)
              }
            : kanbanItem
        )
      };

    case 'REMOVE_KANBAN_COLUMN':
      return {
        ...state,
        kanbanItems: state.kanbanItems.filter(
          kanbanItem => kanbanItem.id !== payload.id
        )
      };

    default:
      return state;
  }
};

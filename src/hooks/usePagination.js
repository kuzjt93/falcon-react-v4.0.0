import { useEffect, useReducer } from 'react';
import { chunk } from 'helpers/utils';

const usePagination = (items, itemsPerPage = 5, currentPage = 1) => {
  const setFrom = (itemsPerPage, pageNo) => itemsPerPage * (pageNo - 1) + 1;
  const setTo = (itemsPerPage, pageNo, pageSize) =>
    itemsPerPage * (pageNo - 1) + pageSize;

  const paginationReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'INIT': {
        const totalPage = Math.ceil(
          payload.items.length / payload.itemsPerPage
        );
        const pageChunk = chunk(payload.items, payload.itemsPerPage);
        const data = pageChunk[payload.currentPage - 1]
          ? pageChunk[payload.currentPage - 1]
          : [];
        return {
          ...state,
          pageChunk,
          data,
          totalPage,
          totalItems: payload.items.length,
          itemsPerPage: payload.itemsPerPage,
          canNextPage: totalPage > payload.currentPage,
          canPreviousPage: payload.currentPage > 1,
          currentPage: payload.currentPage,
          paginationArray: Array.from(Array(totalPage).keys()).map(
            item => item + 1
          ),
          from: setFrom(payload.itemsPerPage, payload.currentPage),
          to: setTo(payload.itemsPerPage, payload.currentPage, data.length)
        };
      }
      case 'NEXT_PAGE': {
        const data = state.pageChunk[state.currentPage]
          ? state.pageChunk[state.currentPage]
          : state.data;
        return {
          ...state,
          data,
          currentPage:
            state.currentPage < state.totalPage
              ? state.currentPage + 1
              : state.currentPage,
          canNextPage: state.totalPage > state.currentPage + 1,
          canPreviousPage: state.totalPage > 1,
          from: setFrom(state.itemsPerPage, state.currentPage + 1),
          to: setTo(state.itemsPerPage, state.currentPage + 1, data.length)
        };
      }
      case 'PREVIOUS_PAGE': {
        const data = state.pageChunk[state.currentPage - 2]
          ? state.pageChunk[state.currentPage - 2]
          : state.data;
        return {
          ...state,
          data,
          currentPage:
            state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
          canNextPage: state.totalPage > 1,
          canPreviousPage: state.currentPage - 1 > 1,
          from: setFrom(state.itemsPerPage, state.currentPage - 1),
          to: setTo(state.itemsPerPage, state.currentPage - 1, data.length)
        };
      }
      case 'GO_TO_PAGE': {
        const data = state.pageChunk[payload.pageNo - 1];
        return {
          ...state,
          data,
          currentPage: payload.pageNo,
          canNextPage: state.totalPage > payload.pageNo,
          canPreviousPage: payload.pageNo > 1,
          from: setFrom(state.itemsPerPage, payload.pageNo),
          to: setTo(state.itemsPerPage, payload.pageNo, data.length)
        };
      }
      default:
        return state;
    }
  };

  const [paginationState, dispatch] = useReducer(paginationReducer, {
    allItems: [],
    data: [],
    pageChunk: [],
    totalPage: 0,
    totalItems: 0,
    itemsPerPage: 0,
    currentPage: 1,
    canNextPage: false,
    canPreviousPage: false,
    from: 0,
    to: 0,
    paginationArray: []
  });

  const goToPage = pageNo => {
    dispatch({
      type: 'GO_TO_PAGE',
      payload: {
        pageNo
      }
    });
  };

  const nextPage = () => {
    dispatch({
      type: 'NEXT_PAGE'
    });
  };

  const prevPage = () => {
    dispatch({
      type: 'PREVIOUS_PAGE'
    });
  };

  const setItemsPerPage = no => {
    dispatch({
      type: 'INIT',
      payload: {
        items,
        itemsPerPage: no,
        currentPage
      }
    });
  };

  useEffect(() => {
    dispatch({
      type: 'INIT',
      payload: {
        items,
        itemsPerPage,
        currentPage
      }
    });
  }, [items]);

  return {
    paginationState,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  };
};

export default usePagination;

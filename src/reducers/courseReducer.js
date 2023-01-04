/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-case-declarations */

export const courseReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SORT_COURSE':
      return {
        ...state,
        courses: [...state.primaryCourses].sort((a, b) => {
          if (payload.order === 'asc') {
            return a[payload.sortBy] - b[payload.sortBy];
          } else {
            return b[payload.sortBy] - a[payload.sortBy];
          }
        })
      };
    case 'SEARCH_COURSE':
      const searchedCourses = [...state.primaryCourses].filter(course =>
        course.name.toUpperCase().includes(payload.searchedText.toUpperCase())
      );
      return {
        ...state,
        courses: searchedCourses
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, payload.course]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          course => course.id !== payload.course.id
        )
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === payload.course.id
            ? { ...course, favorite: course.favorite + 1 }
            : course
        ),
        favouriteItems: [...state.favouriteItems, payload.course]
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === payload.course.id
            ? { ...course, favorite: course.favorite - 1 }
            : course
        ),
        favouriteItems: state.favouriteItems.filter(
          course => course.id !== payload.course.id
        )
      };
    default:
      return state;
  }
};

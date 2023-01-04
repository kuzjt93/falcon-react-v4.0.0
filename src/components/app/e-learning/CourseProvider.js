import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { CourseContext } from 'context/Context';
import { courseData } from 'data/elearning/courseData';
import { courseReducer } from 'reducers/courseReducer';

const CourseProvider = ({ children }) => {
  const initData = {
    initCourses: courseData,
    courses: courseData,
    primaryCourses: courseData,
    cartItems: [{ ...courseData[1] }, { ...courseData[2] }],
    favouriteItems: []
  };
  const [coursesState, coursesDispatch] = useReducer(courseReducer, initData);

  const isInCart = id =>
    !!coursesState.cartItems.find(cartItem => cartItem.id === id);
  const isInFavouriteItems = id =>
    !!coursesState.favouriteItems.find(
      favouriteItem => favouriteItem.id === id
    );

  return (
    <CourseContext.Provider
      value={{
        coursesState,
        coursesDispatch,
        isInCart,
        isInFavouriteItems
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

CourseProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CourseProvider;

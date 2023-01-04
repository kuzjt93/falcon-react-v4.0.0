import { useContext, useState } from 'react';
import { CourseContext } from 'context/Context';

const useCourses = course => {
  const [isAsc, setIsAsc] = useState(true);
  const [sortBy, setSortBy] = useState('price');

  const {
    coursesDispatch: coursesDispatch,
    isInCart,
    isInFavouriteItems
  } = useContext(CourseContext);

  const handleSearch = searchedText => {
    coursesDispatch({
      type: 'SEARCH_COURSE',
      payload: {
        searchedText
      }
    });
  };

  const handleSort = () => {
    coursesDispatch({
      type: 'SORT_COURSE',
      payload: {
        sortBy,
        order: isAsc ? 'asc' : 'desc'
      }
    });
  };

  const handleSortByChange = sortValue => {
    setSortBy(sortValue);
    setIsAsc(true);

    handleSort();
  };

  const handleIsAscClick = isAsc => {
    setIsAsc(isAsc);

    handleSort();
  };

  const handleAddToCart = () => {
    coursesDispatch({
      type: isInCart(course.id) ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      payload: { course }
    });
  };

  const handleFavouriteClick = () => {
    coursesDispatch({
      type: isInFavouriteItems(course.id)
        ? 'REMOVE_FROM_FAVOURITES'
        : 'ADD_TO_FAVOURITES',
      payload: { course }
    });
  };

  return {
    handleAddToCart,
    handleFavouriteClick,
    handleSearch,
    handleIsAscClick,
    handleSortByChange,
    isAsc
  };
};

export default useCourses;

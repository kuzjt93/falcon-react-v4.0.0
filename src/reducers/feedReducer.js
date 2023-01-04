export const feedReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      if (!payload) {
        return state;
      }
      return [payload, ...state];

    case 'UPDATE':
      return state.map(feed => (feed.id === payload.id ? payload.feed : feed));
    default:
      return state;
  }
};

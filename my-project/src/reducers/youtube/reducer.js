const initialState = {
  youtube: [],
};

const youtubeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_YOUTUBE":
      return {
        youtube: payload,
      };
    case "WATCH_LATER":
      const array = state.youtube.splice();
      array.push(payload);
      return {
        youtube: array,
      };
    default:
      return state;
  }
};

export default youtubeReducer;

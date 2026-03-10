const initialState = {
  rooms: [],
  reservations: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROOMS":
      return { ...state, rooms: action.payload };

    case "SET_RESERVATIONS":
      return { ...state, reservations: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
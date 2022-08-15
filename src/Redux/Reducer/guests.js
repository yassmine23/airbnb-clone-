export const INITIAL_STATETWO = {
    guests:[1],
  
  };
  
  export default function guestsReducer(state = INITIAL_STATETWO, action) {
    switch (action.type) {
      case "SET_GUESTS":
        return {
          ...state,
          guests: action.data,
        };
      default:
        return state;
    }
  }
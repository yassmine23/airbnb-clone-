export const INITIAL_STATETWO = {
    // guests:[1,0,0,0,"Wed Aug 17 2022 00:00:00 GMT+0200 (Eastern European Standard Time)","Wed Aug 17 2022 00:00:00 GMT+0200 (Eastern European Standard Time)"],
    guests:{},
    dates:{}

  };
  
  export default function guestsReducer(state = INITIAL_STATETWO, action) {
    switch (action.type) {
      case "SET_GUESTS":
        return {
          ...state,
          guests: action.data,
        };
        case "SET_GUEST":
          return {
            ...state,
            dates: action.data,
          };
      default:
        return state;
    }
  }
export const INITIAL_STATE = {
    lang: "2022-08-28T22:00:00.000Z",
    slang:"2022-07-08T22:00:00.000Z"
  
  };
  
  export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          ...state,
          lang: action.data,
          slang:action.data
        };
      default:
        return state;
    }
  }
  
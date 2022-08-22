export const INITI_SEARCH = {
    search:{},


  };
  
  export default function searchReducer(state = INITI_SEARCH, action) {
    switch (action.type) {
      case "SET_SEARCH":
        return {
          ...state,
          search: action.data,
        };
      
      default:
        return state;
    }
  }
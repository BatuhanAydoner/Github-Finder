const githubFinderReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SEARCH_USER":
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "CLEAR_RESULTS":
      return {
        users: [],
      };
    default:
      return state;
  }
};

export default githubFinderReducer;

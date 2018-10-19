const initialState = {
  githubName: '',
  reposArray: [],
  invalidSearch: false,
};

export default (state = initialState, action) => {
 switch (action.type) {
  case 'UPDATE_GITHUB_NAME':
    return { ...state, githubName: action.payload };
  case 'UPDATE_REPOS_ARRAY':
    return { ...state, reposArray: action.payload };
  case 'UPDATE_INVALID_SEARCH':
    return { ...state, invalidSearch: action.payload };
  default:
    return state;
 }
};

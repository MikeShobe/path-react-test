const initialState = {
  githubName: '',
  reposArray: [],
};

export default (state = initialState, action) => {
 switch (action.type) {
  case 'UPDATE_GITHUB_NAME':
    return { ...state, githubName: action.payload };
    case 'UPDATE_REPOS_ARRAY':
      return { ...state, reposArray: action.payload };
  default:
    return state;
 }
};

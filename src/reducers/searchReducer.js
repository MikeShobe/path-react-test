const initialState = {
  githubName: '',
};

export default (state = initialState, action) => {
 switch (action.type) {
  case 'UPDATE_GITHUB_NAME':
    return { ...state, githubName: action.payload };
  default:
    return state;
 }
};

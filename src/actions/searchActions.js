import axios from 'axios';

// Exported actions
export const updateGithubName = (githubName) => {
  return {
    type: 'UPDATE_GITHUB_NAME',
    payload: githubName,
  };
}
export const updateReposArray = (reposArray) => {
  return {
    type: 'UPDATE_REPOS_ARRAY',
    payload: reposArray,
  };
}
export const updateInvalidSearch = (invalidSearch) => {
  return {
    type: 'UPDATE_INVALID_SEARCH',
    payload: invalidSearch,
  };
}

// Checks promo code and updates discount value if applicable
export const retrieveGithubRepos = (githubName) => {
  return dispatch => {
    axios({
      url: `https://api.github.com/users/${githubName}/repos`,
      method: 'get',
    })
      .then(response => {
        if (response.data.length === 0) {
          dispatch(updateInvalidSearch(true));
        } else {
          dispatch(updateReposArray(response.data));
        }
      })
      .catch(err => {
        console.error('GITHUB REQUEST ERROR:', err);
        dispatch(updateInvalidSearch(true));
      })
  };
};

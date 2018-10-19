import axios from 'axios';

export const updateGithubName = (githubName) => {
  return {
    type: 'UPDATE_GITHUB_NAME',
    payload: githubName,
  };
}
const updateReposArray = (reposArray) => {
  return {
    type: 'UPDATE_REPOS_ARRAY',
    payload: reposArray,
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
        console.log('success', response.data);
        dispatch(updateReposArray(response.data));
      })
      .catch(err => {
        console.error('GITHUB API ERROR:', err);
      })
  };
};

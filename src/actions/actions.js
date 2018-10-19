import axios from 'axios';

export function updateGithubName(githubName) {
  return {
    type: 'UPDATE_GITHUB_NAME',
    payload: githubName,
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
        console.log('success', response);
        // dispatch(updatePromoCodeLoading(false));
      })
      .catch(err => {
        console.error('ERROR', err);
      })
  };
};

export function updateGithubName(githubName) {
  console.log('action', githubName)
  return {
    type: 'UPDATE_GITHUB_NAME',
    payload: githubName,
  };
}

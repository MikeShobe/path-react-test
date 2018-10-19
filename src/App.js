import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Actions
import {
  updateGithubName,
  updateReposArray,
  retrieveGithubRepos,
  updateInvalidSearch
} from './actions/actions';

// Styled Components
import {
  GithubLogo,
  TopTitle,
  NoResultsH3,
  StyledListItem,
  MainGrid
} from './styledComponents';

class App extends Component {
  state = {}

  // Updates github name input
  handleInputChange = (e) => {
    // Removes search error if true
    if (this.props.searchReducer.invalidSearch) {
      this.props.dispatch(updateInvalidSearch(false));
    }
    // Updates search value
    this.props.dispatch(updateGithubName(e.target.value));
  }

  // Submits request to github based on input name
  handleSearch = (e) => {
    e.preventDefault();
    if (this.props.searchReducer.reposArray.length) {
      this.props.dispatch(updateReposArray([]));
    }
    // Makes get request to GitHub API and retrieves repo data if successful
    this.props.dispatch(retrieveGithubRepos(this.props.searchReducer.githubName));
  }

  // Opens repo url in new tab
  handleRepoClick = (repo) => {
    window.open(repo.clone_url, '_blank');
  }

  // Maps through and renders repos when get request is successful
  renderRepoItems = () => {
    const { reposArray, invalidSearch } = this.props.searchReducer;
    if (invalidSearch) {
      return (
        <div>
          <NoResultsH3>
            No results. Please try another GitHub username.
          </NoResultsH3>
        </div>
      )
    }
    if (reposArray.length === 0) {
      return null;
    }

    const repos = reposArray.map(repo => {
      return (
        <StyledListItem button key={repo.id} onClick={() => { this.handleRepoClick(repo)} } title={repo.clone_url}>
          <ListItemText primary={repo.name} secondary={repo.description} />
        </StyledListItem>
      )
    });

    return repos;
  }

  render() {
    return (
      <MainGrid alignItems='center' container direction='column' justify='center'>
        <a href='https://github.com/' rel='noopener noreferrer' target='_blank'>
          <GithubLogo alt='github' src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
        </a>
        <Grid item xs={9} sm={10}>
          <TopTitle>GitHub Repository Search</TopTitle>
        </Grid>
        <Grid item>
          <form noValidate autoComplete='off'>
            <Grid alignItems='center' container direction='row'>
              <Grid item xs={9}>
                <TextField
                  id='github_name'
                  label='GitHub User Name'
                  value={this.props.searchReducer.githubName}
                  onChange={this.handleInputChange}
                  margin='normal'
                />
              </Grid>
              <Grid item xs={3}>
                <Button onClick={this.handleSearch} variant='outlined'>
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={11} sm={12}>
          <List>
            {this.renderRepoItems()}
          </List>
        </Grid>
      </MainGrid>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchReducer: PropTypes.shape({
    githubName: PropTypes.string,
    reposArray: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

const mapStateToProps = state => ({
  searchReducer: state.searchReducer,
});

export default connect(mapStateToProps)(App);

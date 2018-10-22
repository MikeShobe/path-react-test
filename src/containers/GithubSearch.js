import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItemText from '@material-ui/core/ListItemText';

// UI Components
import GithubSearchView from './../components/GithubSearchView';

// Actions
import {
  updateGithubName,
  updateReposArray,
  retrieveGithubRepos,
  updateInvalidSearch
} from './../actions/searchActions';

// Styled Components
import {
  NoResultsH3,
  StyledListItem,
} from './../styledComponents/githubSearch';

class GithubSearch extends Component {
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
          <ListItemText primary={`${repo.name} ${repo.fork ? '(fork)' : ''}`} secondary={repo.description} />
        </StyledListItem>
      )
    });

    return repos;
  }

  render() {
    return (
      <GithubSearchView
        handleInputChange={this.handleInputChange}
        handleSearch={this.handleSearch}
        renderRepoItems={this.renderRepoItems}
        searchReducer={this.props.searchReducer}
      />
    );
  }
}

GithubSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchReducer: PropTypes.shape({
    githubName: PropTypes.string,
    reposArray: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

const mapStateToProps = state => ({
  searchReducer: state.searchReducer,
});

export default connect(mapStateToProps)(GithubSearch);

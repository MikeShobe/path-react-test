import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { updateGithubName, retrieveGithubRepos } from './actions/actions';

class App extends Component {
  state = {}

  // Updates github name input
  handleInputChange = (e) => {
    this.props.dispatch(updateGithubName(e.target.value));
  }

  // Submits request to github based on input name
  handleSearch = (e) => {
    e.preventDefault();
    this.props.dispatch(retrieveGithubRepos(this.props.searchReducer.githubName));
  }

  // Opens repo url in new tab
  handleRepoClick = (repo) => {
    window.open(repo.clone_url, '_blank');
  }

  renderRepoItems = () => {
    const { reposArray } = this.props.searchReducer;
    if (reposArray.length === 0) {
      return null;
    }

    const repos = reposArray.map(repo => {
      return (
        <ListItem button key={repo.id} onClick={() => { this.handleRepoClick(repo)} } style={{ border: '1px solid lightgray', marginBottom: '-1px' }} title={repo.clone_url}>
          <ListItemText primary={repo.name} secondary={repo.description} />
        </ListItem>
      )
    });

    return repos;
  }

  render() {
    return (
      <Grid alignItems='center' container direction='column' justify='center' style={{ paddingTop: '50px' }}>
        <Grid item>
          <header>
            <h1>GitHub Repo Search</h1>
          </header>
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
        <Grid item>
          <List component="nav">
            {this.renderRepoItems()}
          </List>
        </Grid>
      </Grid>
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

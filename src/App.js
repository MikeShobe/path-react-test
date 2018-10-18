import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { updateGithubName } from './actions/actions';

class App extends Component {
  state = {}

  handleChange = (e) => {
    this.props.dispatch(updateGithubName(e.target.value));
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log('SUBMITTED', this.props.searchReducer.githubName);
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
                  onChange={this.handleChange}
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
      </Grid>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchReducer: PropTypes.shape({
    githubName: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  searchReducer: state.searchReducer,
});

export default connect(mapStateToProps)(App);

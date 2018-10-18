import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    githubName: '',
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ githubName: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log('SUBMITTED', this.state.githubName)
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
                  value={this.state.githubName}
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

export default App;

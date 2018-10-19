import React from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';

// Styled Components
import {
  GithubLogo,
  TopTitle,
  MainGrid,
  SearchButton
} from './../styledComponents/githubSearch';

const GithubSearchView = (props) => (
  <MainGrid alignItems='center' container direction='column' justify='center'>
    <a href='https://github.com/' rel='noopener noreferrer' target='_blank'>
      <GithubLogo alt='github' src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
    </a>
    <Grid item xs={9} sm={10}>
      <TopTitle>GitHub Repository Search</TopTitle>
    </Grid>
    <Grid item>
      <form autoComplete='off' noValidate onSubmit={props.handleSearch}>
        <Grid alignItems='center' container direction='row'>
          <Grid item xs={9}>
            <TextField
              id='github_name'
              label='GitHub User Name'
              value={props.searchReducer.githubName}
              onChange={props.handleInputChange}
              margin='normal'
            />
          </Grid>
          <Grid item xs={3}>
            <SearchButton onClick={props.handleSearch} variant='outlined'>
              Search
            </SearchButton>
          </Grid>
        </Grid>
      </form>
    </Grid>
    <br />
    <Grid item xs={11} sm={12}>
      <List>
        {props.renderRepoItems()}
      </List>
    </Grid>
  </MainGrid>
);

export default GithubSearchView;

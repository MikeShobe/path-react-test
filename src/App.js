import React, { Component } from 'react';

import GithubSearch from './containers/GithubSearch';

class App extends Component {
  state = {}

  render() {
    return (
      <GithubSearch {...this.props} />
    );
  }
}

export default App;

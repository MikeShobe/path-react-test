import React, { Component } from 'react';

import GithubSearch from './containers/GithubSearch';

// Primary parent component
class App extends Component {
  state = {}

  render() {
    return (
      <GithubSearch {...this.props} />
    );
  }
}

export default App;

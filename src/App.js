import React, { Component } from 'react';  
import { Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Layout from './hoc/Layout/Layout';
import Work from './containers/Work/Work';

class App extends Component {
  render() {
    return (
        <Layout>
          <Reset />
          <Route path="/" component={Work} />
        </Layout>
    )
  }
}

export default App;
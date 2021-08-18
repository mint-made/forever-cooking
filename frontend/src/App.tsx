import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Headerx from './components/Headerx';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Headerx />
      <main>
        <Container>
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import Main from './components/Main'


function App() {
  return (
    
<Router>
    <div>
      <main>
        <Route exact path='/' component={Login} />
        <Route path="/main" component={Main} /> 
      </main>
    </div>
  </Router>




  );
}

export default App;


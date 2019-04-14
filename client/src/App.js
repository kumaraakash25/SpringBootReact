import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mycss.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome</h2> <br/>
		  
		  <div class="topnav">
			<Link to={'/'} className="nav-link">Home</Link>
			<Link to={'/index'} className="nav-link">View/Edit</Link>
			<Link to={'/create'} className="nav-link">Create Student</Link>
		</div>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
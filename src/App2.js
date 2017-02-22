import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Child = ({ match }) => (
  <div>
    ID: {match.params.id}
  </div>
);

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">zillow-group</Link>
        </li>
        <li>
          <Link to="/yahoo">yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">modus-create</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child} />
    </div>
  </Router>
);

export default ParamsExample;
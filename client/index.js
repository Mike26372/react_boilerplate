import React from 'react';

import { render } from 'react-dom';

// Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';

// import react router deps
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const router = (
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
)

render(router, document.getElementById('root'));

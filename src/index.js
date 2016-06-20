import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream';
// import ReactBootstrap from 'react-bootstrap'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// let button = ReactBootstrap.Button({
//   bsStyle="success",
//   bsSize = "large",
//   children = "track"
// });

ReactDOM.render(
  // button, mountNode,
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

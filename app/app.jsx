var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
//router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css'); //css! is the loader we added
$(document).foundation();

//app css and add the sass loader after.
require('style!css!sass!applicationStyles');

//React Router
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
document.getElementById('app')
);

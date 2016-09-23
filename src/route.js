import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import React, { PropTypes } from 'react'
import App from  './App.js'
import Home from './home.js'
import About from './about.js'
import Work from './work.js'
import Blog from './blog.js'
import Essay from './essay.js'
class Routes extends React.Component {
  render () {
      return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>        //外层路由即父路由需要在render中设置{this.props.children}来访问子路由
                <IndexRoute component={Home}/>      //IndexRoute 与父路由同时显示，
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/blog" component={Blog} />
                <Route path="/essay/:id" component={Essay} />
            </Route>
        </Router>
      )
  }
}

export default Routes ;

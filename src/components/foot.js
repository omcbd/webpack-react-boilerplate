import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class Foot extends React.Component {

  render () {
      return <div className="nav-footer">
          <Link to="/" activeStyle={{color:'#7B1FA2',borderBottom:' 4px solid #7B1FA2'}}onlyActiveOnIndex={true}><span className="top-span glyphicon glyphicon-home"></span><span>Home</span></Link>
          <Link to="/about" activeStyle={{color:'#7B1FA2',borderBottom:' 4px solid #7B1FA2'}}><span className="top-span glyphicon glyphicon-user"></span><span>About</span></Link>
          <Link to="/work" activeStyle={{color:'#7B1FA2',borderBottom:' 4px solid #7B1FA2'}}><span className="top-span glyphicon glyphicon-folder-close"></span><span>Work</span></Link>
          <Link to="/blog" activeStyle={{color:'#7B1FA2',borderBottom:' 4px solid #7B1FA2'}}className="nav-footer-link"><span className="top-span glyphicon glyphicon-list-alt"></span><span>Blog</span></Link>
            </div>
  }
}

export default Foot;

import React from 'react';
import {Link} from 'react-router'
import Head from './components/head.js'
import Foot from './components/foot.js'
import LeftNav from './components/nav-aside.js'
class App extends React.Component {
  constructor(){

    super()
    this.state={
      show:true,
      title:''
    }
  }
 handleClick  = ()  => {
    this.setState({
      show:!this.state.show
    })
  }
  juge(){
   this.setState({
     show:window.innerWidth>760?false:true
   })
 }
  componentWillMount(){

    this.juge()
    window.onresize=this.juge.bind(this)
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  render () {

    return(
      <div className="content-wrap" >

            {this.state.show?<Head />:<LeftNav title={this.state.title} />}
            <div className="content-main">
                  {this.props.children}
            </div>
              {this.state.show?<Foot />:null}
      </div>
    )
  }
}
App.contextTypes={
  router:React.PropTypes.object
}
export default App;

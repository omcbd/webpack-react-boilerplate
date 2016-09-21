import React from 'react';
import {Link} from 'react-router'
import Head from './components/head.js'
import Foot from './components/foot.js'
import LeftNav from './components/nav-aside.js'
class App extends React.Component {
  constructor(){

    super()
    this.state={
      show:true
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
  render () {

    return(
      <div className="content-wrap" >

            {this.state.show?<Head />:<LeftNav />}
            <div className="content-main">
                  {this.props.children}
            </div>
              {this.state.show?<Foot />:null}
      </div>
    )
  }
}

export default App;

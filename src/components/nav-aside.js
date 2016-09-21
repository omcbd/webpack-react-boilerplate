import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class Nav extends React.Component {
  render () {
    let style={
      wrap:{
        height:'100vh',
        backgroundColor:'#00BCD4',
        display:'flex',
        flexDirection:'column',
        width:'300px',
      },
      title:{
        color:'#fff',
        textAlign:'center',
        margin: '0',
        padding: '20px',
        borderBottom: '2px solid #fff59d'
      },
      nav:{
        marginTop:'20px',
        fontSize:'22px',
      }
    }
    return <div style={style.wrap} className="LeftNav">
            <h3 style={style.title}>my corner</h3>
            <p style={style.nav}><Link to="/"activeStyle={{backgroundColor:'rgba(0,0,0,0.2)'}}onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span> Home</Link></p>
            <p style={style.nav}><Link to="/about"activeStyle={{backgroundColor:'rgba(0,0,0,0.2)'}}><span className="glyphicon glyphicon-home"></span> About</Link></p>
            <p style={style.nav}><Link to="/work"activeStyle={{backgroundColor:'rgba(0,0,0,0.2)'}}><span className="glyphicon glyphicon-home"></span> Work</Link></p>
            <p style={style.nav}><Link to="/blog"activeStyle={{backgroundColor:'rgba(0,0,0,0.2)'}}><span className="glyphicon glyphicon-home"></span> Blog</Link></p>
        </div>
  }
}

export default Nav;

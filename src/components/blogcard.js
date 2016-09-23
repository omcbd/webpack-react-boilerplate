import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class BlogCard extends React.Component {
  render () {
    let style={
        wrap:{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          marginTop:'20px',
          borderRadius:'10px',
          border:'1px solid #fff',
          boxShadow:'1px 1px #aaa,-1px -1px #aaa',
        },
        title:{
          backgroundColor:'#42A5F5',
          height:'100px',
          overflow:'hidden',
          borderRadius:' 10px 10px 0 0'
        },
        label:{
          width:'30px',
          display:'block',
          margin:'0 auto',
          borderRadius:'50%',
          border:'2px solid #fff',
          textAlign:'center',
          lineHeight:'60px',
          width:'60px',
          marginTop:'20px',
          fontSize:'18px',
        },
        btn:{
          textAlign:'center',
          display:'block',
          lineHeight:'30px',
          width:'90px',
          color:'#7986CB',
          border:'1px solid pink',
          borderRadius:'20px',
          backgroundColor:'#fff',
          textDecoration:'none',

        }
    }
      return (
          <div className="post" style={style.wrap}>
              <p style={style.title}>
                  <span style={style.label}>{this.props.title}</span>
              </p>
              <div style={{paddingLeft:'20px',borderRadius:'10px'}}>
                  <h3>{this.props.them}</h3>
                  <p>{this.props.content}</p>
                  <p ><Link to={this.props.url} style={style.btn}>阅读更多</Link></p>
              </div>
          </div>
      )
  }
}
BlogCard.defaultProps={
  title:'1',
  them:'XXX',
  content:'嘿嘿嘿',
  url:'#'
}
export default BlogCard;

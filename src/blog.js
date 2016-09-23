import React, { PropTypes } from 'react'
import BlogCard from './components/blogcard.js'
let arr=[
    {title:'1',them:'oooo',content:'aaaa',url:'/essay/a'},
    {title:'2',them:'oooo',content:'aaaa',url:'/essay/b'},
    {title:'3',them:'oooo',content:'bbb',url:'/essay/c'},
]
class Blog extends React.Component {
  render () {
    let style={
        wrap:{
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          margin:'10px',
          padding:'10px'
        }
    }
      return (
          <div style={style.wrap}>
            {arr.map( (item,index) => <BlogCard {...item} key={index} /> ) }
          </div>
      )
  }
}

export default Blog;

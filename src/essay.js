import React, { PropTypes } from 'react'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js';
class Essay extends React.Component {
  constructor(){
    super()
    this.state={
      content:''
    }
  }
  componentDidMount(){
    console.log(this.props.params)
    axios.get(`https://raw.githubusercontent.com/omcbd/data/master/${this.props.params.id}.md`)
    .then( (res) => this.setState({
        content:res.data
    }) )
    marked.setOptions({
     highlight: function (code) {
       return hljs.highlightAuto(code).value;
     }
   })
  }
  render () {
      return (
          <div dangerouslySetInnerHTML={{__html:marked(this.state.content)}}>

          </div>
      )
  }
}

export default Essay;

import React, { PropTypes } from 'react'

class Head extends React.Component {
  handleClick = () => {this.context.router.goBack()}
  render () {
    let style={

    }
      return (
          <div className="nav-header">
              <p onClick={this.handleClick}> <span className="glyphicon glyphicon-chevron-left"></span>BACK</p>
              <p className="nav-title">my corner</p>
              <p className="glyphicon glyphicon-cog"></p>

          </div>
      )
  }
}
Head.contextTypes={
  router:React.PropTypes.object
}
export default Head;

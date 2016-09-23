import React from 'react';

import bg from '../images/home-bg.jpg'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      string:'',
      index:0,
      close:false

    }
  }
  componentDidMount(){
    this.type('我的地盘听我的！')
  }
  type(str){
    let length = str.length;
    this.go=setInterval( () => {

      if(this.state.index<length&&this.state.close==false){
        this.setState({
          string:this.state.string+str.charAt(this.state.index),
          index:this.state.index+1
        })
        document.getElementById('typing').innerHTML=this.state.string
      }else{
        clearInterval(this.go)
      }
    }  ,300)
  }
componentWillUnmount(){
  clearInterval(this.go)
}
  render () {
    let style={
        wrap:{
          display:'flex',
          height:'100%',
          flexDirection:'column',
          justifyContent:'center',
          fontSize:'30px',
          color:'#fff',
          backgroundColor: 'rgba(0,0,0,0.7)'
        },
        jump:{
          backgroundColor:'#00BCD4',
          borderRadius:'5px',
          fontSize:'16px',
          padding:'10px'
        },

    }
    return(
      <div className="home-wrap" >
            <div style={style.wrap}>
              <div style={{textAlign:'center'}}>
                <h3>欢迎访问！</h3>
                <p id="typing"style={style.txt}></p>
                <a href="http://omcbd.github.io" style={style.jump}>更多</a>
              </div>
            </div>

      </div>
    )
  }
}

export default App;

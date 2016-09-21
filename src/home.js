import React from 'react';

import bg from '../images/home-bg.jpg'
class App extends React.Component {
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
        }
    }
    return(
      <div className="home-wrap" >
            <div style={style.wrap}>
              <p style={{textAlign:'center'}}>我的地盘听我的！</p>
            </div>

      </div>
    )
  }
}

export default App;

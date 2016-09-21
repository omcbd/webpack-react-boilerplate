import React from 'react';


class App extends React.Component {
  render () {
    let style={
        home:{
          float:'right',
        }
    }
    return(
      <div>
            <img src="bg"style={style.home}></img>
      </div>
    )
  }
}

export default App;

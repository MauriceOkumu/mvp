import React from 'react';
import {render} from 'react-dom';
import LikesComponent from './LikesComponent.jsx';
import GameComponent from './GameComponent.jsx';



class App extends React.Component {
  render () {
    return (
        <div>
        <h4> Tell us if it was awesome!</h4>
         < GameComponent />
         < LikesComponent />
      </div>
    )
  }
}

render(<App /> , document.getElementById('app'));
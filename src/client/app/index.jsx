import React from 'react';
import {render} from 'react-dom';
import LikesComponent from './LikesComponent.jsx';
import GameComponent from './GameComponent.jsx';
import RandomQuotes from './RandomQuotesComponent.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes:['amazing stuff from props','react is the best framework']
    }
  }
  render () {
    return (
        <div>
        <h4> Tell us if it was awesome!</h4>
         < GameComponent />
         < LikesComponent />
         < RandomQuotes  quotes={this.state.quotes}/>
      </div>
    )
  }
}

render(<App /> , document.getElementById('app'));
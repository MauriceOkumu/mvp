import React from 'react';
import {render} from 'react-dom';
import LikesComponent from './LikesComponent.jsx';
import GameComponent from './GameComponent.jsx';
import RandomQuotes from './RandomQuotesComponent.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes:['Hello cohort','watch the space as...','there will be random quotes here soon!!']
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
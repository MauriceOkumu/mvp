import React from 'react';

class LikesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
       <div><button type="button" className="btn btn-primary" onClick={this.onLike}><span>Like the game</span>
       <span className ="glyphicon glyphicon-thumbs-up" />
       </button><span>likes so far....:</span><span>{this.state.likesCount}</span></div>
       
      </div>
    );
  }

}

export default LikesComponent;
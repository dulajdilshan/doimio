import React, { Component } from 'react';
import './App.css';


const Card = (props) => {
  return(
    <div style={{padding:10}}>
      <img width="75" src={props.avatar_url} alt=""/>
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize:'1.25em',fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}


const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
}


class Form extends React.Component{

  state = {userName:''}

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event: Form Submit', this.value);
  }
  render(){
    return(
      <form accept-charset="UTF-8" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
          value={this.state.userName}
          onChange={(e) => {
            this.setState({userName:e.target.value});
            console.log(this.state.userName);
            }}
          className="form-control" placeholder="Enter GitHub username" type="text" required/>
        </div>
          <input className="btn btn-lg btn-success btn-block" type="submit" value="Add Card" />
      </form>
    );
  }
}

let data = [
  {
    avatar_url : "https://avatars0.githubusercontent.com/u/25485997?v=4",
    name : "Dulaj Dilshan",
    company : "Sysco LABS"
  },
  {
    avatar_url : "https://avatars3.githubusercontent.com/u/25484917?v=4",
    name : "Dasun Pubudumal",
    company : "Direct FN"
  },
  {
    avatar_url : "https://avatars0.githubusercontent.com/u/23340269?v=4",
    name : "Anju Cheran",
    company : "Arimac Lanka"
  }
];

class App extends Component {

  state = {
    cards: data
  }

  render() {
    return (
      <div className="row vertical-offset-100">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Find GitHub Card</h3>
            </div>
            <div className="panel-body">
              <Form />
              <CardList cards={this.state.cards}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

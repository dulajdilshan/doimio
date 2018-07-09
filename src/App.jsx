import React, { Component } from 'react';
import axios from 'axios';
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
      {props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  );
}


class Form extends React.Component{

  state = {userName:''}

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props._onSubmit(resp.data);
        this.setState({userName:''});
      });
  }
  render(){
    return(
      <form acceptCharset="UTF-8" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
          value={this.state.userName}
          onChange={(e) => {
              this.setState({userName:e.target.value});
            }}
          className="form-control" placeholder="Enter GitHub username" type="text" required/>
        </div>
          <input className="btn btn-lg btn-success btn-block" type="submit" value="Add Card" />
      </form>
    );
  }
}


class App extends Component {

  state = {
    cards: []
  }

  addDataToState = (cardInfo) => {
    // const newData = {avatar_url:cardInfo.avatar_url, name:cardInfo.name, company:cardInfo.company};
    const newCards = this.state.cards;
    newCards.push(cardInfo);
    this.setState({cards:newCards});
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
              <Form _onSubmit={this.addDataToState}/>
              <CardList cards={this.state.cards}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

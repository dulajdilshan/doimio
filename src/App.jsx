import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row vertical-offset-100">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Find </h3>
            </div>
            <div className="panel-body">
              <form accept-charset="UTF-8" role="form">
                <div className="form-group">
                  <input className="form-control" placeholder="Enter GitHub username" name="email" type="text" />
                </div>
                  <input className="btn btn-lg btn-success btn-block" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component{
  render(){
    return(
      <div className="col-md-4">
        <form>
          <input type="text" className="form-control" placeholder="Enter Github username" />
        </form>
      </div>
    );
  }
} 

export default App;

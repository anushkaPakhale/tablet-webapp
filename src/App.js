import React, { Component } from 'react';
import './App.css';
import Login from './Login';
//import IgnoreGroundController from './IgnoreGroundController';
//import IgnoreRunwayController from './IgnoreRunwayController';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
        //grdPage:[],
        //runwayPage:[]


    }
  }
  componentWillMount(){
    var login =[];
    //var grd =[];
    //var rnw =[];
    login.push(<Login parentContext={this}/>);
    //rnw.push(<IgnoreRunwayController parentContext={this}/>);
    //grd.push(<IgnoreGroundController parentContext={this}/>);
    this.setState({
        loginPage:login,
        //grdPage:grd,
        //rnwPage:rnw
  })}
  render(){
    return (
      <div className="App">

        {this.state.loginPage}

      </div>
    );
  }
  //{this.state.grdPage}
  //{this.state.rnwPage}
};

export default App;

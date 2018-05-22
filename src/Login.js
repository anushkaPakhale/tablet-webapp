import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
//import IgnoreGroundController from './IgnoreGroundController';
//import { withRouter } from 'react-router-dom';
//import { Link } from "react-router";
//import history from "history/createBrowserHistory";

    //browserHistory.push(IgnoreGroundController);
    //console.log("works!")
    //return Button

function handleClickRW(){
    //browserHistory.push(IgnoreGroundController);
    console.log("works runway!")
}

// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// ));

class Login extends Component {
    render() {

        //function handleClickGrd() {
            //withRouter(({ history }) => (
            //history.push('/IgnoreGroundController')))
        //}

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title={'Choose Your Role'}
                            titleStyle={styles.title}
                            showMenuIconButton={false}
                        />

                        <RaisedButton label="Ground Controller" primary={true} style={styles.raisedButton}

                                      //onClick={handleClickGrd.bind(this)}/>
                            //onClick={<Link to={"/IgnoreGroundController"}} />
                        />

                        <br/>
                        <RaisedButton label="Runway Controller" primary={true} style={styles.raisedButton2}
                                      onClick={() => handleClickRW()}/>
                        <br/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }



}






const styles = {
    raisedButton: {
     position: 'absolute',
     left: '45%',
     top: '40%'

 },
    raisedButton2: {
     position: 'absolute',
     left: '45%',
     top: '55%'
 },
    title: {
     position: 'absolute',
     left: '45%'
    }
};
export default Login;


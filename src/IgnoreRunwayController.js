import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
//import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
//, lightBlack, deepOrange500
import RaisedButton from 'material-ui/RaisedButton';
//import rsz_phone from "./rsz_phone.png";
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
//import FlatButton from 'material-ui/FlatButton';

//import Close from 'material-ui/svg-icons/navigation/close'
//import CommunicationCall from 'material-ui/svg-icons/communication/call'
//import Message from 'material-ui/svg-icons/communication/message'
//import Github from './Github'

//import ReactMaterialUiNotifications from './ReactMaterialUiNotifications'
//import moment from '/Users/anushka/Documents/Capstone/tablet-webapp/node_modules/moment'



class IgnoreRunwayController extends Component{

    constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };

  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

    handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

    render() {
        return <div>
            <MuiThemeProvider>
                <div>

                    <AppBar
                        title={'Runway Controller Page'}
                        //titleStyle={styles.title}
                        //showMenuIconButton = {false}
                    />


                    <Card style={styles.flightSchedule} expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
                 <CardHeader title="FLIGHT SCHEDULE" />
              <CardActions>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Maximise"
          />
        </CardActions>
              <CardText expandable={true}>
              <Divider />
              <TextField hintText="Departure" underlineShow={false}  />
    <Divider />
        <List style={{background: '#0180EA', overflow: 'scroll', height: '200px'}}>
      <ListItem insetChildren={true} primaryText="SQ313" secondaryText={"1440hrs"}/>
      <ListItem insetChildren={true} primaryText="JW9" secondaryText={"1452hrs"}/>
            <ListItem insetChildren={true} primaryText="SQ312" secondaryText={"1505hrs"}/>
            <ListItem insetChildren={true} primaryText="HR85" secondaryText={"1510hrs"}/>
            <ListItem insetChildren={true} primaryText="ST007" secondaryText={"1514hrs"}/>
    </List>
    <Divider />
    <TextField hintText="Arrival"  underlineShow={false} />
    <Divider />
              <List style={{background: '#DA7E00', overflow: 'scroll', height: '200px'}}>
      <ListItem insetChildren={true} primaryText="TW391" secondaryText={"1443hrs"}/>
      <ListItem insetChildren={true} primaryText="AI422" secondaryText={"1448hrs"}/>
                  <ListItem insetChildren={true} primaryText="KR411" secondaryText={"1457hrs"}/>
                  <ListItem insetChildren={true} primaryText="QT81" secondaryText={"1501hrs"}/>
                  <ListItem insetChildren={true} primaryText="SQ212" secondaryText={"1518hrs"}/>
    </List>
    <Divider />
                  </CardText>
          </Card>

                    <Card style={styles.requestBar}>
                        <CardText style = {styles.alertCard1} >
                            <ListItem
                                primaryText="JW9"
                                secondaryText={
                                    <p>
                                        <Divider/>
                                        A270
                                        <Divider/>
                                        Gr16
                                        <Divider/>
                                        Freq: 33.6
                                        <Divider/>
                                    </p>
                                }
                                secondaryTextLines={5}
                            />
                        </CardText>
                        <CardText style = {styles.alertCard2}>
                            <ListItem
                                primaryText="Pilot Call"
                                secondaryText={
                                    <p>
                                        SQ312 requesting for push back
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                        </CardText>
                        <CardText style = {styles.alertCard3}>
                            <ListItem
                                primaryText="Suggested Instruction"
                                secondaryText={
                                    <p>
                                        Approve push back
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                        </CardText>
                    </Card>

                    <RaisedButton label="Talk to Pilot" style={styles.adjustButton}
                                  backgroundColor="#edec01"/>
                    <RaisedButton label="Send Suggested" style={styles.approveButton} backgroundColor="#a4c639"/>

                    <Card style={styles.rwyL } >
                        <List >
                            <Subheader>Rwy 02L</Subheader>
                            <ListItem style={{background: '#0180EA'}}

                                primaryText="SQ313"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>A380</span> --
                                        1440hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#DA7E00'}}

                                primaryText="AI422"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>B212</span> --
                                        1448hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#0180EA'}}

                                primaryText="JW9"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>A270</span> --
                                        1452hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#DA7E00'}}

                                primaryText="QT81"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>A350-1000</span> --
                                        1501hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#0180EA'}}

                                primaryText="ST007"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>B737</span> --
                                        1514hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                        </List>
                    </Card>

                    <Card style={styles.rwyR} >
                        <List>
                            <Subheader>Rwy 02R</Subheader>
                            <ListItem style={{background: '#DA7E00'}}

                                primaryText="TW391"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>A370</span> --
                                        1443hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#DA7E00'}}

                                primaryText="KR411"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>B424</span> --
                                        1457hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#0180EA'}}

                                primaryText="SQ312"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>B120</span> --
                                        1505hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#0180EA'}}

                                primaryText="HR85"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>A20</span> --
                                        1510hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true}/>
                            <ListItem style={{background: '#DA7E00'}}

                                primaryText="SQ212"
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>B477</span> --
                                        1518hrs
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                        </List>
                    </Card>
                </div>
            </MuiThemeProvider>
        </div>;
  }


}

const styles = {

    alertCard1:{
        position: 'absolute',
        width: '180px',
        left: '2%'
    },

    alertCard2:{
        position: 'absolute',
        width: '180px',
        left: '30%'
    },

    alertCard3:{
        position: 'absolute',
        width: '200px',
        left: '60%'
    },

    rwyL:{
        width: '288px',
        position: 'absolute',
        right: '50%'

    },

    rwyR:{
        width: '288px',
        position: 'absolute',
        right: '27%'

    },

    requestBar: {
        position: 'absolute',
        bottom: '5%',
        right: '27%',
        width: '620px',
        height: '133px',
    },

    adjustButton: {
        position: 'absolute',
        top: '786px',
        right: '49%',
        width: '300px',


    },
    approveButton: {
        position: 'absolute',
        top: '786px',
        right: '27%',
        width: '300px',

    },
    flightSchedule: {
        position: 'absolute',
      right: '0%'
    },


}

export default IgnoreRunwayController;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import grd from './ground.jpeg';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';



class IgnoreGroundController extends Component{

    constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

    handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

    render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>

          <AppBar
             title={'Ground Controller Page'}
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

              <RaisedButton label="Activate Voice Control" primary={true} style={styles.voiceControl} />

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
                                secondaryTextLines={3}
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

          <img src={grd} style={styles.backgroundImage} alt=""/>



         </div>
         </MuiThemeProvider>
      </div>
    );
  }


}

const styles = {
    backgroundImage: {
        top: '500px',
        height: '50%',
        width: '100%'
  },
  flightSchedule: {
        position: 'absolute',
      right: '0%'
    },
  voiceControl: {
        width: '288px',
      position: 'absolute',
      right: '3%',
      top: '786px'
  },

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
    requestBar: {
        position: 'absolute',
        bottom: '5%',
        right: '27%',
        width: '620px',
        height: '120px',
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

    }


}

export default IgnoreGroundController;


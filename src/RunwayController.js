import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardText} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import rwy from './runway.png';

class RunwayController extends Component{

    render() {
        return <div>
            <MuiThemeProvider>
                <div>

                    <AppBar
                        title={'Runway Controller Page'}
                    />

                    <div style={styles.sq313}>
                        SQ313
                        B787
                    </div>
                    <div style={styles.mi422}>
                        MI422
                        A320
                    </div>
                    <div style={styles.qz271}>
                        QZ271
                        A380
                    </div>
                    <div style={styles.tr752}>
                        TR752
                        B737
                    </div>
                    <div style={styles.cx112}>
                        CX112
                        A380
                    </div>
                    <div style={styles.ba171}>
                        BA171
                        B777
                    </div>
                    <div style={styles.mi913}>
                        MI913
                        A320
                    </div>
                    <div style={styles.jw9}>
                        JW9
                        B747
                    </div>
                    <div style={styles.sq391}>
                        SQ391
                        A330
                    </div>
                    <div style={styles.tr514}>
                        TR514
                        B787
                    </div>


                    <Card style={styles.requestBar}>
                        <CardText style = {styles.alertCard1} >
                            <ListItem
                                primaryText="JW9"
                                secondaryText={
                                    <p>
                                        <Divider/>
                                        B747
                                        <Divider/>
                                        Ground Speed: 16kn
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
                                        JW9 requesting for push back
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
                    <RaisedButton label="Approve Suggested Instruction" style={styles.approveButton} backgroundColor="#a4c639"/>


                    <img src={rwy} style={styles.backgroundImage} alt=""/>
                </div>
            </MuiThemeProvider>
        </div>;
  }


}

const styles = {

    backgroundImage: {
        top: '500px',
        height: '50%',
        width: '100%'
  },
    sq313:{
        background: '#0180EA',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '133px',
        left: '310px'
    },
    mi422:{
        background: '#DA7E00',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '133px',
        left: '535px'
    },
    qz271:{
        background: '#0180EA',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '133px',
        left: '665px'
    },
    tr752:{
        background: '#0180EA',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '133px',
        left: '890px'
    },
    cx112:{
        background: '#DA7E00',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '133px',
        left: '1245px'
    },


    ba171:{
        background: '#DA7E00',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '542px',
        left: '350px'
    },
    mi913:{
        background: '#DA7E00',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '542px',
        left: '500px'
    },
    jw9:{
        background: '#0180EA',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '542px',
        left: '763px'
    },
    sq391:{
        background: '#DA7E00',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '542px',
        left: '1014px'
    },
    tr514:{
        background: '#0180EA',
        height: '50px',
        width:'50px',
        position: 'absolute',
        top: '542px',
        left: '1155px'
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

export default RunwayController;

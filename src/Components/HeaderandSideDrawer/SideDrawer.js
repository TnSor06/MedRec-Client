import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, lightGreen } from '@material-ui/core/colors';
import { CircularProgress } from '@material-ui/core';

import { connect } from 'react-redux'
import { meNav } from "../../Store/Action/meAction"
import { logOut } from '../../Store/Action/authAction'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: lightGreen[500],
  },
});

function SideDrawer(props) {
  const classes = useStyles();
  if (props.authDetails !== null) {
    if (props.meNavDetails === null) {
      props.meNav(props.authDetails.login)
    }
  }
  const profile = () => {
    if (props.authDetails.login.user.role === "Patient") {
      const data = props.meNavDetails.mePatient
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar className={classes.orangeAvatar}>{data.user.firstName[0]}{data.user.lastName[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${data.user.firstName} ${data.user.lastName}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  style={{
                    display: 'block'
                  }}
                >
                  {data.patientId}
                </Typography>
                {"Patient"}
              </React.Fragment>
            }
          />
        </ListItem>)
    } else if (props.authDetails.login.user.role === "MedicalPractitioner") {
      const data = props.meNavDetails.meMedicalPractitioner
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar className={classes.purpleAvatar}>{data.user.firstName[0]}{data.user.lastName[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${data.user.firstName} ${data.user.lastName}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  style={{
                    display: 'block'
                  }}
                >
                  {data.mpId}
                </Typography>
                {"Medical Practitioner"}
              </React.Fragment>
            }
          />
        </ListItem>)
    } else if (props.authDetails.login.user.role === "DatabaseAdmin") {
      const data = props.meNavDetails.meDatabaseAdmin
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar className={classes.greenAvatar}>{data.user.firstName[0]}{data.user.lastName[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${data.user.firstName} ${data.user.lastName}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {"DataBase Admin"}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>)
    }
  }
  const logOutHandler = () => {
    props.logOut()
    return (<Redirect to='/'></Redirect>)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        {props.authDetails && props.meNavDetails ? profile() : <CircularProgress></CircularProgress>}
        <Divider variant="inset" component="li" />
        <ListItem button key="Logout">
          <ListItemText primary="Logout" onClick={logOutHandler} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={props.drawerOpen} onClose={props.toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authDetails: state.auth.authDetails,
    authError: state.auth.authError,
    meNavDetails: state.meNav.meNavDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    meNav: data => {
      dispatch(meNav(data))
    },
    logOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Pinpad from './inviertete/Pinpad';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });
  
  class SimpleModal extends React.Component {
    state = {
      open: false,
      password: '',
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
    


    render() {
      const { classes } = this.props;
  
      return (
        <div>
          {//<Typography gutterBottom>Click to get the full Modal experience!</Typography>
          }
          <InputLabel htmlFor="password">Pin</InputLabel>
          <Input onClick={this.handleOpen} name="password" type="password" id="password" autoComplete="current-password" style={{minWidth: 270}} value={this.props.password}>Open Modal</Input>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            align="center"
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="h6" id="modal-title" align="center">
                Por favor, digita tu pin:
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                El numero maximo de digitos permitidos es de seis:
              </Typography>
              <Pinpad handlePassword={this.props.getPassword} password={this.props.password}>
              </Pinpad>
              <div className="row justify-content-md-center">
              <Button variant="outlined" color="primary" onClick={() => this.handleClose()}>Aceptar</Button>
              </div>
            </div>
          </Modal>
        </div>
      );
    }
  }
  
  SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  // We need an intermediary variable for handling the recursive nesting.
  const SimpleModalWrapped = withStyles(styles)(SimpleModal);
  
  export default SimpleModalWrapped;

  //https://stackoverflow.com/questions/54722160/react-pinpad-with-input-buttons#comment96238509_54725156
  //https://stackoverflow.com/questions/54722160/react-pinpad-with-input-buttons
  
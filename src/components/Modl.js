import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Pinpad from './inviertete/Pinpad';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    password: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <InputLabel htmlFor="password">Pin</InputLabel>
          <Input onClick={this.handleClickOpen} name="password" type="password" id="password" autoComplete="current-password" style={{minWidth: 270}} value={this.props.password}>Open Modal</Input>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Por favor, digita tu pin:</DialogTitle>
          <DialogContent>
            <DialogContentText>
            El numero maximo de digitos permitidos es de seis:
            <br/>
            <br/>
            </DialogContentText>
            <Pinpad handlePassword={this.props.getPassword} password={this.props.password}>
              </Pinpad>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
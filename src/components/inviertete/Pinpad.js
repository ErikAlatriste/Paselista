import React from 'react';
import Screen from './Screen';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Pinpad extends React.Component {
    //extend component class
    constructor(props) {
      super(props);
  
      this.state = {
        screen: [],
        sucess: 'SUCESS',
        error: 'ERRO',
        tries: 5, 
      }
    }
  
    //I tried using an input on the screen component
    //but this worked
    //not sure if "the react way"
    addPassword = e => {
      console.log(e.target.value)
       return this.state.screen.length > 5 ? '' : this.setState({screen: this.state.screen + e});
    }
  
    /*
    pin = '1234';
    validadePassword = (addPassword, pin) => {
      //return addPassword === pin ? this.state.screen.type === 'password' : this.state.screen.type === 'number';
      console.log(pin);
    }*/

    render() {
      return (
        <div className="Pinpad">
          <div className="container" align="center">
            <Screen
            
              screen={this.props.password}
              length = {6}>
            </Screen>
            <Typography>
            <div className="row justify-content-md-center">
              <Button variant="outlined" color="primary"><Button value={7} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>7</Button></Button>
              <Button variant="outlined" color="primary"><Button value={8} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>8</Button></Button>
              <Button variant="outlined" color="primary"><Button value={9} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>9</Button></Button>
            </div>
            <div className="row justify-content-md-center"> 
            <Button variant="outlined" color="primary"><Button value={4} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>4</Button></Button>
              <Button variant="outlined" color="primary"><Button value={5} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>5</Button></Button>
              <Button variant="outlined" color="primary"><Button value={6} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>6</Button></Button>
            </div>
            <div className="row justify-content-md-center">
            <Button variant="outlined" color="primary"><Button value={1} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>1</Button></Button>
              <Button variant="outlined" color="primary"><Button value={2} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>2</Button></Button>
              <Button variant="outlined" color="primary"><Button value={3} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>3</Button></Button>
            </div>
            <div className="row justify-content-md-center">
            <Button variant="outlined" color="primary"><Button value={0} onClick={(e)=>this.props.handlePassword(e.currentTarget.value)}>0</Button></Button>
            </div>
            </Typography>
            <p></p>
            <p></p>
            {/*<Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>8</Buton></Button>
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>9</Buton></Button>
            </div>
            <div className="row justify-content-md-center">
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>4</Buton></Button>
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>5</Buton></Button>
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>6</Buton></Button>
            </div>
            <div className="row justify-content-md-center">
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>1</Buton></Button>
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>2</Buton></Button>
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword}>3</Buton></Button>
            </div>
            <div className="row justify-content-md-center">
            <Button variant="outlined" color="primary"><Buton onClick={this.addPassword} class="col align-self-center">0</Buton></Button>
              </div>
              <div>
                */}
            </div>
          </div>
      );
    }
  }
  
  export default Pinpad;
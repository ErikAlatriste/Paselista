import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NativeSelects from './NativeSelects';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import NumPad from 'react-numpad-material';
import FormDialog from '../Modl';
import history from '../../history';

const styles = {
  card: {
    width: 315,
    height:250,
    margin: '50px 100px 50px 780px',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },

  button: {
    fontWeight: 'bold',
    margin: '0 0 0 80%',
  },

  pad: {
    width: 270,
  }
};

class SimpleCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      grupo: '', 
      password: '',
      submit: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  getSelect = (grupo) => {
    this.setState( { grupo: grupo})
  }
  getPassword = (code) => {
    this.setState({ password: this.state.password+code}) 
  };

  handleSubmit(e){
    console.log(this.state.grupo, this.state.password);
    console.log(this.props);
    if(this.state.grupo === 9 && this.state.password === '123456') {
    this.props.history.push('/desarrollo-web-avanzado')
  }
    e.preventDefault();
  }

  render() {
  const { classes } = this.props;
  return (
    <form variant="outlined" onSubmit={this.handleSubmit} >
    
    <Card className={classes.card} align="center">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Bienvenido a Inviértete
        </Typography>
            
          <NativeSelects handleChange={this.getSelect} grupo={this.state.grupo} ></NativeSelects>
    
        <Typography className={classes.pos}> 
          </Typography>

          <FormControl>
          <FormDialog getPassword={this.getPassword} password={this.state.password}></FormDialog>
          </FormControl> 
          
      </CardContent>
      <CardActions>
        <div>
        <Button type='submit' className={classes.button} variant="contained" color="primary" size="large" align="center" >Entrar</Button>
        
        </div>
      </CardActions>
    </Card>
    </form>
    
  );
  }

}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);


//<NumPad.Number className={classes.pad}
//onChange={value => {
//    console.log('value', value);
//}}
//
//position={"flex-end"}
//arrow="left"
//qtyIncrement={1}
//decimal={false}
//max={1000000000}
//min={0}
//value={' '}
//placeholder={'Pin'}
//htmlFor="password"
//name="password" 
//type="password" 
//id="password" 
//autoComplete="current-password" 
//>   
//</NumPad.Number>


//<InputLabel htmlFor="password">Pin</InputLabel>
//             <Input name="password" type="number" id="password" autoComplete="current-password" style={{minWidth: 270}} > 
//             </Input> 
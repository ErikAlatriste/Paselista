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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
  card: {
    width: 300,
    height:250,
    margin: '50px 100px 50px 800px',
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
    margin: '0 0 0 30%',
  },
};

function SimpleCard(props) {
  const { classes } = props;
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Bienvenido a Inviértete
        </Typography>
            
          <NativeSelects></NativeSelects>

        <Typography className={classes.pos}>
        </Typography>
        <FormControl variant="outlined" >
            <InputLabel htmlFor="password">Pin</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" style={{minWidth: 270}} />
          </FormControl>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" color="primary" size="large" >Entrar</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 270,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Selecciona un grupo
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={
              <OutlinedInput
                name="age"
                labelWidth={this.state.labelWidth}
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="" />
            <MenuItem value={1}>Fundamentos de Programacion</MenuItem>
            <MenuItem value={2}>Programacion Aplicada</MenuItem>
            <MenuItem value={3}>Taller de Desarrollo de Aplicaciones</MenuItem>
            <MenuItem value={4}>Seminario de Tecnologia</MenuItem>
            <MenuItem value={5}>Ingenieria de Circuitos</MenuItem>
            <MenuItem value={6}>Sistemas de Bases de Datos</MenuItem>
            <MenuItem value={7}>Programacion Orientada a Objetos</MenuItem>
            <MenuItem value={8}>Arquitectura de Software</MenuItem>
            <MenuItem value={9}>Desarrollo Web Avanzado</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
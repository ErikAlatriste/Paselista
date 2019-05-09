import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker} from 'material-ui-pickers';

const styles = {
  grid: {
    width: '60%',
  },
};

class TimePickers extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleSubmit(event){
    console.log(this.state.selectedDate)
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">

          <TimePicker
            margin="normal"
            label="Hora de llegada:"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      </form>
    );
  }
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);
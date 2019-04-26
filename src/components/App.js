import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './inviertete/Login';
import DessarrolloWebAvanzado from './inviertete/DessarrolloWebAvanzado';
import Header from './Header';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import history from '../history';
import BottomAppBar from './BottomAppBar';


const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: {
        main: '#212121',
      },  
      error: red,
    },
  });
  

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <MuiThemeProvider theme={theme}>
                <div>
                    <Header />
                    <Route path="/" exact component={Login} />
                    <Route path="/desarrollo-web-avanzado" exact component={DessarrolloWebAvanzado} />
                    <BottomAppBar />
                </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
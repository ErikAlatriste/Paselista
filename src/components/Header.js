import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import invi_blanco from './invi_blanco.png';
//import { IconButton } from 'material-ui';


const Header = () => {
    return(
        <div>
            <AppBar position="sticky" color="primary" style={{top: 'auto', backgroundColor: 'black'}} >
                <Toolbar>
                    <img src={invi_blanco} style={{width:80, height:80 }} alt="Logo Inviertete" />
                    <Typography variant="title" color="primary"> 
                       
                    </Typography>
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
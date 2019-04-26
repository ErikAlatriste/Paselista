import React from 'react';
import Fecha from './Fecha';
import CustomizedTable from './Tabla';
import DatePickers from './DatePicker';
import Typography from '@material-ui/core/Typography';

class DessarrolloWebAvanzado extends React.Component{
    render() {
        return (
            
            <div>
                <Typography gutterBottom>
                    <div align="center"><h1>Desarrollo Web Avanzado</h1></div>
                </Typography>
                <Typography>
                    <h3 align="center"><Fecha /></h3>
                </Typography>
                <h3><DatePickers align="center" ></DatePickers></h3>
                <CustomizedTable></CustomizedTable>
            </div>
        );
    }
}
export default DessarrolloWebAvanzado;
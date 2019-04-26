import React from 'react';
import inviertete from './inviertete.png';
import SimpleCard from './SimpleCard';

class Login extends React.Component{
    render() {
        return (
            <div>
            <div className="inviertete">
            <img src={inviertete} style={{ width: 610, height: 100, margin: '50px 500px 50px 610px'}} />
            </div>
            <SimpleCard>

            </SimpleCard>
            </div>
        );
    }
}

export default Login;

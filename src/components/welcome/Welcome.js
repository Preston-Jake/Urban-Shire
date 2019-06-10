import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Register from './register'
import LogIn from './login';



class Welcome extends Component {



    render() {
        return (
            <>
                <header>
                    <p>Weclome to</p>
                    <h1>UrbanShire</h1>
                </header>
                <LogIn {...this.props} />
                <div>
                    <p>or</p>
                    <Button color="primary" size="lg" block onClick={this.props.toggle}>Create an Account</Button>
                </div>
                <Register {...this.props} />
            </>
        )
    }
}

export default Welcome
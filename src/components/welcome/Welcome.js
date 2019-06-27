import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Register from './register'
import LogIn from './login';
import '../../main.css'


class Welcome extends Component {



    render() {
        return (
            <div id="wrapper_welcome" >
                <header>
                    {/* <p id="content_welcome">Weclome to</p> */}
                    <h1 id="title">UrbanShire</h1>
                </header>
                <div id="container_account">
                    <LogIn {...this.props} />
                    <p id="mission_statement">Our mission at UrbanShire is to offer Nashvillians a soluton in reducing their carbon foot-print through innovation, imagination, and ingenuity.</p>
                    <Button id="btn_register" color="primary" size="lg" block onClick={this.props.toggle}>Create an Account</Button>
                    <Register id="item_register" {...this.props} />
                </div>
            </div>
        )
    }
}

export default Welcome
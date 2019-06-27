import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { logout } from '../auth/userManager';
import '../../main.css'

//add Title
class Navi extends Component {
    render() {
        if (this.props.history.location.pathname === "/") {
            return null
        } else {
            return (
                <nav id="main_nav">
                    <Nav>
                        <h1 id="nav_title">UrbanShire</h1>
                        <NavItem>
                            <NavLink href="/carbonprofile">CO<sub>2</sub> Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => { logout(); this.props.history.push("/"); }}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </nav>
            );
        }
    }
}
export default withRouter(Navi)
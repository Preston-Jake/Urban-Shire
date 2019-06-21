import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { logout } from '../auth/userManager';

class Navi extends Component {
    render() {
        if (this.props.history.location.pathname === "/") {
            return null
        } else {
            return (
                <div>
                    <Nav>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => { logout(); this.props.history.push("/") }}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            );
        }
    }
}
export default withRouter(Navi)
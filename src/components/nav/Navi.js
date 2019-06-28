import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/userManager';
import '../../main.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

//add Title
class Navi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        if (this.props.history.location.pathname === "/") {
            return null
        } else {
            return (
                <nav id="main_nav">
                    <Navbar color="goldenRod" light expand="md">
                        <NavbarBrand id="nav_title" href="/">UrbanShire</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/emissions">Emissions</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/carbonprofile">C0<sub>2</sub> Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" onClick={() => { logout(); this.props.history.push("/"); }}>Logout</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </nav>
            );
        }
    }
}
export default withRouter(Navi)


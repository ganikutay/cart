import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";



const Navi = (props/* ,{ isOpen, toggle, cart } */) => {

    const { isOpen, toggle, cart, removeFromCart } = props;




    const Example = (props) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
    }



    return (

        <div >
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Northwind App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/form1">Form 1</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/form2">Form 2</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <CartSummary cart={cart} removeFromCart={removeFromCart} />
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>

        </div>

    )
}
export default Navi;
import React from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
    Button
} from "reactstrap";



const CartSummary = (props) => {

    const { cart, removeFromCart } = props;


    const renderSummary = () => {

        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart - {cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        cart.map((cartItem) => (
                            <DropdownItem key={cartItem.product.id}>
                                
                                <Button onClick={() => removeFromCart(cartItem.product)} outline color="danger" size="sm" className="mr-2"><i class="far fa-trash-alt"></i></Button>
                                
                                <Badge color="success" /* style={{float:"right"}} */ className="ml-1 mr-2">{cartItem.quantity}</Badge>
                                
                                {cartItem.product.productName}

                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    const renderEmptyCart = () => {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }



    return (

        <div>
            {/* Eger sepettekiler 0 dan buyukse goster, degilse renderEmptyCart() i calistir */}
            {props.cart.length > 0 ? renderSummary() : renderEmptyCart()}

        </div>
    )
}

export default CartSummary;

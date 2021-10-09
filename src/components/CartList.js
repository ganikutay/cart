import { Button, Table } from "reactstrap";




const CartList = (props) => {

    const { cart, removeFromCart } = props;



    const renderCart = () => {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {//ONEMLI, MAP lerde arrow func larda normal parantez kullanilir******************
                        cart.map((cartItem) => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryID}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button onClick={()=> removeFromCart(cartItem.product)} outline color="danger" size="sm">
                                    <i class="far fa-trash-alt"></i>

                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    return (
        <div>
            {renderCart()}
        </div>
    )


}
export default CartList;
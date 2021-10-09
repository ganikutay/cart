import { Table,Button } from "reactstrap";
import { useState } from "react";



const ProductList = ({ title, currentCategory, products, getProducts,addToCart }) => {




    return (

        <div >
            <h3>{title}-{currentCategory}</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantitty Per Unit</th>
                        <th>Units In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button outline onClick={()=> addToCart(product)} color="info">add</Button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>

        </div>

    )
}
export default ProductList;
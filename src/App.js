import React, { useState, useEffect } from "react";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap"
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";




//npx json-server --watch src/api/db.json --port 3002 


function App(props) {

  const { productName, categoryName } = props;


  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  //Ilk basta Contiments categorisi secili olacak.
  useEffect(() => {
    return setCurrentCategory("Condiments")
  }, [])


  /* useEffect((categoryName) => {
   return setCurrentCategory(categoryName)
 }, [cart]) */


  const changeCategory = (category) => {
    console.log(category.categoryName);//************************************************************ */
    setCurrentCategory(category.categoryName);
    getProducts(category.categoryID);
  }

  //Site ilk acilinca 1 kez calisanlar
  useEffect(() => {
    getProducts();
  }, []);




  const getProducts = (categoryID) => {
    let url = "http://localhost:3002/products";
    if (categoryID) {       //seoUrl varsa, / koy ve o seoUrl'nin ismini koy. Yani url i degistirdik.
      url += "?categoryID=" + categoryID;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }




  const addToCart = (product) => {
    //let newCart = cart;
    var addedItem = cart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      cart.push({ product: product, quantity: 1 });
    }

    //setCart(newCart);
    // cart.push({product:product,quantity:1});
    console.log(cart.length);
    setCurrentCategory("Last added " + product.productName) //######################################## her add yapisimda produtc name i ne tekrarr calistirma yaptim asagida Product.js de drilling yontemi ile cektim.



    //her ekleme yapilinca sagda kutucuk belirmesi icin
    alertify.set('notifier', 'position', 'bottom-right');
    alertify.warning(product.productName + " added to cart!", 2);
  }

  const removeFromCart = (product) => {
    //product.preventDefault();
    let newCart = cart.filter((c) => c.product.id !== product.id);  //benim gonderdigim id nin disinda kalanlari filtrelemis ol ve yeni bir array olustur
    setCart(newCart);
    //her silme yapilinca sagda kutucuk belirmesi icin
    alertify.set('notifier', 'position', 'bottom-right');
    alertify.error(product.productName + " removed from cart!", 2);
  }


  return (
    <div>
      <Container>

        <Navi removeFromCart={removeFromCart} cart={cart} />

        <Row>
          <Col xs="3">
            <CategoryList currentCategory={currentCategory} changeCategory={changeCategory} categoryName={categoryName} title="categoryList" />
          </Col>
          <Col xs="9">
            {/* Switch sirasiyla route lari gezmeye yarar, en ustteki uyuyor mu? uymuyorsa alta bakar. Bu yuzden NotFound i en alta yerlestirdik. */}
            <Switch>
              <Route exact path="/" render={(props) => (
                <ProductList
                {...props} //proplarin bir tane kopyasini al ve onu gonder demek!!
                  productName={productName}
                  currentCategory={currentCategory}
                  addToCart={addToCart}
                  products={products}
                  getProducts={getProducts}
                  title="productList"
                />
              )}
              />
              <Route exact path="/cart" render={(props) => (
                <CartList
                {...props} //proplarin bir tane kopyasini al ve onu gonder demek!!
                  cart={cart}
                  removeFromCart={removeFromCart}
                /> 
                )}
                />
                <Route exact path="/form1" component={FormDemo1}/>
                <Route exact path="/form2" component={FormDemo2}/>

              <Route component={NotFound}/>
            </Switch>



          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;

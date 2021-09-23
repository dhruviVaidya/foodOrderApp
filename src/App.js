import Header from "./components/Layout/Header";
import React,{ useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown,setCartisShown] = useState(false)

  const  showCartHandler = () => {
    setCartisShown(true)
  }

  const hideCartHandler = () => {
    setCartisShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
     <main>
       <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;

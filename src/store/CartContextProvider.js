import {useState} from "react";
import {CartContext} from "./cart-context";

const CartContextProvider = props => {

  const [cartItems, setCartItems] = useState([])

  const addCartItemHandler = item => {
    setCartItems((prevState) => {
      let storedItemIndex = prevState.findIndex(
          storedItem => storedItem.name === item.name)
      if (storedItemIndex >= 0) {
        prevState[storedItemIndex] = {
          ...prevState[storedItemIndex],
          amount: prevState[storedItemIndex].amount + item.amount
        }
      } else {
        return [...prevState, item]
      }
      return [...prevState]
    })
  }

  const removeCartItemHandler = name => {
    setCartItems(
        prevState => prevState.filter(storedItem => storedItem.name !== name))
  }

  const cartContext = {
    cartItems: cartItems,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler
  };
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartContextProvider
import {useReducer} from "react";
import {CartContext} from "./cart-context";
import {ADD_CART_ITEM, REMOVE_CART_ITEM} from "./actionTypes";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const index = state.findIndex(item => item.name === action.item.name)
      if (index === -1) {
        return state.concat(action.item)
      } else {
        const updatedItems = [...state]
        updatedItems[index] = {
          ...updatedItems[index],
          amount: updatedItems[index].amount + action.item.amount
        }
        return updatedItems
      }
    case REMOVE_CART_ITEM:
      return state.filter(item => item.name !== action.item.name)
    default:
      return state
  }
}

const CartContextProvider = props => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, [], undefined)

  const addCartItemHandler = item => {
    dispatchCartAction({type: ADD_CART_ITEM, item})
  }

  const removeCartItemHandler = name => {
    dispatchCartAction({type: REMOVE_CART_ITEM, name})
  }

  const cartContext = {
    items: cartState,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler
  };
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartContextProvider
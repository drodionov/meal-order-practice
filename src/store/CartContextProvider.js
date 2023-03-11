import {useReducer} from "react";
import {CartContext} from "./cart-context";
import {ADD_CART_ITEM, REMOVE_CART_ITEM} from "./actionTypes";

const cartReducer = (state, action) => {
  const index = state.findIndex(item => item.name === action.item.name)

  switch (action.type) {
    case ADD_CART_ITEM:
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
      if (index === -1) {
        return state
      }
      if (state[index].amount <= 1) {
        return state.filter(stateItem => stateItem.name !== action.item.name)
      } else {
        const updatedItems = [...state]
        updatedItems[index] = {
          ...updatedItems[index],
          amount: --updatedItems[index].amount
        }
        return updatedItems
      }
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
    dispatchCartAction({type: REMOVE_CART_ITEM, item: {name: name}})
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
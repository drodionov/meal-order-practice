import {useReducer} from "react";
import {CartContext} from "./cart-context";
import {ADD_CART_ITEM, REMOVE_CART_ITEM} from "./actionTypes";

const cartReducer = (state, action) => {
  const index = state.findIndex(item => item.id === action.item.id)

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
        return state.filter(stateItem => stateItem.id !== action.item.id)
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

  const removeCartItemHandler = id => {
    dispatchCartAction({type: REMOVE_CART_ITEM, item: {id: id}})
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
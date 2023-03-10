import {createContext} from "react"

export const CartContext = createContext({
  items: [{
    amount: 0,
    name: '',
    price: 0
  }],
  addCartItem: () => {
  },
  removeCartItem: () => {
  }
})
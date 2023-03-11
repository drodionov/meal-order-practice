import classes from './CartItem.module.css'
import {useContext} from "react";
import {CartContext} from "../../store/cart-context";

const CartItem = ({item}) => {
  const price = `$${item.price.toFixed(2)}`
  const cartContext = useContext(CartContext)

  const removeHandler = () => {
    cartContext.removeCartItem(item.name)
  }

  const addItemHandler = () => {
    cartContext.addCartItem({...item, amount: 1})
  }

  return (
      <li className={classes['cart-item']}>
        <div>
          <h2>{item.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {item.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>−</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </li>
  )
}

export default CartItem

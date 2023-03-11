import classes from './Cart.module.css'
import Modal from "../UI/Modal"
import {useContext} from "react";
import {CartContext} from "../../store/cart-context";

const Cart = ({onShowCart}) => {
  const cartContext = useContext(CartContext)

  const items = <ul className={classes['cart-items']}>{cartContext.items.map(
      item => <li>{item.name}</li>)}</ul>

  const totalAmount = `$${cartContext.items.reduce(
      (totalAmount, item) => totalAmount + item.amount * item.price, 0).toFixed(
      2)}`

  const onCloseHandler = () => {
    onShowCart(false)
  }

  return (
      <Modal onClose={onCloseHandler}>
        {items}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']}
                  onClick={onCloseHandler}>Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
  )
}

export default Cart
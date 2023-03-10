import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import {useContext} from "react";
import {CartContext} from "../../store/cart-context";

const HeaderCartButton = ({onShowCart}) => {

  const cartContext = useContext(CartContext)
  const numberOfItems = cartContext.items.reduce(
      (count, item) => count + item.amount, 0)
  const onClickHandler = () => {
    onShowCart(true)
  }

  return (
      <button className={classes.button} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
  )
}

export default HeaderCartButton
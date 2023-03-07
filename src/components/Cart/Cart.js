import classes from './Cart.module.css'
import Modal from "../UI/Modal"

const Cart = ({onShowCart}) => {
  const items = <ul className={classes['cart-items']}>{[{
    id: 1,
    name: 'Sushi',
    price: '12.99'
  }].map(item => <li>{item.name}</li>)}</ul>

  const onCloseHandler = () => {
    onShowCart(false)
  }

  return (
      <Modal onClose={onCloseHandler}>
        {items}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>35.98</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onCloseHandler}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
  )
}

export default Cart
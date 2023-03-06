import classes from './Cart.module.css'
import Modal from "../UI/Modal"

const Cart = () => {
  const items = <ul className={classes['cart-items']}>{[{
    id: 1,
    name: 'Sushi',
    price: '12.99'
  }].map(item => <li>{item.name}</li>)}</ul>

  return (
      <Modal>
        {items}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>35.98</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
  )
}

export default Cart
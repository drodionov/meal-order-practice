import classes from './MealsItem.module.css'
import MealsItemForm from "./MealsItemForm";
import {useContext} from "react";
import {CartContext} from "../../../store/cart-context";

const MealsItem = ({meal}) => {
  const price = `$${meal.price.toFixed(2)}`

  const cartContext = useContext(CartContext)

  const onAddItemHandler = amount => {
    cartContext.addCartItem({
      ...meal, amount: amount
    })
  }

  return (
      <li className={classes.meal}>
        <div>
          <div><h3>{meal.name}</h3></div>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <MealsItemForm onAddItem={onAddItemHandler}/>
      </li>
  )
}

export default MealsItem
import classes from './MealsItem.module.css'
import MealsItemForm from "./MealsItemForm";

const MealsItem = ({meal}) => {
  const price = `$${meal.price.toFixed(2)}`

  return (
      <li className={classes.meal}>
        <div>
          <div><h3>{meal.name}</h3></div>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <MealsItemForm/>
      </li>
  )
}

export default MealsItem
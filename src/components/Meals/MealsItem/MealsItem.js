import classes from './MealsItem.module.css'

const MealsItem = ({meal}) => {
  const price = `$${meal.price.toFixed(2)}`

  return (
      <li className={classes.meal}>
        <div>
          <div><h3>{meal.name}</h3></div>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>Form</div>
      </li>
  )
}

export default MealsItem
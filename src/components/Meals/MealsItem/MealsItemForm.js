import classes from './MealsItemForm.module.css'
import Input from "../../UI/Input"
import {useRef} from "react";

const MealsItemForm = ({onAddItem}) => {
  const amountReference = useRef()

  const onSubmitHandler = event => {
    event.preventDefault()
    onAddItem(+amountReference.current.value)
  }

  return <form className={classes.form} onSubmit={onSubmitHandler}>
    <Input label={"Amount"} ref={amountReference} input={{
      id: 'amount',
      type: 'number',
      min: 1,
      max: 5,
      step: 1,
      defaultValue: 1
    }}/>
    <button>Add</button>
  </form>
}

export default MealsItemForm
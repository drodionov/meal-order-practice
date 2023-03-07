import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
  const [isShowCart, setIsShowCart] = useState(false)

  const onShowCardHandler = (show) => {
    setIsShowCart(show)
  }

  return (
      <>
        <Header onShowCart={onShowCardHandler}/>
        <main>
          {isShowCart && <Cart onShowCart={onShowCardHandler}/>}
          <MealsSummary/>
          <AvailableMeals/>
        </main>
      </>
  )
}

export default App

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false)

  const onShowCardHandler = (show) => {
    setIsShowCart(show)
  }

  return (
      <CartContextProvider>
        <Header onShowCart={onShowCardHandler}/>
        <main>
          {isShowCart && <Cart onShowCart={onShowCardHandler}/>}
          <MealsSummary/>
          <AvailableMeals/>
        </main>
      </CartContextProvider>
  )
}

export default App

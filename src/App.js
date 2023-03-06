import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
      <>
        <Header/>
        <main>
          <MealsSummary/>
          <AvailableMeals/>
        </main>
      </>
  )
}

export default App

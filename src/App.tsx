import { Routes, Route } from "react-router-dom";

import HeroHeader from "./components/heroHeader";

import AllRecipes from "./pages/allRecipes";
import RecipeDetails from "./pages/recipeDetails";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <HeroHeader />

      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="recipe-details/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;

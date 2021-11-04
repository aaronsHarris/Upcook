import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../Screens/Home/Home";
import {
  deleteRecipe,
  getAllRecipes,
  postRecipe,
  putRecipe,
} from "../Services/recipes";

import { postIngredient } from "../Services/Ingredients";
import { postDirection } from "../Services/directions";

import Recipes from "../Screens/Recipes/Recipes";
import RecipeCreate from "../Screens/RecipeCreate/RecipeCreate";
import RecipeEdit from "../Screens/RecipeEdit/RecipeEdit";
import RecipeDetail from "../Screens/RecipeDetail/RecipeDetail";

const MainContainer = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await getAllRecipes();
      setRecipes(recipeList);
    };
    fetchRecipes();
  }, []);

  const handleRecipeCreate = async (formData) => {
    const newRecipe = await postRecipe(formData);
    setRecipes((prevState) => [...prevState, newRecipe]);
    history.push("/recipes");
  };

  const handleRecipeUpdate = async (id, formData) => {
    const newRecipe = await putRecipe(id, formData);
    setRecipes((prevState) =>
      prevState.map((recipe) => {
        return recipe.id === Number(id) ? newRecipe : recipe;
      })
    );
    history.push("/recipes");
  };

  const handleRecipeDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
    history.push('/recipes')
  };

  return (
    <Switch>
      <Route path="/recipes/:id/edit">
        <RecipeEdit
          recipes={recipes}
          handleRecipeUpdate={handleRecipeUpdate}
          
        />
      </Route>
      <Route path="/recipes/new">
        <RecipeCreate
          handleRecipeCreate={handleRecipeCreate}
        />
      </Route>
      <Route path="/recipes/:id">
        <RecipeDetail
          recipes={recipes}
          handleRecipeUpdate={handleRecipeUpdate}
          handleRecipeDelete={handleRecipeDelete}
        />
      </Route>
      <Route path="/recipes">
        <Recipes
          recipes={recipes}
          ingredients={ingredients}
          directions={directions}
        />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
      </Switch>
      
  );
};

export default MainContainer;

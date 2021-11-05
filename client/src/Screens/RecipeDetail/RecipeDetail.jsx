import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneRecipe } from "../../Services/recipes";

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const {handleRecipeDelete, handleRecipeUpdate} = props

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      const recipeData = await getOneRecipe(id);
      setRecipe(recipeData);
    };
    fetchSingleRecipe();
  }, [id]);

  return (
    <>
      <div>
        <h1>recipe detail</h1>
        <img src={recipe?.image_url} alt="recipeDetail" />
        <h2>{recipe?.name}</h2>
        <h2>{recipe?.time}</h2>
        <h2>{recipe?.difficulty}</h2>
        <h3>{recipe?.description}</h3>
        <p>{recipe?.ingredients}</p>
        <p>{recipe?.directions}</p>
        <button onClick={() => handleRecipeDelete(recipe.id)}>delete</button>
        <Link to={`/recipes/${id}/edit`}>
          <button>edit</button>
        </Link>
      </div>
    </>
  );
};

export default RecipeDetail;

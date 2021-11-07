import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneRecipe } from "../../Services/recipes";
import * as FaIcons from "react-icons/fa";
const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const { handleRecipeDelete, handleRecipeUpdate } = props;

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      const recipeData = await getOneRecipe(id);
      setRecipe(recipeData);
    };
    fetchSingleRecipe();
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="grid grid-cols-3 my-10 text-center">
        <Link to="/recipes">
          <button className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-green-400 hover:text-white border-2 border-gray-900 focus:outline-none">
            <FaIcons.FaArrowLeft />
          </button>
        </Link>
        <div className="text-5xl">{recipe?.name}</div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <img className="w-96 " src={recipe?.image_url} alt="recipeDetail" />
        <div className="text-xl">
          <div> Description: {recipe?.description}</div>
          <div>Time: {recipe?.time}</div>
          <div>Difficulty: {recipe?.difficulty}</div>
          <div>Ingredients: {recipe?.ingredients}</div>
          <div>Directions: {recipe?.directions}</div>
        </div>
      </div>
      <div className="flex justify-end">
      <button className="mx-10" onClick={() => handleRecipeDelete(recipe.id)}>delete</button>
      <Link to={`/recipes/${id}/edit`}>
        <button className="mx-10">edit</button>
      </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;

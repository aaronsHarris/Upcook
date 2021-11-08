import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneRecipe } from "../../Services/recipes";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as TiIcons from "react-icons/ti";
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
    <div className="flex flex-col justify-center text-center">
      <Link to="/recipes" className="flex">
           <button className="menu-bars">
             <FaIcons.FaArrowLeft />
           </button>
         </Link>
    <div className="flex justify-center">
      <div className=" h-80">
        <img alt="content" class=" h-full w-full" src={recipe?.image_url}/>
        </div>
    </div>
      <div className="text-5xl mt-10 mb-4">{recipe?.name}</div>
      <div className="text-2xl">{recipe?.description}</div>
<div class="my-10 mx-auto justify-center bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
    <div class="border-t border-gray-200 ">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Time
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {recipe?.time}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Difficulty
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {recipe?.difficulty}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Ingredients
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {recipe?.ingredients}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Directions
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {recipe?.directions}
                </dd>
            </div>
            
        </dl>
    </div>
      </div>
      <div className="flex justify-end m-24">
        <button className="menu-bars" onClick={() => handleRecipeDelete(recipe.id)}>
          <GoIcons.GoTrashcan />
        </button>
        <Link to={`/recipes/${id}/edit`}>
          <div className="">
          <button className="menu-bars">
            <TiIcons.TiPencil />
          </button>
          </div>
       </Link>
       </div>
</div>
  );
};

export default RecipeDetail;

    // <div className="flex flex-col min-h-screen justify-center">
    //   <div className="grid grid-cols-3 my-10 text-center">
    //     <Link to="/recipes">
    //       <button className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-green-400 hover:text-white border-2 border-gray-900 focus:outline-none">
    //         <FaIcons.FaArrowLeft />
    //       </button>
    //     </Link>
    //     <div className="text-5xl">{recipe?.name}</div>
    //   </div>
    //   <div className="flex flex-col justify-center items-center mb-10">
    //     <img className="w-96 " src={recipe?.image_url} alt="recipeDetail" />
    //     <div className="text-xl">
    //       <div> Description: {recipe?.description}</div>
    //       <div>Time: {recipe?.time}</div>
    //       <div>Difficulty: {recipe?.difficulty}</div>
    //       <div>Ingredients: {recipe?.ingredients}</div>
    //       <div>Directions: {recipe?.directions}</div>
    //     </div>
    //   </div>
    //   <div className="flex justify-end">
    //   <button className="mx-10" onClick={() => handleRecipeDelete(recipe.id)}>delete</button>
    //   <Link to={`/recipes/${id}/edit`}>
    //     <button className="mx-10">edit</button>
    //   </Link>
    //   </div>
    // </div>
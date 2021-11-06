import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-xl m-4 ">
      <Link to={`/recipes/${recipe.id}`}>
        <img
          class="object-cover w-full h-56"
          src={recipe.image_url}
          alt="avatar"
        />
        <div className="py-5 text-center">
          <div className="block text-2xl font-bold text-gray-800 dark:text-white">
            {recipe.name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;

//     <Link to={`/recipes/${recipe.id}`}>
//     <div classname="">
//     <div>{recipe.name}</div>
//     </div>
//     <div className="w-48">
//     <img
//       className=" overflow-hidden"
//       src={recipe.image_url}
//       alt="recipeItem"
//     />
//   </div>
// </Link>

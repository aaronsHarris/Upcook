import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const Recipes = (props) => {
  const { recipes } = props;

  return (
    <div className="flex flex-col justify-center content-center min-h-screen max-w-full mx-auto">
      <div className="grid grid-cols-3 justify-center content-center gap-4 text-center">
        <div className="grid col-start-2">
          <h3>Recipes</h3>
        </div>
        <div classname="grid col-start-3">
          <Link to="/recipes/new">
            <button className="">add</button>
          </Link>
        </div>
      </div>
      <RecipeCard recipes={recipes} />
    </div>
  );
};

export default Recipes;

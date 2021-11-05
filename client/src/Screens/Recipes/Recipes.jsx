import { Link } from "react-router-dom";
import "./recipes.css";

const Recipes = (props) => {
  const { recipes } = props;

  return (
    <div>
      <h3>Recipes</h3>
      <Link to="/recipes/new">add</Link>
      <div className="recipeContainer">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`}>
            <div className="recipeCard" key={recipe.id}>
              <p>{recipe.name}</p>
              <img
                className="recipeImage"
                src={recipe.image_url}
                alt="recipeItem"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

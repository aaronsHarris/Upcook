import { Link } from "react-router-dom";
import "./recipes.css";

const Recipes = (props) => {
  const { recipes } = props;

  return (
    <div  className="recipeContainer">
      <h3>Recipes</h3>
      <Link to="/recipes/new">add</Link>
      <div>
        <div className="grid-space">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`}>
            <div className="card" key={recipe.id}>
              {/* <h1>{recipe.name}</h1> */}
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
    </div>
  );
};

export default Recipes;

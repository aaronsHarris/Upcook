import { Link } from "react-router-dom";
import "./recipes.css";

const Recipes = (props) => {
  const { recipes } = props;

  return (
    
    <div className="recipe-wrapper">
      <div className="recipe-header">
        <div>
      <h3>Recipes</h3>

        </div>
      <Link to="/recipes/new">
      <button className="button-77">add</button>
        </Link>
        </div>
    <div  className="recipeContainer">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`}>
            <div className="card" key={recipe.id}>
              {/* <h1>{recipe.name}</h1> */}
              <div className="image-container">
              <img
                className="recipeImage"
                src={recipe.image_url}
                alt="recipeItem"
              />
              </div>
            </div>
          </Link>
        ))}
         
      
    </div>
      </div>
      );
};

export default Recipes;

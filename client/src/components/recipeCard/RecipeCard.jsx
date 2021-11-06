import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const {recipes} = props
    return (
        <div  className="">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`}>
            
              <div classname="">
              <div>{recipe.name}</div>
              </div>
              <div className="">
              <img
                className="w-48"
                src={recipe.image_url}
                alt="recipeItem"
              />
              
            </div>
          </Link>
        ))}
    </div>
    )
}

export default RecipeCard

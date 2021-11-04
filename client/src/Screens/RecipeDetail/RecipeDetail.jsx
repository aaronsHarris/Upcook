import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getOneRecipe } from '../../Services/recipes';


const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null)
    const {id} = useParams()


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
            <h2>{recipe?.name}</h2>
            <h2>{recipe?.time}</h2>
            <h2>{recipe?.difficulty}</h2>
            <h3>{recipe?.description}</h3>
                <img src={recipe?.image_url} alt="recipeDetail" />
                <div>{recipe?.ingredients.map((ingredient) => (
                    <p key={ingredient.id}>{ingredient.name}</p>
                ))} </div>
                <div>{recipe?.directions.map((direction) => (
                    <p>{direction.content}</p>
                ))}</div>
        </div>
                </>
    )
}

export default RecipeDetail

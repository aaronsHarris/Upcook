import React from 'react'

const Recipes = (props) => {
    const {recipes} = props
    return (
        <div>
            <h3>Recipes</h3>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <p>{recipe.name}</p>
                    <img src={recipe.image_url} alt="recipeItem" />

                </div>
            ))}
        </div>
    )
}

export default Recipes

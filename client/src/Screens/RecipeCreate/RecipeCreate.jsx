import { useState } from 'react'

const RecipeCreate = (props) => {
    const [recipeFormData, setRecipeFormData] = useState({
        name: '',
        time: '',
        difficulty: '',
        description: '',
        image_url: '',
    })
    const { name, difficulty, description, image_url } = recipeFormData
    const {handleRecipeCreate} = props

    const handleChange = (e) => {
        const { value } = e.target;
        setRecipeFormData({
            ...recipeFormData,
            [name]: value,
           
        })
    }

    return (
        <div>
            <h1>recipe create</h1>

            <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRecipeCreate(recipeFormData);
      }}
    >
      <h1>Create Food</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
        </div>
    )
}

export default RecipeCreate

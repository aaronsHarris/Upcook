import { useState } from "react";

const RecipeCreate = (props) => {
  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    time: "",
    difficulty: "",
    description: "",
    image_url: "",
    ingredients: [],
    directions: []
    
  });
  const { name, time, difficulty, description, image_url, ingredients, directions } = recipeFormData;
  const { handleRecipeCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeFormData({
      ...recipeFormData,
        [name]: value,
    });
  };

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
        <div>
          Name:
                  <input type="text" name="name"value={name} onChange={handleChange} />
        </div>
        <div>
          time:
          <input type="text" name="time"value={time} onChange={handleChange} />
        </div>
        <div>
          difficulty
          <input type="text" name="difficulty" value={difficulty} onChange={handleChange} />
        </div>
        <div>
          description
          <input type="text" name="description" value={description} onChange={handleChange} />
        </div>
        <div>
          image
          <input type="text" name="image_url" value={image_url} onChange={handleChange} />
        </div>
        <div>
          ingredients
          <input type="text" name="ingredients" value={ingredients} onChange={handleChange} />
        </div>
        <div>
          directions
          <input type="text" name="directions" value={directions} onChange={handleChange} />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RecipeCreate;

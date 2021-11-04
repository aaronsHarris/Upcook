import { useState } from "react";

const RecipeCreate = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    difficulty: "",
    description: "",
    image_url: "",
    ingredients: [],
    directions: []
    
  });
  const { name, time, difficulty, description, image_url, ingredients, directions } = formData;
  const { handleRecipeCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
        [name]: value,
    });
  };

  return (
    <div className="create-container">
      <h1>recipe create</h1>

      <form
        className="recipe-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRecipeCreate(formData);
        }}
      >
        
        <div className="recipe-input">
          Name:
                  <input type="text" name="name"value={name} onChange={handleChange} />
        </div>
        <div className="recipe-input">
          time:
          <input type="text" name="time"value={time} onChange={handleChange} />
        </div>
        <div className="recipe-input">
          difficulty
          <input type="text" name="difficulty" value={difficulty} onChange={handleChange} />
        </div>
        <div className="recipe-input">
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

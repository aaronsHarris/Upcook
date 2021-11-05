import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeEdit = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    difficulty: "",
    description: "",
    image_url: "",
    ingredients: [],
    directions: [],
  });

  const {
    name,
    time,
    difficulty,
    description,
    image_url,
    ingredients,
    directions,
  } = formData;
  const { id } = useParams();
  const { recipes, handleRecipeUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const recipeItem = recipes.find((recipe) => recipe.id === Number(id));
      setFormData({
        name: recipeItem.name,
        time: recipeItem.time,
        difficulty: recipeItem.difficulty,
        description: recipeItem.description,
        image_url: recipeItem.image_url,
        ingredients: recipeItem.ingredients,
        directions: recipeItem.directions,
      });
    };
    if (recipes.length) {
      prefillFormData();
    }
  }, [recipes, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRecipeUpdate(id, formData);
      }}
    >
      <h1>Edit Food</h1>
      <div>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        time:
        <input type="text" name="time" value={time} onChange={handleChange} />
      </div>
      <div>
        difficulty:
        <input
          type="text"
          name="difficulty"
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <div>
        description:
        <input
          type="text"
          name="descricption"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div>
        image:
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
      </div>
      <div>
        ingredients:
        <input
          type="text"
          name="ingredient"
          value={ingredients}
          onChange={handleChange}
        />
      </div>
      <div>
        directions:
        <input
          type="text"
          name="directions"
          value={directions}
          onChange={handleChange}
        />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default RecipeEdit;

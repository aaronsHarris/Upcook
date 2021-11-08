import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    
    <Link to={`/recipes/${recipe.id}`} className="grid grid-col relative w-full h-64 rounded-lg overflow-hidden shadow-lg hover:-translate-y-5 transform transition duration-300 ease-in-out" >
      
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <div className="text-black text-2xl  text-center" href="#">
            {recipe.name}
          </div>
        </h3>
      </div>
      <img src={recipe.image_url} alt={recipe.id} />
    </Link>
  );
};

export default RecipeCard;


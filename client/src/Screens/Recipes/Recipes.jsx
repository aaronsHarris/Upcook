import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import * as GrIcons from "react-icons/gr";
const Recipes = (props) => {
  const { recipes } = props;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <div>
        <div className="flex flex-col text-4xl font-extrabold text-gray-900 text-center ">
          <div className="">Recipes</div>
        </div>
        <Link to="/recipes/new">
          <button className=" text-2xl self-end">
            <GrIcons.GrAdd />
          </button>
           </Link>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
        {recipes.map((recipe, index) => (
                
                <RecipeCard recipe={recipe} key={index} />
              ))}
        </section>
    </div>
</section>
  );
};

export default Recipes;

    // <div className="flex flex-col  min-h-screen max-w-full">
    //   <div className="grid grid-cols-3 justify-center content-center gap-4 text-center my-10">
    //     <div className="grid col-start-2">
    //       <div className="text-5xl">Recipes</div> 
    //     </div>
    //     <div classname="grid col-start-3">
    //       <Link to="/recipes/new">
    //         <button className="text-2xl">add</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex">
    //   {recipes.map((recipe) => (
          
    //       <RecipeCard recipe={recipe} />
    //     ))}
    //   </div>
    // </div>
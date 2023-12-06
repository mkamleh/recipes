import { Link } from "react-router-dom";
import { IAllRecipesData } from "../../interfaces/allRecipes.interface";
import "./index.css";

const RecipeCard: React.FC<IAllRecipesData> = ({ id, image, title }) => {
  return (
    <div className="col">
      <div className="p-3 mb-5 bg-body-tertiary rounded">
        <div className="image-wrapper">
          <img src={image} title="recipe" alt={title} />
          <div className="body-wrapper">
            <h5 className="card-title title">{title}</h5>
            <Link
              aria-label="show recipe details"
              to={`recipe-details/${id}`}
              className="btn btn-warning margin-top"
            >
              Recipe Details ....
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

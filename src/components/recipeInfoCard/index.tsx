import { IRecipesDetailsData } from "../../interfaces/recipeDetails.interface";
import "./index.css";

const RecipeInfoCard = ({ item }: { item: IRecipesDetailsData }) => {
  return (
    <div className="col">
      <div className="header-wrapper">
        <h2>Summary</h2>
      </div>

      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="image-wrapper text-center">
          <img title="recipe" src={item?.image} alt="..." />
        </div>
        <div className="bodyWrapper">
          <h5 className="card-title text-center">{item?.title}</h5>
          <h6 className="card-title margin-bottom">
            <b>Prep: </b>
            {item?.readyInMinutes}
            <span> minutes</span>
          </h6>
          <h6 className="card-title margin-bottom">
            <b>Servings: </b>
            {item?.servings}
            <span> persons</span>
          </h6>
          <h6 className="card-title margin-bottom">
            <b>Price per Serving: </b>
            {item?.pricePerServing}
            <span> USD</span>
          </h6>
          <h6 className="card-title margin-bottom">
            <b>Health score: </b>
            {item?.healthScore}
            <span></span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfoCard;

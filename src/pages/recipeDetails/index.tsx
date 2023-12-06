import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeInfoCard from "../../components/recipeInfoCard";
import Spinner from "../../components/spinner";
import { fetchRecipeDetails, apiError } from "../../api";
import { motion } from "framer-motion";
import {
  IIngredient,
  IRecipesDetailsData,
} from "../../interfaces/recipeDetails.interface";
import "./index.css";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<IRecipesDetailsData>();
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  const getRecipeDetails = useCallback(async () => {
    setLoading(true);

    try {
      const { data, status } = await fetchRecipeDetails(id);

      if (status === 200) setRecipe(data);
    } catch (error) {
      apiError();
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getRecipeDetails();
  }, [getRecipeDetails]);

  if (loading) return <Spinner />;

  if (!recipe) return <p>{"wrong id"}</p>;

  return (
    <div className="row margin-top">
      <div className="col-md-6">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="instructions">
            <p>{recipe?.instructions}</p>
          </div>
        </motion.div>

        <div className="ingredients">
          <h3>Ingredients</h3>

          {recipe?.extendedIngredients.map(
            (item: IIngredient, index: number) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: +100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div
                    key={item.id}
                    className="ingredient-container margin-top"
                  >
                    <span className="dot">{index + 1}</span>
                    <span>{item.originalName}</span>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
      <div className="col-md-6">
        <motion.div
          initial={{ opacity: 0, x: +200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <RecipeInfoCard item={recipe} />
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeDetails;

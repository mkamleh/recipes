import axios from "axios";
import { environments } from "../environment/environment";

export const fetchRecipeDetails = async (id: string | undefined) => {
  return await axios.get(
    `${environments.baseUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${environments.apiKey}`
  );
};

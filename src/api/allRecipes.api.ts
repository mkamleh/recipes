import axios, { type AxiosResponse } from "axios";
import { environments } from "../environment/environment";
import { type IRecipeSearchResult } from "../interfaces/api.interface";

export const getAllRecipes = async (
  query: string,
  offset: number
): Promise<AxiosResponse<IRecipeSearchResult>> => {
  return await axios.get(
    `${environments.baseUrl}/recipes/complexSearch?apiKey=${environments.apiKey}&query=${query}&offset=${offset}`
  );
};

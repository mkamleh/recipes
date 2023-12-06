import { type IRecipe } from "./api.interface";

export interface IAllRecipesData
  extends Pick<IRecipe, "id" | "image" | "title"> {}

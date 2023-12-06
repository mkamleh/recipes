export interface IRecipesDetailsData {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  pricePerServing: number;
  healthScore: number;
  instructions: string;
  extendedIngredients: IIngredient[];
}

export interface IIngredient {
  id: string;
  originalName: string;
}

export interface IRecipe {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

export interface IRecipeSearchResult {
  number: number;
  offset: number;
  results: IRecipe[];
  totalResults: number;
}

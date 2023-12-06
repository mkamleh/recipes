import { Fragment, useCallback, useEffect, useState, type FC } from "react";

import { type IAllRecipesData } from "../../interfaces/allRecipes.interface";

import RecipeCard from "../../components/recipeCard";
import SearchBar from "../../components/searchBar";
import Spinner from "../../components/spinner";
import Paginate from "../../components/paginate";

import { motion } from "framer-motion";

import { getAllRecipes, apiError } from "../../api";

import "./index.css";

const AllRecipes: FC = () => {
  const [recipes, setRecipes] = useState<IAllRecipesData[]>([]);
  const [totalRecipesCount, setTotalRecipesCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const recipesList = useCallback(
    async (offset: number = 0) => {
      try {
        setIsLoading(true);
        const { data, status } = await getAllRecipes(searchQuery, offset);

        if (status === 200) {
          setIsLoading(false);
          setRecipes(data.results);
          setTotalRecipesCount(Math.ceil(data.totalResults / 10));
        }
      } catch (error) {
        apiError();
      } finally {
        setIsLoading(false);
      }
    },
    [searchQuery]
  );

  useEffect(() => {
    recipesList();
  }, [recipesList]);

  const searchRecipes = (query: string) => {
    setPage(1);
    setSearchQuery(query);
  };

  const handleChange = (pageNumber: number) => {
    setPage(pageNumber);

    const newOffset = (pageNumber - 1) * 10;
    recipesList(newOffset);
  };

  return (
    <section className="allRecipes-countiner">
      <SearchBar emitChange={searchRecipes} />

      {isLoading ? (
        <Spinner />
      ) : !recipes.length ? (
        <p>{"There is no recipes ."}</p>
      ) : (
        <Fragment>
          <div className="recipes-container row row-cols-1 row-cols-md-2 g-4">
            {recipes.map((item: IAllRecipesData) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0, y: -3 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <RecipeCard key={item.id} {...item} />
              </motion.div>
            ))}
          </div>

          <div className="pagination-container">
            <Paginate
              currentPage={page}
              totalPages={totalRecipesCount}
              handleChange={handleChange}
            />
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default AllRecipes;

import { useEffect } from "react";
import { debounce } from "lodash";
import "./index.css";

const SearchBar = ({ emitChange }: { emitChange: (value: string) => void }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleSearchDebounce(e.target.value);
  };

  const handleSearchDebounce = debounce((value: string) => {
    emitChange(value);
  }, 300);

  useEffect(() => {
    return () => {
      handleSearchDebounce.cancel();
    };
  }, []);

  return (
    <input
      className="searchBar-input"
      type="text"
      placeholder="Search here"
      onChange={handleChange}
    />
  );
};

export default SearchBar;

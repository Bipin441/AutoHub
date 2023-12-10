import { useEffect, useState } from "react";
//import data from '../../../../data/data.json';
import styles from "./search.module.css";
import PropTypes from 'prop-types'
const SearchBar = ({ onSearch, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isSuggestionDropdown, setIsSuggestionDropdown] = useState(false);
  useEffect(() => {
    const filterSuggestion = data.map((item) => {
      return item.model;
    });
    console.log("suggestion", filterSuggestion);
    setSuggestion(filterSuggestion);
  }, [data]);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
    setIsSuggestionDropdown(true);
  };

  const filtered = suggestion.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log("filtered", filtered);
  return (
    <div>
      <input
        className={styles.input_box}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search vehicles..."
      />
      {isSuggestionDropdown && searchTerm.length > 0 && (
        <ul className={styles.autosuggestion}>
          {filtered.map((item) => (
            <li
           
              onClick={() => {
                setSearchTerm(item),
                  setIsSuggestionDropdown(false),
                  onSearch(item);
              }}
              key={item}
              style={{ marginBottom: "10px" }}
            >
              {item}{" "}
            </li>
          ))}
        </ul>
      )}
    
    </div>
  );
};
SearchBar.propTypes={
  onSearch: PropTypes.func,
  data:PropTypes.array,
}
SearchBar.defaultProps={
  onSearch:()=>{},
  data:[]
}
export default SearchBar;

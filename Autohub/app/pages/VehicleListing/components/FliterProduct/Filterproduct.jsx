import { useState } from 'react';
import styles from './filterProduct.module.css'
import PropTypes from 'prop-types'
const FilterProduct = ({ vehicles, onFilter }) => {
  const [selectedMake, setSelectedMake] = useState('');

  const handleFilterChange = (event) => {
    setSelectedMake(event.target.value);
    onFilter('make', event.target.value);
   
  };

  const uniqueMakes = [...new Set(vehicles.map((vehicle) => vehicle.make))];

  return (
    <div className={styles.filter}>
      <h4>
        Filter by Make:
        <label htmlFor="makeDropdown">
        <select value={selectedMake} onChange={handleFilterChange}>
          <option value="All">All Makes</option>
          {uniqueMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        </label>
      </h4>
    </div>
  );
};

FilterProduct.propTypes={
  vehicles:PropTypes.array,
  onFilter:PropTypes.func,

}
FilterProduct.defaultProps={
  vehicles:[],
  onFilter:()=>{}
}
export default FilterProduct;

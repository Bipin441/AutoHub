import PropTypes from 'prop-types'
import styles from './sortProduct.module.css'
const SortProduct = ({ onSort }) => {
  const handleSort = (sortKey) => {
    onSort(sortKey);
  };

  return (
    <div className={styles.sort_container}>
        <h5>Sort by:</h5>
      <button className={ styles.button} onClick={() => handleSort('price')}>
        Price
      </button>
      <button className={ styles.button}  onClick={() => handleSort('newest')}>
         Newest Listings
      </button>
      <button className={ styles.button}  onClick={() => handleSort('mileage')}>
         mileage
      </button>
     
    </div>
  );
};

SortProduct.propTypes={
  onSort:PropTypes.func,
}
SortProduct.defaultProps={
  onSort:()=>{}
}

export default SortProduct;

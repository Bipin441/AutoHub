import styles from "./favouritesModal.module.css";
import PropTypes from 'prop-types'

const FavouritesModal = ({ favouriteItems }) => {
  console.log("FavouritesModal", favouriteItems);
  const tableHeaders = [{id:1,header:"Id"}, {id:2,header:"Make"}, {id:3,header:"Model"}, {id:4,header:"Year"},{id:5,header:"Mileage"},{id:6,header:"Price"},{id:7,header:"Images"},{id:8,header:"Status"}];
  if (favouriteItems.length <= 0) {
    return (
      <div className={styles.favourite_container}>
        <h1>Sorry, nothing is in the favourite list</h1>
      </div>
    );
  }
  return (
    <div className={styles.favourite_container}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item)=>(
              <th key={`header_${item.id}`}>{item.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {favouriteItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.make}</td>
              <td>{item.model}</td>
              <td>{item.year}</td>
              <td>{item.mileage}</td>
              <td>{item.price}</td>
              <td>
                <img
                  style={{ width: "80px", height: "auto", cursor: "pointer" }}
                  src={item.images[0]}
                  alt={item.model}
                />
              </td>
              <td>Available</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
FavouritesModal.propTypes={
  favouriteItems:PropTypes.array,
}
FavouritesModal.defaultProps={
  favouriteItems:[],
}
export default FavouritesModal;

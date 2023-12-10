import { useState } from "react";
import FavouritesModal from "../FavouritesModal/FavouritesModal";
import PropTypes from 'prop-types'

const Favourites = ({ favouriteItems, handleCloseModal }) => {
  console.log("favourite component ", favouriteItems);
  console.log(Array.isArray(favouriteItems))
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
        setIsClicked(!isClicked);
  };
  return (
    <>
      <h3 onClick={handleClick}>Favourites</h3>
      <div>
        {isClicked &&    (
          <FavouritesModal favouriteItems={favouriteItems} closeModal={handleCloseModal} />
        )}
      </div>
    </>
  );
};
Favourites.propTypes={
  favouriteItems:PropTypes.array.isRequired,
  handleCloseModal:PropTypes.func
}
Favourites.defaultProps = {
  favouriteItems: [],
  handleCloseModal: () => {
    throw new Error('handleCloseModal function is not provided');
  }

}

export default Favourites;

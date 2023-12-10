import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./productDetailsModal.module.css";

const ProductDetailsModal = ({ vehicle, closeModal }) => {
  useEffect(() => {
    const handleCloseModal = (event) => {
      if (event.target.classList.contains(styles.overlay)) {
        closeModal();
      }
    };

    window.addEventListener("click", handleCloseModal);

    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [closeModal]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <div className={styles.modalContent}>
            <h1>Vehicle Details</h1>
            <h2>
              {vehicle.make} {vehicle.model}{" "}
            </h2>
            <h3>Price - {vehicle.price}</h3>
            <h3>Make - {vehicle.make}</h3>
            <h3>Model - {vehicle.model}</h3>
            <h3>Mileage - {vehicle.mileage}</h3>
            <h3>Year - {vehicle.year}</h3>
          </div>
        </div>
        <div>
          <img src={vehicle.images[0]} alt={vehicle.make} />
        </div>
      </div>
    </div>
  );
};

ProductDetailsModal.propTypes = {
  vehicle: PropTypes.shape({
    price: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    images:  PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  closeModal: PropTypes.func,
};


export default ProductDetailsModal;

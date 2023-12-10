import { useState ,useEffect} from "react";
import data from "../../../../data/data.json";
import styles from "./vehicleListing.module.css";
import ProductDetailsModal from "../ProductDetailsModal";
import SearchBar from "../SearchBar";
import FilterProduct from "../FliterProduct";
import SortProduct from "../SortProduct";
import Favourites from "../Favourites";
import logo from "../../../../assets/LOGO_AUTOHUB.jpeg";

const VehicleListing = () => {
  const [toggle, setToggle] = useState(false);
  const [filterData, setFilterData] = useState(data);
  const[selectedVehicle, setSelectedVehicle]= useState(null);
  const[favouriteItems,setFavouriteItems]=useState([]);

  useEffect(()=>{
    let favourites= filterData.filter((vehicle)=>vehicle.isFavorite===true);
    console.log(favourites)
    setFavouriteItems(favourites)
  },[filterData])

  const handleImageClick = (id) => {
    const clickedVehicle= data.find((vehicle)=>vehicle.id===id)
    setToggle(!toggle);
    setSelectedVehicle(clickedVehicle)
    
  };
  const handleCloseModal = () => {
    setToggle(false);
  };
  const handleSearch = (searchTerm) => {
    const filtered = data.filter((vehicle) =>
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filtered);
  };

  const handleFilter = (filterKey, filterValue) => {
    console.log(filterKey, filterValue);
    let filtered = [...filterData];
    console.log(filtered);

    if (filterKey === "make") {
      filtered = data.filter(
        (vehicle) => vehicle.make.toLowerCase() === filterValue.toLowerCase()
      );
    }

    setFilterData(filtered);
    if (filterValue === "All") {
      setFilterData(data);
      console.log();
    }
  };
  

  const handleSort = (sortKey) => {
    let sorted = [...filterData];

    if (sortKey === "price") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortKey === "newest") {
      sorted = sorted.sort((a, b) => b.year - a.year);
    } else if (sortKey === "mileage") {
      sorted = sorted.sort((a, b) => a.mileage - b.mileage);
    }
    setFilterData(sorted);
  };

  const handleToggleFavorite = (id) => {
    const updatedData = filterData.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    console.log(updatedData);
    setFilterData(updatedData);
    
  };

  return (
    <>
      <div className={styles.nav}>
        <img src={logo} alt="logo" style={{ height: "70px", width: "150px" }} />
        <SearchBar onSearch={handleSearch} data={data}/>
        <Favourites favouriteItems={favouriteItems} />
      </div>
      <div className={styles.filterandsort}>
        <FilterProduct vehicles={data} onFilter={handleFilter} />
        <SortProduct onSort={handleSort} />
      </div>
      <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Mileage</th>
              <th>Price</th>
              <th>Images</th>
              <th>IsFavourite</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filterData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>{item.year}</td>
                <td>{item.mileage}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    style={{ width: "80px", height: "auto" , cursor: 'pointer'}}
                    src={item.images[0]}
                    alt={item.model}
                    onClick={() => {
                      handleImageClick(item.id);
                    }}
                  />
                </td>
                <td
                  onClick={() => handleToggleFavorite(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.isFavorite ? <input type="checkbox" checked={true}/> : <input type="checkbox" checked={false} /> }
                </td>
                <td>Available</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {
          toggle && selectedVehicle && <ProductDetailsModal  vehicle={selectedVehicle}
          closeModal={handleCloseModal}/>
        }
      </div>
     

     
    </>
  );
};

export default VehicleListing;

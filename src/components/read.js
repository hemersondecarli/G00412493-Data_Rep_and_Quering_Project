import { useEffect, useState } from "react";
import axios from "axios";
import Trips from "./trips";
import Search from "./search";
import { footerStyle, Footer } from './footer'; 

// Functional component representing the Read page
function Read() {
  // State to store the fetched data and filtered data for trips
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get("http://localhost:4000/api/trips")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to reload data by making a new API request
  const reload = () => {
    axios.get("http://localhost:4000/api/trips")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle search input and filter trips based on location
  const handleSearch = (searchTerm) => {
    const filteredTrips = data.filter((trip) =>
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredTrips);
  };

  // Render the Read component
  return (
    <div style={{ position: "relative" }}>
      <h2>Pokedex Personalised</h2>
      <Search onSearch={handleSearch} />
      <Trips myTrips={filteredData.length > 0 ? filteredData : data} ReloadData={reload} />
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the Read component for use in other files
export default Read;

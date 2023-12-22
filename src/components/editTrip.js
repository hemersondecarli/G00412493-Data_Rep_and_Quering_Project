import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { footerStyle, Footer } from './footer'; 

// React functional component for editing a trip
export default function Edit() {
  // Get the id parameter from the URL using React Router's useParams
  let { id } = useParams();

  // State variables for form input fields
  const [location, setLocation] = useState('');
  const [cover, setCover] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // Access the navigation function from React Router
  const navigate = useNavigate();

  // Styles for various containers
  const contentContainerStyle = {
    display: "flex", // Use flexbox to arrange content
    padding: "20px",
    textAlign: "left",
  };

  const formContainerStyle = {
    flex: 1, // Take up 1 part of the flex container
  };

  const imageContainerStyle = {
    marginLeft: "10px", // Adjusted margin to move the image more to the left
    marginRight: "200px", // Added margin to bring the image closer to the forms
    marginTop: "50px", // Adjusted top margin for the image
    textAlign: "left",
  };

  // Use useEffect to fetch the trip data based on the id when the component mounts
  useEffect(
    () => {
      axios.get('http://localhost:4000/api/trip/' + id)
        .then((response) => {
          setLocation(response.data.location);
          setCover(response.data.cover);
          setDescription(response.data.description);
          setDate(response.data.date);

        })
        .catch(
          (error) => {
            console.log(error);
          }
        );
    }, [id] // Include id as a dependency to re-fetch data when id changes
  );

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create trip object with updated form values
    const trip = {
      location: location,
      cover: cover,
      description: description,
      date: date
    };

    // Use Axios to make a PUT request to update the trip
    axios.put('http://localhost:4000/api/trip/' + id, trip)
      .then((res) => {
        // Navigate to the 'read' page after successful submission
        navigate('/read');
      })
      .catch(
        (error) => {
          console.log(error)
        });
  }

  // Return JSX for the component
  return (
    <div >
      <h2>EDIT POKEMON</h2>
      {/* Form for editing a trip */}
      <form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem" }}>
          <label>Edit Pokemon name: </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%", marginTop: "1rem", border: "3px solid black" }}
            value={location}
            onChange={(e) => { setLocation(e.target.value) }}
          />
        </div>
        {/* Repeat similar blocks for other input fields */}
        <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem" }}>
          <label>Edit Poke Cover: </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%", marginTop: "1rem", border: "3px solid black" }}
            value={cover}
            onChange={(e) => { setCover(e.target.value) }}
          />
        </div>
        <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem" }}>
          <label>Edit Pokemon Description: </label>
          <textarea
            className="form-control"
            style={{ width: "50%", marginTop: "1rem", border: "3px solid black" }}
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            rows={4}
          />
        </div>
        <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem" }}>
          <label>Edit Encounter Date: </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%", marginTop: "1rem", border: "3px solid black" }}
            value={date}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </div>
        {/* Submit button */}
        <div style={{ textAlign: "left", marginTop: "1rem" }}>
          <input type="submit" value="Update Pokemon"></input>
        </div>
      </form>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

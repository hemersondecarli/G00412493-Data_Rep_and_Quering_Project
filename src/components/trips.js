import TripItem from "./poItem";

// Functional component representing a list of trips
function Trips(props){

    // Map through the list of trips and render a TripItem component for each trip
    return props.myTrips.map(
        (trip)=>{
            // Each TripItem is passed the trip data as a prop, a unique key, and a Reload function to update the trip list
            return <TripItem myTrip={trip} key={trip._id} Reload={()=>{props.ReloadData();}}></TripItem>
        }
    );

}

// Exporting the Trips component for use in other files
export default Trips; 
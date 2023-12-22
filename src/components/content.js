// Import modules
import { footerStyle, Footer } from './footer'; // Adjust the path based on your project structure

// React functional component for the main content
function Content() {
  // Styles for the images
  const imageStyle = {
    width: "100%",
    maxWidth: "633px",
    height: "300px",
    margin: "1px",
    border: "5px solid black",
    transition: "transform 0.2s", // Add a smooth transition effect
  };

  // Styles for the grid container
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px", // Reduce the gap between images
    justifyContent: "center", // Center the container horizontally
  };

  // Styles for the main content container
  const contentContainerStyle = {
    padding: "20px", // Add padding for spacing
    textAlign: "left", // Align text to the left
  };

  return (
    //Header
    <div style={contentContainerStyle}>
      <h1>Pokemon Pokedex</h1>
      <h2>Time is: {new Date().toLocaleTimeString()}</h2>
      <br></br>

      {/* Grid container for images */}
      <div style={gridContainerStyle}>

        {/* Bulbasaur pokedex link */}
        <a href="https://www.pokemon.com/us/pokedex/bulbasaur" target="_blank" rel="noopener noreferrer">
          <img
            src="/bulbasaur.png"
            alt="bulbasaur"
            style={imageStyle}
          />
        </a>

        {/* Ivysaur pokedex link*/}
        <a href="https://www.pokemon.com/us/pokedex/ivysaur" target="_blank" rel="noopener noreferrer">
          <img
            src="/ivysaur.png"
            alt="ivysaur"
            style={imageStyle}
          />
        </a>

        <a href="https://www.pokemon.com/us/pokedex/venusaur" target="_blank" rel="noopener noreferrer">
          <img
            src="/venusaur.png"
            alt="venusaur"
            style={imageStyle}
          />
        </a>

        {/* pokeball Img*/}
          <img
            src="/pokeball.png"
            alt="pokeball"
            style={imageStyle}
          />
     

          <img
            src="/greatball.png"
            alt="greatball"
            style={imageStyle}
          />
    

      
          <img
            src="/ultraball.png"
            alt="ultraball"
            style={imageStyle}
          />
       
      </div>

      {/* PokeDex */}
      <br></br>
      <h1>Pokedex System</h1>
      <br></br>
      <h6>
        <p>A Pokédex is a fictional electronic device from the Pokémon franchise that serves as an encyclopedia or database of Pokémon species. In the Pokémon world, trainers use Pokédexes to collect information about the various Pokémon they encounter during their journey. While the Pokédex is a fictional concept, its functionality can be explained as follows:</p>
        <p>Data Collection: When a Pokémon is encountered, the Pokédex scans the Pokémon and collects data about its species, habitat, behavior, and other relevant information. This process may involve advanced technologies, such as sensors and scanners, to analyze the Pokémon's characteristics.</p>
        <p>Identification: The Pokédex uses its database to identify the Pokémon based on the collected data. It compares the scanned information with the existing records to determine the specific species of the Pokémon.</p>
        <p>Display Information: Once the Pokémon is identified, the Pokédex displays relevant information on its screen. This information typically includes the Pokémon's name, type, height, weight, and a brief description of its characteristics. In some cases, additional details such as the Pokémon's cry or unique features may also be included.</p>
        <p>And so much more.</p>
      </h6>
      <ul>
        <li>
          <a href="https://www.pokemon.com/us/pokedex" target="_blank" rel="noopener noreferrer">
            Click Here to gain Pokedex access
          </a>
        </li>
      </ul>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the styles and the component for use in other files
export default Content;

import React from 'react';

const footerStyle = {
  marginTop: "20px", // Add margin at the top to separate from content
  backgroundColor: "black", // Set background color to Bootstrap dark theme
  padding: "10px", // Add padding for spacing
  textAlign: "center", // Align text to the center
  color: "white", // Set text color to white for better visibility
};

// Functional component representing the footer
function Footer() {
  return (
    <div style={footerStyle}>
      <h5>Gotta catch 'Em all!</h5>
    </div>
  );
}

// Exporting the styles and the component for use in other files
export { footerStyle, Footer };

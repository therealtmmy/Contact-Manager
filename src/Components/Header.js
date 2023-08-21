import React from "react";

const Header = () => {
    const centerText = {
        display: "flex",
        justifyContent: "center",
        alignItems: "Center"
    }

  return (
  <div className="ui fixed menu" style={centerText}>
    <div> 
        <h2>Contact Manager</h2>
    </div>
  </div>
  );
};

export default Header;

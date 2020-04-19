import React from "react";

// Todo:
// position relative to the row not the circle element
// use mousein and mouse out for mount th eelement
// you can change the color even if you selected
// if all options selected show green ok button
// check if the code is the same
const SelectCodeUp = props => {
  return (
    <div className="codeOptions">
      <div className="toggle-button red" />
      <div className="toggle-button blue" />
      <div className="toggle-button green" />
      <div className="toggle-button yellow" />
    </div>
  );
};

export default SelectCodeUp;

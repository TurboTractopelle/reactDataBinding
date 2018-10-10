import React from "react";

const Inputbox = ({ name, onChange }) => (
  <input name={name} type="text" onChange={onChange} />
);

export default Inputbox;

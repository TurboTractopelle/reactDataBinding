import React from "react";

const Message = ({ firstName, firstNameError, lastName, lastNameError }) => {
  return (
    <div>
      <span className={firstNameError ? "green" : "red"}>firstName:</span>{" "}
      {firstName}
      <span className={lastNameError ? "green" : "red"}>lastName:</span>{" "}
      {lastName}
    </div>
  );
};

export default Message;

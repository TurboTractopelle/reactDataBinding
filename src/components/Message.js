import React from "react";

const Message = ({ firstName, firstNameError, lastName, lastNameError }) => {
  return (
    <div>
      <p>
        <span className={firstNameError ? "green" : "red"}>firstName:</span>{" "}
        {firstName}
      </p>
      <p>
        <span className={lastNameError ? "green" : "red"}>lastName:</span>{" "}
        {lastName}
      </p>
      <p>At lest 3 letters for each</p>
    </div>
  );
};

export default Message;

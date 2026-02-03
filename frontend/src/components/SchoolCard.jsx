import React from "react";
import "../styles/SchoolCard.css";

const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <img src={school.image} alt={school.name} />

      <div className="school-info">
        <h3>{school.name}</h3>
        <p>{school.address}</p>
        <p>{school.city}</p>
      </div>
    </div>
  );
};

export default SchoolCard;

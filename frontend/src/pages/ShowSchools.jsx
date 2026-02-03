import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ShowSchools.css";
import SchoolCard from "../components/SchoolCard";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schools")
      .then((res) => setSchools(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="schools-page">
      <h2 className="schools-title">Schools</h2>

      <div className="schools-grid">
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;

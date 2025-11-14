import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";

export default function Education({data}) {
  if (data.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{data.title}</h1>
        <div className="education-card-container">
          {data.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

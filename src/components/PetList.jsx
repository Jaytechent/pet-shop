import React from "react";
import PetCard from "../components/PetCard";

const PetList = ({ pets }) => {
  // Assuming 'pet' is an array of pets with unique IDs

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pets.map((pets) => (
        <PetCard key={pets.id} {...pets} />
      ))}
    </div>
  );
};

export default PetList;

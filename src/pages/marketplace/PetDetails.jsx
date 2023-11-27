import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pets } from "../../../pet";

const PetDetails = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  const findPetById = () => {
    let foundPet = pets.find((item) => item.id === parseInt(petId));
    setPet(foundPet);
    return foundPet;
  };

  useEffect(() => {
    findPetById();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, [petId]);

  if (loading) {
    return <h1>Loading Details</h1>;
  }

  return (
    <div>
      <h1>More Details about the pet</h1>
      <h3>{pet.name}</h3>
      {/* Add more details as needed */}
    </div>
  );
};

export default PetDetails;

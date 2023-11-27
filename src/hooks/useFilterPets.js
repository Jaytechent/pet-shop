import React from "react";
import { pets } from "../../pet";

export const useFilterPets = (params) => {
  const { value, filterType } = params;
  const [petData, setPetData] = React.useState(pets);

  // Logic
  React.useEffect(() => {
    let filteredPets = pets;

    if (value !== "") {
      // Filter by race
      filteredPets = filteredPets;
    }

    if (filterType === "race") {
      // Filter by race
      filteredPets = filteredPets.filter((pet) => pet.race === value);
    }
    if (filterType === "location") {
      // Filter by location
      filteredPets = filteredPets.filter((pet) => pet.location === value);
    }

    if (filterType === "type") {
      // Filter by type
      filteredPets = filteredPets.filter((pet) => pet.type === value);
    }

    if (filterType === "name") {
      // Filter by type
      filteredPets = filteredPets.filter((pet) =>
        pet.name.toLocaleLowerCase().includes(value.toLowerCase().trim())
      );
    }

    setPetData(filteredPets);
  }, [value, filterType]); // Run the effect whenever 'value' or 'filterType' changes

  return { petData };
};

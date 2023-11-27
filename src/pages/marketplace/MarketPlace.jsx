import React from "react";

import { Filters } from "../../components/Filters";
import PetList from "../../components/PetList";
import { useFilterPets } from "../../hooks/useFilterPets";

const MarketPlace = () => {
  const [filterState, setFilterState] = React.useState({
    value: "",
    filterType: "",
  });

  const { petData } = useFilterPets(filterState);
  return (
    <div>
      <Filters setFilterState={setFilterState} />
      <PetList pets={petData} />
    </div>
  );
};

export default MarketPlace;

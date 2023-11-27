import React from "react";
import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export const Filters = ({ setFilterState }) => {
  const handleRaceFilter = (value) => {
    setFilterState({ filterType: "race", value: value });
  };

  const handleTypeFilter = (value) => {
    setFilterState({ filterType: "type", value: value });
  };

  const handleLocationFilter = (value) => {
    setFilterState({ filterType: "location", value: value });
  };

  return (
    <>
      <b>Filters </b>{" "}
      <Space wrap>
        <Select
          defaultValue="Race"
          style={{
            width: 120,
          }}
          onChange={handleRaceFilter}
          options={[
            {
              value: "German Wild",
              label: "German Wild",
            },
            {
              value: "wild",
              label: "Wild",
            },
            {
              value: "German Shepard",
              label: "German Shepard",
            },
          ]}
        />
        <Select
          defaultValue="Location"
          style={{
            width: 120,
          }}
          onChange={handleLocationFilter}
          options={[
            {
              value: "America",
              label: "America",
            },
            {
              value: "Africa",
              label: "Africa",
            },
            {
              value: "United States",
              label: "United State",
            },
            {
              value: "Africa Asia and America",
              label: "Africa Asia and America",
            },
            {
              value: "Europe",
              label: "Europe",
            },
            {
              value: "Asia",
              label: "Asia",
            },
          ]}
        />
        <Select
          defaultValue="Type"
          style={{
            width: 120,
          }}
          onChange={handleTypeFilter}
          options={[
            {
              value: "black",
              label: "Black",
            },
            {
              value: "grey and white",
              label: "Grey and White",
            },
            {
              value: "black and brown",
              label: "Black and Brown",
            },
            {
              value: "black and white",
              label: "Black and White",
            },
          ]}
        />
      </Space>
    </>
  );
};

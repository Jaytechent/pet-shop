import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const PetCard = ({ id, name, photo, location, type, race, adopted }) => {
  return (
    <Link to={`/marketplace/pet/${id}`}>
      <Card
        style={{ width: 200, margin: 10 }}
        cover={
          <img
            style={{ width: "200px", height: "200px" }}
            alt={name}
            src={`${photo} `}
          />
        }
      >
        <Meta title={name} />
        <div className="mt-8">
          <Button>{race}</Button>
          <Button>{location}</Button>
          <Button>{type}</Button>
          <Button>{adopted ? "Adopted" : "Available"}</Button>
        </div>
      </Card>
    </Link>
  );
};

export default PetCard;
